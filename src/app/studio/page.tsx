"use client";
import { NextStudio } from "next-sanity/studio";
import { structureTool } from "sanity/structure";
import schemas from "../../../sanity/schemas";

export default function StudioPage() {
  return (
    <NextStudio
      config={{
        projectId: "0l77o0jq", // Replace with your Sanity project ID
        dataset: "production", // Replace with your dataset
        title: "The ipolist",
        // apiVersion: "2023-01-01",
        basePath: "/studio", // Route for Sanity Studio inside Next.js
        plugins: [structureTool()],
        schema: {
          types: schemas, // Register the schemas here
        },
      }}
    />
  );
}
