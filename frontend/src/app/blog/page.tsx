import type { Metadata } from "next";
import type { Article } from "@/data/articles";
import { ErrorCard } from "@/components-library/ErrorCard";
import { ArticlesSearch } from "@/components/ArticlesSearch";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Articles about frontend development, Angular, TypeScript, and modern web engineering.",
    alternates: { canonical: "/blog" },
};

const API_URL = process.env.API_URL ?? "http://localhost:1337";

async function getArticles(): Promise<Article[]> {
    const response = await fetch(`${API_URL}/api/articles`, {
        next: { revalidate: 60 },
    });
    if (!response.ok) throw new Error("Failed to fetch articles");
    const json: { data: Article[] } = await response.json();
    return json.data;
}

export default async function BlogPage() {
    try {
        const articles = await getArticles();
        return <ArticlesSearch articles={articles} />;
    } catch (err) {
        return (
            <ErrorCard
                message={err instanceof Error ? err.message : "Failed to fetch articles"}
                title="Error loading articles"
            />
        );
    }
}
