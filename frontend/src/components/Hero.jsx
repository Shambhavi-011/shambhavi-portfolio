const developerCode = `public class Developer {
    String name = "Shambhavi";

    String role =
        "Full-Stack Developer";

    String[] stack = {
        "Java", "Spring Boot",
        "React", "MySQL"
    };

    String mindset() {
        return "Always learning";
    }
}`;

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-shell relative overflow-hidden rounded-b-[32px] pb-6"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-center gap-14 pt-56 pb-14 sm:pt-44 lg:min-h-[720px] lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:pt-40">
          {/* Introduction */}
          <div>
            <p className="mb-8 inline-block rounded-lg border border-violet-200 bg-white/80 px-4 py-2 font-mono text-xs tracking-widest text-violet-700 backdrop-blur-sm">
              FULL-STACK DEVELOPMENT × JAVA
            </p>

            <h1
              id="hero-title"
              className="text-5xl leading-[1.08] font-bold tracking-tight text-[#21182f] sm:text-6xl xl:text-7xl"
            >
              Code. Create.

              <span className="mt-3 block bg-linear-to-r from-violet-700 via-fuchsia-700 to-blue-600 bg-clip-text text-transparent">
                Make it matter.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Hi, I'm{" "}
              <strong className="font-semibold text-slate-900">
                Shambhavi
              </strong>
              {" "}— a Computer Science & AI undergraduate building useful
              web applications with Java, Spring Boot and React.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-300/40 transition-colors hover:from-violet-700 hover:to-fuchsia-800"
              >
                Explore my work ↓
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-violet-200 bg-white/80 px-6 py-3.5 font-semibold text-slate-700 backdrop-blur-sm transition-colors hover:bg-white"
              >
                Get in touch
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-600">
              Based in Saharanpur, India
            </p>
          </div>

          {/* Glass code card */}
          <div className="w-full min-w-0 max-w-lg justify-self-center lg:mt-16">
            <div className="floating-code overflow-hidden rounded-2xl border border-white/90 bg-white/85 shadow-2xl shadow-violet-900/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-violet-100/80 bg-white/50 px-5 py-4">
                <div aria-hidden="true" className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <span className="ml-auto font-mono text-xs text-slate-500">
                  Developer.java
                </span>
              </div>

              <pre className="overflow-x-auto p-5 text-xs leading-7 text-violet-800 sm:p-7 sm:text-sm">
                <code>{developerCode}</code>
              </pre>

              <div className="border-t border-violet-100/80 px-5 py-4 sm:px-7">
                <p className="font-mono text-xs text-slate-500">
                  // From an idea to something real.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/90 bg-white/75 px-5 py-4 font-mono text-xs tracking-widest text-slate-600 backdrop-blur-xl">
          <span>JAVA / SPRING BOOT / REACT / MYSQL</span>
          <span>01 — INTRODUCTION</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;