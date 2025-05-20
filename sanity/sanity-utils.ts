import { createClient, groq } from "next-sanity";

export async function getPages() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: "2025-05-20",
    useCdn: true,
  });
  client.fetch(
    groq`*[_type == "page"]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    "slug" => slug.current,
    content,
  }`
  );
}
