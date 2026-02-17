import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const items = [
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "mailto:jan.skiba.poczta@proton.me", label: "Contact" },
];

export function Menu() {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
        [
            "inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-100",
            "bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-sm",
            "text-gray-200! visited:text-gray-200",
            "hover:border-blue-500/30 hover:text-blue-200 visited:hover:text-blue-200 hover:shadow-blue-500/20 hover:shadow-sm",
            "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
            isActive ? "bg-white/10 border-blue-500/50 text-blue-100 visited:text-blue-100 shadow-blue-500/20" : "",
            isPending ? "opacity-70" : "",
        ].join(" ");

    return (
        <header className="px-5 py-3">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <div className="relative inline-flex items-center rounded-2xl border border-white/10 bg-gray-900/20 px-4 py-2 backdrop-blur-sm shadow-lg">
                        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-all duration-300" />
                        <span className="relative pointer-events-none text-lg font-bold text-gray-100">janskiba.dev</span>
                    </div>
                </Link>

                {/* Desktop menu (sm+) */}
                <nav aria-label="Menu" className="hidden sm:block">
                    <ul className="flex flex-wrap items-center gap-3">
                        {items.map((it) => (
                            <li key={it.to}>
                                <NavLink to={it.to} end className={linkClass}>
                                    {it.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile hamburger (<sm) */}
                <button
                    type="button"
                    className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-gray-800/30 px-3 py-2 text-gray-200 shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    aria-label="Open menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <div className="relative h-5 w-6">
                        <span
                            className={[
                                "absolute left-0 top-0 block h-0.5 w-6 bg-current transition",
                                open ? "translate-y-2.25 rotate-45" : "",
                            ].join(" ")}
                        />
                        <span
                            className={[
                                "absolute left-0 top-2.25 block h-0.5 w-6 bg-current transition",
                                open ? "opacity-0" : "",
                            ].join(" ")}
                        />
                        <span
                            className={[
                                "absolute left-0 top-4.5 block h-0.5 w-6 bg-current transition",
                                open ? "-translate-y-2.25 -rotate-45" : "",
                            ].join(" ")}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile panel (<sm) */}
            <div
                id="mobile-menu"
                className={[
                    "sm:hidden",
                    open ? "mt-3 block" : "hidden",
                ].join(" ")}
            >
                <nav aria-label="Mobile menu">
                    <ul className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-gray-900/30 p-2 backdrop-blur-sm">
                        {items.map((it) => (
                            <li key={it.to}>
                                <NavLink
                                    to={it.to}
                                    end
                                    className={linkClass}
                                    onClick={() => setOpen(false)} // zamyka menu po kliknięciu linku
                                >
                                    {it.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
