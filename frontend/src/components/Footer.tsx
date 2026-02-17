import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-800/70 bg-gray-950/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 group"
              aria-label="Go to homepage"
            >
              <span className="text-gray-100 font-semibold tracking-tight group-hover:text-white">
                janskiba.dev
              </span>
            </Link>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Short posts about web dev, UI, and practical solutions that deliver.
            </p>

            <div className="mt-5 pt-5 border-t border-gray-800/60 flex items-center gap-3">
              <a
                href="https://github.com/janskiba"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gray-900/40 border border-gray-800/60 text-gray-400 hover:text-gray-100 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.1 3.2 9.4 7.6 10.9.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.4-3.8-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.8 2.9 1.3.1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.9 1.2 1.9 1.2 3.2 0 4.5-2.6 5.5-5.1 5.8.4.4.8 1.1.8 2.1v3.1c0 .3.2.7.8.6 4.4-1.5 7.6-5.8 7.6-10.9C23.25 5.6 18.27.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/jan-skiba-780369208/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gray-900/40 border border-gray-800/60 text-gray-400 hover:text-gray-100 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav (links only) */}
          <nav
            aria-label="Footer navigation"
            className="md:justify-self-end md:w-55 md:border-l md:border-gray-800/60 md:pl-6"
          >
            <h3 className="text-sm font-semibold text-gray-200">Navigation</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 hover:text-gray-100 transition"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-gray-100 transition"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-gray-100 transition"
                  to="mailto:jan.skiba.poczta@proton.me"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">© {year} janskiba.dev All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
