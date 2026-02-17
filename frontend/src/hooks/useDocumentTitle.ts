import { useEffect } from "react";

export function useDocumentTitle(title: string, suffix = "janskiba.dev") {
    useEffect(() => {
        document.title = suffix ? `${title} | ${suffix}` : title;
    }, [title, suffix]);
}