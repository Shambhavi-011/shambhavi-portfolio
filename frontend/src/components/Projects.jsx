import { useEffect, useState } from "react";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:8080"
).replace(/\/+$/, "");

const filters = ["All", "Java", "Full Stack", "AI"];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    // Stop waiting if the request takes longer than 15 seconds.
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 15000);

    async function loadProjects() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/projects`, {
          signal: controller.signal,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unexpected projects response");
        }

        if (active) {
          setProjects(data);
          setError("");
        }
      } catch {
        if (active) {
          setError(
            "Projects couldn't be loaded right now. Please try again."
          );
        }
      } finally {
        clearTimeout(timeoutId);

        if (active) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    // Cancel the request when this component is removed.
    return () => {
      active = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [retryCount]);

  function retryLoading() {
    setLoading(true);
    setError("");
    setRetryCount((count) => count + 1);
  }

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "All" ||
      project.groups.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-8 py-16 sm:py-24"
    >
      {/* Section heading */}
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-violet-700">
            02 — SELECTED WORK
          </p>

          <h2
            id="projects-title"
            className="mt-4 text-4xl font-bold tracking-tight text-[#21182f] sm:text-5xl"
          >
            Ideas turned into{" "}
            <span className="text-violet-700">applications.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            A selection of my work across Java full-stack development,
            web applications and AI-powered tools.
          </p>
        </div>

        <a
          href="https://github.com/Shambhavi-011"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-semibold text-violet-700 transition-colors hover:text-violet-900"
        >
          Explore GitHub ↗
        </a>
      </div>

      {/* Filters */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-9 flex flex-wrap gap-3"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            disabled={loading || Boolean(error)}
            aria-pressed={activeFilter === filter}
            aria-controls="project-results"
            onClick={() => setActiveFilter(filter)}
            className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 disabled:cursor-not-allowed disabled:opacity-50 ${
              activeFilter === filter
                ? "border-violet-600 bg-violet-600 text-white"
                : "border-violet-200 bg-white text-slate-600 hover:bg-violet-50 hover:text-violet-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Accessible loading/result announcement */}
      <p role="status" className="sr-only">
        {loading
          ? "Loading projects."
          : error
            ? ""
            : `Showing ${visibleProjects.length} projects.`}
      </p>

      <div id="project-results" aria-busy={loading} className="mt-8">
        {/* Loading state */}
        {loading && (
          <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-10 text-center">
            <p className="font-medium text-violet-700">
              Loading projects…
            </p>
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center">
            <p role="alert" className="text-sm leading-7 text-rose-800">
              {error}
            </p>

            <button
              type="button"
              onClick={retryLoading}
              className="mt-5 cursor-pointer rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600"
            >
              Try again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && visibleProjects.length === 0 && (
          <div className="rounded-2xl border border-violet-100 p-10 text-center text-slate-600">
            No projects in this category yet.
          </div>
        )}

        {/* Project cards */}
        {!loading && !error && visibleProjects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="flex h-full flex-col rounded-3xl border border-violet-100 bg-white p-6 shadow-sm shadow-violet-100/40 transition-shadow hover:shadow-xl hover:shadow-violet-100/70 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
                    {project.category}
                  </span>

                  <span className="font-mono text-sm text-slate-400">
                    /{project.id}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Technology tags */}
                <ul
                  aria-label={`${project.title} technologies`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                {/* Features */}
                <ul className="my-7 space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Project links */}
                <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-violet-100 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="rounded-lg border border-violet-200 px-4 py-2.5 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50"
                  >
                    Source code ↗
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
                    >
                      Live demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;