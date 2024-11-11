/* eslint-disable @typescript-eslint/no-explicit-any */
const post = {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required().min(10).max(80),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
    },
    {
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      description: "A short summary of the post for previews.",
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
        {
          type: "quote",
        },
        {
          type: "embed",
        },
      ],
    },
  ],
};

export default post;
