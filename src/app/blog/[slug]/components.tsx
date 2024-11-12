import Image from "next/image";
import { Author, PostImage, RelatedPost } from "./types";
import Link from "next/link";

export function BlogImage({
  image,
  priority = false,
}: {
  image: PostImage;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-2xl">
      <Image
        src={image.url}
        alt={image.alt || "Blog post image"}
        fill
        priority={priority}
        className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
      />
    </div>
  );
}

export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-[#333333] rounded-xl">
      {author.picture && (
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image
            src={author.picture}
            alt={author.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}
      <div>
        <h3 className="text-gray-200 font-medium">{author.name}</h3>
        {author.bio && (
          <p className="text-gray-400 text-sm line-clamp-2">
            {author.bio[0].children[0].text}
          </p>
        )}
      </div>
    </div>
  );
}

export function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-100">Related Posts</h2>
      <div className="flex flex-col space-y-4">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="flex flex-col p-4 bg-[#333333] rounded-xl transition-transform duration-300 hover:-translate-y-1"
          >
            {post.coverImage && (
              <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.coverImage.url}
                  alt={post.coverImage.alt || post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-100 mb-2">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="text-gray-400 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
