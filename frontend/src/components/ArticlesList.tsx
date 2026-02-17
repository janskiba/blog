import { useState, useEffect, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import type { Article } from "../data/articles";
import { ArrowLink } from "../components-library/ArrowLink";
import { Loader } from "../components-library/Loader";
import { Error } from "../components-library/Error";

export function ArticlesListPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/articles');
        const json: { data: Article[] } = await response.json();
        setArticles(json.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filtered = articles.filter(a =>
    `${a.title} ${a.summary}`.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return (
      <Loader text="Loading articles..." />
    );
  }

  if (error) {
    return (
      Error({ message: error, title: "Error loading articles" })
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Input */}
        <div className="relative mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <svg
              className="h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for articles..."
            value={query}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70"
          />
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-400 text-lg">No results found.</p>
            <p className="text-gray-600 text-sm mt-2">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map(article => (
              <Link
                to={`/articles/${article.documentId}`}
                key={article.id}
                className="block group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300"></div>

                <article className="relative">
                  <h2 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                  <ArrowLink to={`/articles/${article.documentId}`} text="Read more" direction="forward" />

                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
