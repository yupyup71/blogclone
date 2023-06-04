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
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "9ypsgm42",
    dataset: "production",
    apiVersion: "2023-03-04",
  });

  return client.fetch(
    groq`*[_type =="project" && slug.current ==$slug][0]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug }
  );
}
