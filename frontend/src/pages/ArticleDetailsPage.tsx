import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

export function ArticleDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

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
