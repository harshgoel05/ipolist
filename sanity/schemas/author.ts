/* eslint-disable @typescript-eslint/no-explicit-any */
const author = {
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      type: "array",
      title: "Bio",
      of: [{ type: "block" }],
    },
  ],
};

export default author;
