import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { Article } from "../data/articles";

export function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/articles/${id}?populate=*`);
        if (!response.ok) throw new Error('Failed to fetch article');
        const json: { data: Article } = await response.json();
        setArticle(json.data);
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Failed to load article. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>Loading article...</div>;
  if (error) return <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>{error}</div>;
  if (!article) {
    return (
      <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
        <p>Nie znaleziono artykułu.</p>
        <Link to="/">← Wróć do listy</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <Link to="/">← Wróć do listy</Link>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
