import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { ArticleDetailsPage } from './components/ArticleDetails'
import { ArticlesListPage } from './components/ArticlesList'
import { About } from './components/About'
import App from './App'
import "github-markdown-css/github-markdown.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />,
      },
      {
        path: "/blog",
        element: <ArticlesListPage />,
      },
      {
        path: "/articles/:id",
        element: <ArticleDetailsPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
