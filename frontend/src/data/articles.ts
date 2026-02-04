export type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "Pierwszy artykuł",
    summary: "Krótki opis pierwszego artykułu",
    content: "Pełna treść pierwszego artykułu..."
  },
  {
    id: "2",
    title: "Drugi artykuł",
    summary: "Krótki opis drugiego artykułu",
    content: "Pełna treść drugiego artykułu..."
  }
];
