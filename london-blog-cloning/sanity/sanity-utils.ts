import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "9ypsgm42",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return client.fetch(
    groq`*[_type =="project"]{
            _id,
            _createAt,
            name,
            "slug": slug.content,
            "image": image.asset->url,
            url,
            content
        }`
  );
}
