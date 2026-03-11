import type { Metadata } from "next";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://janskiba.dev"),
    title: {
        default: "janskiba.dev",
        template: "%s | janskiba.dev",
    },
    description:
        "Personal blog about frontend development, Angular, TypeScript and web engineering.",
    openGraph: {
        siteName: "janskiba.dev",
        type: "website",
        title: "janskiba.dev",
        description:
            "Personal blog about frontend development, Angular, TypeScript and web engineering.",
    },
    twitter: {
        card: "summary_large_image",
    },
    themeColor: "#182232",
    icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen flex flex-col w-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
                    <header className="sticky top-0 border-t border-gray-800/70 bg-gray-950/40 backdrop-blur-xl z-20">
                        <Menu />
                    </header>
                    <main className="flex-1 mx-auto max-w-5xl w-full">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
