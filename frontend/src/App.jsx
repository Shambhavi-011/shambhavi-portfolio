import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

const navigation = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
];

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar placed over the hero background */}
      <header className="absolute inset-x-0 top-0 z-20 mx-auto max-w-7xl px-5 pt-5 sm:px-8">
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/90 bg-white/75 px-5 py-4 shadow-sm shadow-violet-100/40 backdrop-blur-xl sm:px-7"
        >
          <a
            href="#home"
            className="flex items-center gap-2 font-bold tracking-tight text-slate-900 sm:text-xl"
          >
            <span className="text-violet-600">{"</>"}</span>
            SHAMBHAVI.
          </a>

          <div className="flex flex-wrap items-center gap-4 text-sm sm:gap-6">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-slate-600 transition-colors hover:text-violet-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-violet-200 bg-violet-100/70 px-4 py-2.5 font-semibold text-violet-900 transition-colors hover:bg-violet-200/70"
            >
              Let's connect ↗
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />

        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Projects />
          <About />
          <Journey />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-violet-100 bg-violet-50/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Shambhavi.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/Shambhavi-011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition-colors hover:text-violet-700"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shambhavi-s-4a9b6141b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition-colors hover:text-violet-700"
            >
              LinkedIn ↗
            </a>

            <a
              href="#home"
              className="font-medium text-violet-700 transition-colors hover:text-violet-900"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;