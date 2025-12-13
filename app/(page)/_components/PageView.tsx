import { PortableText } from "@portabletext/react";
import type { PAGE_QUERYResult } from "@/sanity/types";

type PageViewProps = {
  title: NonNullable<PAGE_QUERYResult>["title"];
  content: NonNullable<PAGE_QUERYResult>["content"];
};

export function PageView({ title, content }: PageViewProps) {
  const hasContent = Array.isArray(content) && content.length > 0;

  return (
    <article className="prose max-w-none">
      {title ? <h1 className="mb-6 text-4xl font-semibold">{title}</h1> : null}
      {hasContent ? (
        <PortableText value={content ?? []} />
      ) : (
        <p className="text-gray-500">No content available yet.</p>
      )}
    </article>
  );
}
