import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import type { Article } from "@/data/articles";
import { ArrowLink } from "@/components-library/ArrowLink";
import { ErrorCard } from "@/components-library/ErrorCard";
import { stripMarkdown } from "@/config/seo";
import { SITE_NAME } from "@/config/seo";

const API_URL = process.env.API_URL ?? "http://localhost:1337";

async function getArticle(id: string): Promise<Article | null> {
    const response = await fetch(`${API_URL}/api/articles/${id}?populate=*`, {
        next: { revalidate: 60 },
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error("Failed to fetch article");
    const json: { data: Article } = await response.json();
    return json.data;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const article = await getArticle(id).catch(() => null);

    if (!article) return { title: "Article not found" };

    const description =
        article.summary?.trim() ||
        (article.text ? stripMarkdown(article.text, 160) : "Read this blog article.");

    return {
        title: article.title,
        description,
        alternates: { canonical: `/articles/${id}` },
        openGraph: {
            type: "article",
            title: article.title,
            description,
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt,
            siteName: SITE_NAME,
        },
    };
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    let article: Article | null = null;
    let fetchError: string | null = null;

    try {
        article = await getArticle(id);
    } catch {
        fetchError = "Failed to load article. Please try again.";
    }

    if (fetchError) {
        return <ErrorCard message={fetchError} title="Error loading article" />;
    }

    if (!article) notFound();

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                <ArrowLink href="/blog" text="Back to articles" direction="backward" />

                <div className="mt-6 relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-100">
                        {article.title}
                    </h1>

                    <div className="mt-8 h-px bg-gray-700/60" />

                    <article className="markdown-body mt-8! bg-transparent text-gray-100">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw, rehypeSanitize]}
                        >
                            {article.text}
                        </ReactMarkdown>
                    </article>
                </div>

                <ArrowLink
                    className="my-6"
                    href="/blog"
                    text="Back to articles"
                    direction="backward"
                />
            </div>
        </div>
    );
}
