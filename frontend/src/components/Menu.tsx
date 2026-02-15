// components/MenuPills.tsx
import { NavLink } from "react-router-dom";

const items = [
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
];

export function Menu() {
    return (
        <div className="flex items-center justify-between px-6 py-3">
            <div className="inline-flex items-center rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-3 backdrop-blur-sm">
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 transition-all duration-300" />
                <span className="relative pointer-events-none text-lg font-bold text-gray-100">
                    janskiba.dev
                </span>
            </div>


            <nav aria-label="Menu">
                <ul className="flex flex-wrap items-center gap-3">
                    {items.map((it) => (
                        <li key={it.to}>
                            <NavLink
                                to={it.to}
                                end
                                className={({ isActive, isPending }) =>
                                    [
                                        "inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium",
                                        "bg-gray-800/40 backdrop-blur-sm border border-gray-700/50",
                                        "text-gray-200 transition-all duration-200",
                                        "hover:bg-gray-800/70 hover:border-blue-500/50 hover:text-blue-200",
                                        "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                                        isActive ? "bg-blue-500/10 border-blue-500/60 text-blue-200" : "",
                                        isPending ? "opacity-70" : "",
                                    ].join(" ")
                                }
                            >
                                {it.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    );
}
