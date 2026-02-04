import { BLOG_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a blog post
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @returns blog post path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true
) {
  // Hardcode base path for GitHub Pages subdirectory
  const siteBase = "/journal";
  const basePath = includeBase ? `${siteBase}/posts` : "";

  // If using explicit slug in frontmatter, we don't need path segments
  // But this function receives 'id' which might be the slug if collection API set it so
  // For simplicity with Astro Paper's logic:
  
  const blogId = id.split("/");
  const slug = blogId.length > 0 ? blogId.slice(-1) : blogId;

  // Since we flattened the routing in [...slug].astro to use slug directly
  // We should just return base + slug
  return [basePath, slug].join("/");
}
