/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import sanityClient from "@/utils/sanityClient";
import Image from "next/image";
import Link from "next/link";
type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  coverImage: string;
};

const BlogsPage = ({ posts }: { posts: Post[] }) => {
  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Blog Posts",
    description:
      "Browse through our latest articles on The IPO List, offering insights, grey market premiun, and analyis for your upcoming IPOs.",
    url: "https://theipolist.in/blogs",
    mainEntity: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://theipolist.in/blog/${post.slug}`,
      datePublished: post.publishedAt,
      image: post.coverImage,
    })),
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="py-10 px-6">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
          <p className="text-gray-400 text-lg">
            Discover our curated selection of insightful articles and in-depth
            analyses, crafted to keep you informed and engaged.
          </p>
        </div>
      </header>

      {/* Blog Grid Section */}
      <main className="max-w-8xl mx-auto px-12 pb-16">
        <div className="flex flex-wrap -mx-4">
          {posts.map((post) => (
            <div key={post._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Link
                href={`/blog/${post.slug.current}`}
                className="block h-full no-underline"
              >
                <div className="h-full flex flex-col bg-[#2A2A2A] rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-400 transition-all">
                  {/* Image Container */}
                  <div className="relative pb-[56.25%]">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#2A2A2A] flex items-center justify-center">
                        <span className="text-gray-500">
                          No image available
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2 text-white hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-700 mt-auto">
                      <time className="text-sm text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
};
export default async function Page() {
  const query = `
    *[_type == "post"]{
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "coverImage": coverImage.asset->url
    }
  `;
  const posts: Post[] = await sanityClient.fetch(query);

  return <BlogsPage posts={posts} />;
}

export const metadata = {
  title: "All Blog Posts | The IPO List",
  description:
    "Browse through our latest articles on The IPO List, offering insights, grey market premiun, and analyis for your upcoming IPOs.",
  openGraph: {
    title: "All Blog Posts | The IPO List",
    description:
      "Browse through our latest articles on The IPO List, offering insights, tips, and stories for your journey.",
    images: [
      // {
      //   url: "/path-to-default-image.jpg", // Add a default OG image if possible
      //   width: 1200,
      //   height: 630,
      //   alt: "The IPO List Blog Cover",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blog Posts | The IPO List",
    description:
      "Check out our latest blog posts with insights, trends, and guides tailored for your needs.",
  },
};
