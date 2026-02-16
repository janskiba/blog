import mePhoto from "../assets/about-me.jpeg";

const TECH = {
  "Frameworks & libraries": ["Angular", "Angular Material", "Bootstrap", "ng-bootstrap", "Leaflet", "Nx"],
  "Languages & styling": ["TypeScript", "JavaScript", "HTML5", "SCSS"],
  "Reactive": ["RxJS", "NgRx", "Angular Signals"],
  "Testing": ["Cypress", "Playwright", "Jasmine"],
  "OS & tools": ["Linux", "Docker", "Jenkins", "Bitbucket", "Git", "Jira"],
};

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-800/50 border border-gray-700/60 px-3 py-1 text-sm text-gray-200">
      {label}
    </span>
  );
}

export function About() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm bg-linear-to-br from-gray-800/50 to-gray-900/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
          {/* hover overlay like in articles */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />

          <div className="relative grid gap-6 sm:grid-cols-[120px_1fr] sm:items-start">
            {/* Photo */}
            <div className="flex sm:block">
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden border border-gray-700/60 bg-gray-800/40">
                <img
                  src={mePhoto}
                  alt="Profile photo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-100">
                  About me
                </h2>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  I’m a software developer focused on building modern, maintainable web applications—mostly in the Angular ecosystem.
                  I enjoy turning complex requirements into clean UI, solid architecture, and reliable delivery pipelines.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                My go-to stack includes Angular and Angular Material, along with TypeScript and SCSS.
                I also have extensive experience in working with complex maps in a leaflet.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Quality matters to me, so I regularly write automated tests with Cypress, Playwright, and Jasmine.
                On the tooling side, I’m comfortable with Linux, Docker, Jenkins, Bitbucket, Git, and Jira.
              </p>

              <p className="text-gray-400">
                When I’m not coding, I’m usually listening to heavy music, playing guitar, or spending time with my wife and our dog.
              </p>

              {/* Tech */}
              <div className="pt-2 space-y-5">
                {Object.entries(TECH).map(([group, items]) => (
                  <div key={group}>
                    <h3 className="text-sm font-semibold text-gray-200">
                      {group}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {items.map((t) => (
                        <Chip key={t} label={t} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional CTA styled like your "Read more" */}
              <div className="pt-2">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Read my articles
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
