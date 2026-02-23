import { useEffect } from "react";
import { SITE_NAME, buildCanonicalUrl } from "../config/seo";

type SeoProps = {
    title: string;
    description: string;
    path: string;
    imageUrl?: string;
    type?: "website" | "article";
    structuredData?: Record<string, unknown>;
};

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
    let meta = document.head.querySelector(
        `meta[${attribute}="${key}"]`
    ) as HTMLMetaElement | null;

    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
}

function upsertCanonical(href: string) {
    let canonical = document.head.querySelector(
        'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", href);
}

const JSON_LD_ID = "seo-json-ld";

export function Seo({
    title,
    description,
    path,
    imageUrl,
    type = "website",
    structuredData,
}: SeoProps) {
    useEffect(() => {
        const canonicalUrl = buildCanonicalUrl(path);

        document.title = `${title} | ${SITE_NAME}`;
        upsertMeta("name", "description", description);
        upsertCanonical(canonicalUrl);

        upsertMeta("property", "og:type", type);
        upsertMeta("property", "og:site_name", SITE_NAME);
        upsertMeta("property", "og:title", title);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:url", canonicalUrl);

        upsertMeta("name", "twitter:card", "summary_large_image");
        upsertMeta("name", "twitter:title", title);
        upsertMeta("name", "twitter:description", description);

        if (imageUrl) {
            upsertMeta("property", "og:image", imageUrl);
            upsertMeta("name", "twitter:image", imageUrl);
        }

        const existingJsonLd = document.getElementById(JSON_LD_ID);
        if (structuredData) {
            const script =
                existingJsonLd ??
                Object.assign(document.createElement("script"), {
                    id: JSON_LD_ID,
                    type: "application/ld+json",
                });

            script.textContent = JSON.stringify(structuredData);
            if (!existingJsonLd) {
                document.head.appendChild(script);
            }
        } else if (existingJsonLd) {
            existingJsonLd.remove();
        }
    }, [description, imageUrl, path, structuredData, title, type]);

    return null;
}
