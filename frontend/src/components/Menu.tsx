// components/MenuPills.tsx
import { NavLink } from "react-router-dom";

const items = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

export function Menu() {
  return (
    <nav aria-label="Menu">
      <ul className="flex flex-wrap items-center justify-end gap-3">
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
  );
}
