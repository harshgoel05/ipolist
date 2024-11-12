import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "0l77o0jq", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2023-01-01",
});

export default client;
