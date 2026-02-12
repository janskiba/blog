// Remove the mock articles array since we'll fetch from Strapi
// export const articles: Article[] = [...]; // Delete this

// Keep the Article type for frontend use
export type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
