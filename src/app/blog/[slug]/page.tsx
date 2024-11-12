/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import sanityClient from "@/utils/sanityClient";
import { notFound } from "next/navigation";
import { AuthorCard, BlogImage, RelatedPosts } from "./components";
import { PortableText } from "@portabletext/react";
import { FaCalendar, FaClock, FaTag } from "react-icons/fa";
import { Metadata } from "next";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const query = `
  *[_type == "post"]
`;
  const posts = await sanityClient.fetch(query);

  console.log("dwdwd", posts);

  return posts.map((ipo: any) => ({
    slug: String(ipo?.slug?.current),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const query = `
      *[_type == "post" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      body[]{
        ...,
        _type == "image" => {
          ...,
          "url": asset->url,
          "dimensions": asset->metadata.dimensions,
          "lqip": asset->metadata.lqip,
          "alt": alt,
          caption
        },
        markDefs[]{
          ...,
          _type == "link" => {
            "href": href
          }
        }
      },
      excerpt,
      "coverImage": coverImage {
        "url": asset->url,
        "alt": alt,
        "lqip": asset->metadata.lqip,
        "dimensions": asset->metadata.dimensions,
        "blurHash": asset->metadata.blurHash,
        hotspot,
        crop
      },
      "author": author-> {
        _id,
        name,
        "slug": slug.current,
        bio,
        "picture": picture.asset->url
      },
      publishedAt,
      "tags": tags,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      "related": *[_type == "post" && slug.current != $slug && count(tags[@] in ^.tags) > 0] | order(publishedAt desc, _createdAt desc) [0...3] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        "coverImage": coverImage {
          "url": asset->url,
          "alt": alt,
          "lqip": asset->metadata.lqip
        }
      }
    }
  `;
  const post = await sanityClient.fetch(query, { slug: params.slug });

  if (!post) {
    notFound();
  }

  const components = {
    types: {
      image: ({ value }: any) => <BlogImage image={value} />,
      quote: ({ value }: any) => (
        <blockquote className="border-l-4 border-gray-500 pl-4 my-6 italic text-gray-300">
          {value.quote}
          {value.author && (
            <footer className="text-gray-400 mt-2">— {value.author}</footer>
          )}
        </blockquote>
      ),
      embed: ({ value }: any) => (
        <div className="relative aspect-video my-8">
          <iframe
            src={value.url}
            className="absolute inset-0 w-full h-full rounded-xl"
            allowFullScreen
          />
        </div>
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <main className="blogs min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-400 mb-8">
            <div className="flex items-center">
              <FaCalendar className="w-4 h-4 mr-2" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt)
                  .toUTCString()
                  .split(" ")
                  .slice(1, 4)
                  .join(" ")}
              </time>
            </div>
            <div className="flex items-center">
              <FaClock className="w-4 h-4 mr-2" />
              <span>{post.estimatedReadingTime} min read</span>
            </div>
          </div>

          {post.coverImage && <BlogImage image={post.coverImage} priority />}

          {post.excerpt && (
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          )}

          {post.author && <AuthorCard author={post.author} />}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: any) => (
                <span
                  key={tag}
                  className="flex items-center px-3 py-1 bg-[#333333] rounded-full text-sm text-gray-300"
                >
                  <FaTag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Tags */}

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <PortableText value={post.body} components={components} />
        </div>

        {/* Related Posts */}
        {post.related && post.related.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-700">
            <RelatedPosts posts={post.related} />
          </div>
        )}
      </article>
    </main>
  );
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      excerpt,
      "coverImage": coverImage.asset->url,
      "authorName": author->name,
      publishedAt
    }
  `;
  const data = await sanityClient.fetch(query, { slug: params.slug });

  return {
    title: data?.title,
    description: data?.excerpt,
    robots: "index, follow",
    openGraph: {
      title: data?.title,
      description: data?.excerpt,
      images: [
        {
          url: data?.coverImage,
          width: 1200,
          height: 630,
          alt: data?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.excerpt,
      images: [data?.coverImage],
    },
  };
}
