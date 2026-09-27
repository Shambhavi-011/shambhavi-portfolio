const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "AI & Data",
    skills: ["LLMs", "RAG", "NLP", "Transformers", "NumPy", "Pandas"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Swagger", "AWS", "Render"],
  },
  {
    title: "Core Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "System Design",
    ],
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-8 border-t border-violet-100 py-16 sm:py-24"
    >
      <p className="font-mono text-xs tracking-[0.2em] text-violet-700">
        03 — ABOUT & SKILLS
      </p>

      <h2
        id="about-title"
        className="mt-4 text-4xl font-bold tracking-tight text-[#21182f] sm:text-5xl"
      >
        The person behind{" "}
        <span className="text-violet-700">the code.</span>
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* About me */}
        <div>
          <p className="text-lg leading-8 text-slate-700">
            I'm{" "}
            <strong className="font-semibold text-slate-900">
              Shambhavi
            </strong>
            , a Computer Science and Engineering undergraduate
            specializing in Artificial Intelligence at Meerut Institute
            of Engineering and Technology.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            My work brings together frontend interfaces, backend APIs
            and databases. I have built applications for IT support,
            task management and AI-powered data analysis.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            I'm developing my skills in Java full-stack engineering,
            with a focus on Spring Boot, React and database-backed
            applications.
          </p>

          {/* Education summary */}
          <div className="mt-8 rounded-2xl border border-violet-100 bg-violet-50/60 p-6">
            <p className="font-mono text-xs tracking-widest text-violet-700">
              CURRENTLY STUDYING
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              B.Tech — Computer Science & Engineering
            </h3>

            <p className="mt-2 text-sm text-violet-700">
              Specialization: Artificial Intelligence
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Meerut Institute of Engineering and Technology, Meerut
            </p>
          </div>

          {/* Personal achievement */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="font-mono text-xs tracking-widest text-slate-500">
              BEYOND DEVELOPMENT
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              A background in competitive Judo
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              CBSE National Level Judo Medallist and Open State Judo
              Medallist, Judo Federation of India.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/shambhavi-s-4a9b6141b/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block font-semibold text-violet-700 transition-colors hover:text-violet-900"
          >
            Connect with me on LinkedIn ↗
          </a>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
            My technical toolkit
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Technologies and concepts across my projects and learning.
          </p>

          <div className="mt-6 space-y-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-violet-100 bg-white p-5"
              >
                <h4 className="text-sm font-semibold text-slate-900">
                  {group.title}
                </h4>

                <ul
                  aria-label={group.title}
                  className="mt-3 flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-800"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;