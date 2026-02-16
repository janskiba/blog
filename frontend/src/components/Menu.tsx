// components/MenuPills.tsx
import { NavLink } from "react-router-dom";

const items = [
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
];

export function Menu() {

    return (
        <div className="flex items-center justify-between px-5 py-3 ">
            <div className="inline-flex items-center rounded-2xl border border-white/10 bg-gray-900/20 px-4 py-2 backdrop-blur-md shadow-lg">
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-all duration-300" />
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
                                        "inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-100",
                                        "bg-gray-800/30 backdrop-blur-md border border-white/10 shadow-sm",
                                        "text-gray-200! visited:text-gray-200",
                                        " hover:border-blue-500/30 hover:text-blue-200 visited:hover:text-blue-200 hover:shadow-blue-500/20 hover:shadow-md",
                                        "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                                        isActive ? "bg-white/10 border-blue-500/50 text-blue-100 visited:text-blue-100 shadow-blue-500/20" : "",
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
