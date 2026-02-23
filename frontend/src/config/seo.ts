export const SITE_URL =
    import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "https://janskiba.dev";

export const SITE_NAME = "janskiba.dev";

export function buildCanonicalUrl(path = "/") {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${SITE_URL}${normalizedPath}`;
}

export function stripMarkdown(markdown: string, maxLength = 160) {
    const plainText = markdown
        .replace(/```[\s\S]*?```/g, "")
        .replace(/`[^`]*`/g, "")
        .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
        .replace(/\[[^\]]*\]\([^)]*\)/g, "$1")
        .replace(/[>#*_~\-]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    if (plainText.length <= maxLength) return plainText;
    return `${plainText.slice(0, maxLength - 1).trim()}…`;
}
