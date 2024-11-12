import { PortableTextBlock } from "@portabletext/types";

export interface ImageMetadata {
  dimensions: {
    width: number;
    height: number;
    aspectRatio: number;
  };
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
}

export interface SanityImage {
  _type: "image";
  asset: {
    url: string;
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface PostImage extends SanityImage {
  url: string;
  dimensions?: ImageMetadata["dimensions"];
  lqip?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: string;
  bio?: PortableTextBlock[];
  picture?: string;
}

export interface RelatedPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: {
    url: string;
    alt?: string;
    lqip?: string;
  };
}

export interface Block extends PortableTextBlock {
  _key: string;
  _type: "block";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  children: {
    _key: string;
    _type: "span";
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _key: string;
    _type: "link";
    href: string;
  }[];
}

export interface Quote {
  _key: string;
  _type: "quote";
  text: string;
  author?: string;
}

export interface Embed {
  _key: string;
  _type: "embed";
  url: string;
}

export type BodyContent = Block | PostImage | Quote | Embed;

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  body: BodyContent[];
  excerpt?: string;
  coverImage?: PostImage;
  author?: Author;
  publishedAt: string;
  tags: string[];
  estimatedReadingTime: number;
  related: RelatedPost[];
}

// Utility type for API responses
export interface QueryResponse<T> {
  data: T;
  loading: boolean;
  error?: string;
}

// Type for the query parameters
export interface PostQueryParams {
  slug: string;
}
