// src/pages/ArticlesListPage.tsx
import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export function ArticlesListPage() {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filtered = articles.filter(a =>
    `${a.title} ${a.summary}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h1>Artykuły</h1>

      <input
        type="text"
        placeholder="Szukaj artykułów..."
        value={query}
        onChange={handleChange}
        style={{ width: "100%", padding: 8, marginBottom: 16 }}
      />

      {filtered.length === 0 ? (
        <p>Brak wyników.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filtered.map(article => (
            <li
              key={article.id}
              style={{
                border: "1px solid #ddd",
                padding: 12,
                marginBottom: 8,
                borderRadius: 4
              }}
            >
              <h2 style={{ margin: "0 0 4px" }}>{article.title}</h2>
              <p style={{ margin: "0 0 8px" }}>{article.summary}</p>
              <Link to={`/articles/${article.id}`}>Czytaj więcej</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
