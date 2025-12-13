import { defineQuery } from "next-sanity";

export const PAGES_QUERY =
  defineQuery(`*[_type == "page" && defined(slug.current) && slug.current != "edit"]{
  _id, title, slug
}`);

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug && slug.current != "edit"][0]{
  title, content
}`);
