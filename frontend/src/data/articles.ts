// Remove the mock articles array since we'll fetch from Strapi
// export const articles: Article[] = [...]; // Delete this

// Keep the Article type for frontend use
export type Article = {
  id: string;
  documentId: string
  title: string;
  summary: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: RichTextBlock[];
};



export type RichTextBlock = {
  __component: "shared.rich-text";
  id: number;
  body: string; // markdown
};
