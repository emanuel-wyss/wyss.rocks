import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PAGE_QUERY, PAGES_QUERY } from "@/sanity/lib/queries";
import type { PAGE_QUERYResult, PAGES_QUERYResult } from "@/sanity/types";
import { PageView } from "../_components/PageView";

export const revalidate = 300;

type SlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: SlugPageProps) {
  const { slug } = await params;

  if (!slug || slug === "edit") {
    notFound();
  }

  const page = await client.fetch<PAGE_QUERYResult>(PAGE_QUERY, { slug });

  if (!page) {
    notFound();
  }

  return <PageView title={page.title ?? null} content={page.content ?? null} />;
}

export async function generateStaticParams() {
  const pages = await client.fetch<PAGES_QUERYResult>(PAGES_QUERY);

  return pages
    .map(({ slug }) => slug?.current)
    .filter((slug): slug is string => Boolean(slug && slug !== "edit"))
    .map((slug) => ({ slug }));
}
