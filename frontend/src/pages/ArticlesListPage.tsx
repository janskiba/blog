// Import React hooks: useState for managing component state, useEffect for side effects (like fetching data)
// ChangeEvent is a TypeScript type for input change events
import { useState, useEffect, ChangeEvent } from "react";

// Import Link from react-router-dom for navigation between pages
import { Link } from "react-router-dom";

// Import types and helper function from our data module
import { Article } from "../data/articles";

// Define a functional component (React's way of creating reusable UI pieces)
// This component displays a list of articles with search functionality
export function ArticlesListPage() {
  // useState hook: Creates state variables that trigger re-renders when updated
  // articles: Array of Article objects, initially empty
  const [articles, setArticles] = useState<Article[]>([]);
  // loading: Boolean to show loading state, initially true
  const [loading, setLoading] = useState(true);
  // error: String or null for error messages
  const [error, setError] = useState<string | null>(null);
  // query: String for search input, initially empty
  const [query, setQuery] = useState("");

  // useEffect hook: Runs side effects (like API calls) after the component renders
  // Empty dependency array [] means it runs only once, on mount (like componentDidMount in class components)
  useEffect(() => {
    // Define an async function inside useEffect to fetch data
    const fetchArticles = async () => {
      try {
        // Fetch data from Strapi API (note: ?populate=* was added earlier to include all fields)
        const response = await fetch('http://localhost:1337/api/articles');
        // Throw error if response not ok (e.g., 404, 500)
        // if (!response.ok) throw new Error('Failed to fetch articles');
        // Parse JSON response
        const json: { data: Article[] } = await response.json();
        // Transform Strapi data to our Article format using the helper function
        // Update state with transformed articles (triggers re-render)
        setArticles(json.data);
      }  finally {
        // Always set loading to false, whether success or error
        setLoading(false);
      }
    };
    // Call the async function
    fetchArticles();
  }, []);

  // Event handler for input change: Updates query state as user types
  // e: ChangeEvent<HTMLInputElement> is TypeScript for the event object
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // e.target.value is the input's current value
  };

  // Filter articles based on search query: Computed on every render
  // Uses array.filter to find articles where title or summary includes the query (case-insensitive)
  const filtered = articles.filter(a =>
    `${a.title} ${a.summary}`.toLowerCase().includes(query.toLowerCase())
  );

  // Conditional rendering: Show loading message if still fetching
  if (loading) return <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>Loading articles...</div>;
  // Show error message if fetch failed
  if (error) return <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>{error}</div>;

  // JSX return: Describes the UI structure (React's syntax for HTML-like elements)
  // This is the main render output of the component
  return (
    // Container div with inline styles (React allows CSS-in-JS)
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h1>Articles</h1>

      {/* Controlled input: Value tied to state, onChange updates state */}
      <input
        type="text"
        placeholder="Search for articles..."
        value={query} // Controlled by state
        onChange={handleChange} // Calls handler on change
        style={{ width: "100%", padding: 8, marginBottom: 16 }}
      />

      {/* Conditional rendering with ternary operator: Show message or list */}
      {filtered.length === 0 ? (
        <p>No results.</p>
      ) : (
        // Unordered list for articles
        <ul style={{ listStyle: "none", padding: 0 }}>
          {/* Map over filtered articles: Render a list item for each */}
          {/* Key prop is required for React to track list items efficiently */}
          {filtered.map(article => (
            <li
              key={article.id} // Unique key for each item
              style={{
                border: "1px solid #ddd",
                padding: 12,
                marginBottom: 8,
                borderRadius: 4
              }}
            >
              {/* Display article title and summary */}
              <h2 style={{ margin: "0 0 4px" }}>{article.title}</h2>
              <p style={{ margin: "0 0 8px" }}>{article.summary}</p>
              {/* Link component from react-router-dom: Navigates to article details page */}
              <Link to={`/articles/${article.id}`}>Read more...</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

