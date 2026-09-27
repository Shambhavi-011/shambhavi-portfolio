const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Cloud Certification",
    link: "https://www.credly.com/badges/394ae8c0-2123-4abb-9cea-7739eea252b7/public_url",
  },
  {
    title: "Australia Data Analytics Job Simulation",
    issuer: "Deloitte · Forage",
    type: "Job Simulation",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a4fbb4595b5502cbe2eb756_1783617974981_completion_certificate.pdf",
  },
  {
    title: "MongoDB Course Certificate",
    issuer: "MongoDB",
    type: "Database Learning",
    link: "https://learn.mongodb.com/c/f7Ljph2OSzG_C7dHTuov8w",
  },
];

function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="scroll-mt-8 border-t border-violet-100 py-16 sm:py-24"
    >
      <p className="font-mono text-xs tracking-[0.2em] text-violet-700">
        04 — MY JOURNEY
      </p>

      <h2
        id="journey-title"
        className="mt-4 text-4xl font-bold tracking-tight text-[#21182f] sm:text-5xl"
      >
        Learning through{" "}
        <span className="text-violet-700">experience.</span>
      </h2>

      <p className="mt-5 max-w-2xl leading-7 text-slate-600">
        My education, internship experience and continued learning
        across software development, AI and cloud technology.
      </p>

      <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
        {/* Internship */}
        <article className="rounded-3xl border border-violet-100 bg-violet-50/50 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-violet-700">
              INTERNSHIP
            </span>

            <time
              dateTime="2026-08"
              className="text-sm text-slate-500"
            >
              August 2026
            </time>
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            AI-ML Intern
          </h3>

          <p className="mt-2 font-medium text-violet-700">
            InAmigos Foundation
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Remote
          </p>

          <ul className="mt-6 list-disc space-y-4 pl-5 text-sm leading-7 text-slate-600 marker:text-violet-500">
            <li>
              Researched industrial applications of AI and machine
              learning through assignments and mini-projects.
            </li>

            <li>
              Implemented and evaluated machine learning models on
              sample datasets using Python.
            </li>

            <li>
              Applied data preprocessing and analysis techniques while
              learning model development and deployment workflows.
            </li>
          </ul>
        </article>

        {/* Education */}
        <div className="rounded-3xl border border-violet-100 bg-white p-6 sm:p-8">
          <p className="font-mono text-xs tracking-widest text-violet-700">
            EDUCATION
          </p>

          <div className="mt-6 border-l-2 border-violet-100 pl-6">
            <article className="relative pb-8">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-violet-600"
              />

              <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                Undergraduate · Present
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Artificial Intelligence
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Meerut Institute of Engineering and Technology,
                Meerut
              </p>
            </article>

            <article className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-violet-300"
              />

              <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                School Education
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                Pinewood School
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                CBSE · Saharanpur
              </p>

              <dl className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-violet-50 p-4">
                  <dt className="text-xs text-slate-500">
                    Class XII
                  </dt>
                  <dd className="mt-1 text-xl font-bold text-violet-800">
                    90.4%
                  </dd>
                </div>

                <div className="rounded-xl bg-violet-50 p-4">
                  <dt className="text-xs text-slate-500">
                    Class X
                  </dt>
                  <dd className="mt-1 text-xl font-bold text-violet-800">
                    94.52%
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div id="certifications" className="mt-16 scroll-mt-8">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          Certifications & learning
        </h3>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="flex flex-col rounded-2xl border border-violet-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-violet-100/60"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                {certificate.type}
              </p>

              <h4 className="mt-4 text-lg font-semibold leading-7 text-slate-900">
                {certificate.title}
              </h4>

              <p className="mt-3 mb-6 text-sm text-slate-500">
                {certificate.issuer}
              </p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certificate.title} certificate`}
                className="mt-auto inline-block text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900"
              >
                View credential ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;