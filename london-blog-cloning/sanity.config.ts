import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "9ypsgm42",
  dataset: "production",
  title: "Blog for NiNi",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
