const SITE_URL = (process.env.SITE_URL ?? "https://janskiba.dev").replace(/\/$/, "");

const staticUrls = ["/", "/about", "/blog"];

type ArticleEntity = {
    documentId?: string;
    updatedAt?: string;
};

function toUrlTag(path: string, lastmod?: string) {
    const safePath = path.startsWith("/") ? path : `/${path}`;
    const lastmodTag = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";

    return `<url><loc>${SITE_URL}${safePath}</loc>${lastmodTag}</url>`;
}

export default {
    async index(ctx: { type: string; body: string }) {
        const articles = (await strapi.documents("api::article.article").findMany({
            status: "published",
            fields: ["documentId", "updatedAt"],
            sort: { updatedAt: "desc" },
            pagination: {
                pageSize: 1000,
            },
        })) as ArticleEntity[];

        const urlEntries = [
            ...staticUrls.map((path) => toUrlTag(path)),
            ...articles
                .filter((article) => Boolean(article.documentId))
                .map((article) =>
                    toUrlTag(`/articles/${article.documentId}`, article.updatedAt)
                ),
        ];

        ctx.type = "application/xml";
        ctx.body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join("\n")}
</urlset>`;
    },
};
