import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ArticleDetailsPage } from './pages/ArticleDetailsPage';
import { ArticlesListPage } from './pages/ArticlesListPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ArticlesListPage />,
  },
  {
    path: "/articles/:id",
    element: <ArticleDetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
