import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { Article } from "../data/articles";
import { ArrowLink } from "../components-library/ArrowLink";
import { Loader } from "../components-library/Loader";
import { ErrorCard } from "../components-library/ErrorCard";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { API_URL } from "../config/api";

export function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useDocumentTitle(article?.title ?? "Loading...");

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${API_URL}/api/articles/${id}?populate=*`
        );
        if (!response.ok) throw new Error("Failed to fetch article");

        const json: { data: Article } = await response.json();
        setArticle(json.data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load article. Please try again.");
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const markdown = useMemo(() => {
    if (!article?.text) return "";
    return article.text;
  }, [article]);

  if (loading) return <Loader text="Loading article..." />;
  if (error) {
    return <ErrorCard message={error} title="Error loading article" />;
  }
  if (!article) {
    return (
      <div className="mx-auto max-w-3xl p-4">
        <p>Nie znaleziono artykułu.</p>
        <ArrowLink to="/blog" text="Back to articles" direction="backward" />
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <ArrowLink to="/blog" text="Back to articles" direction="backward" />


        <div className="mt-6 relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-100">
            {article.title}
          </h1>

          <div className="mt-8 h-px bg-gray-700/60" />

          {/* GitHub markdown styling */}
          <article className="markdown-body mt-8 bg-transparent text-gray-100">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>

        <ArrowLink className="my-6" to="/blog" text="Back to articles" direction="backward" />
      </div>
    </div>
  );

}
