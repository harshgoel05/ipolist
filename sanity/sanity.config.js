import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./schemas";
export default defineConfig({
  projectId: "0l77o0jq", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset
  title: "The ipolist",
  // apiVersion: "2023-01-01",
  basePath: "/studio", // Route for Sanity Studio inside Next.js
  plugins: [structureTool()],
  schema: {
    types: schemas, // Register the schemas here
  },
});
