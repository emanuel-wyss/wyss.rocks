import { defineQuery } from "next-sanity";

export const PAGES_QUERY =
  defineQuery(`*[_type == "page" && defined(slug.current)]{
  _id, title, slug
}`);

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  title, content
}`);
