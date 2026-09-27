const contactLinks = [
  {
    title: "Email",
    value: "shambhavi521reshu@gmail.com",
    href: "mailto:shambhavi521reshu@gmail.com",
    external: false,
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/shambhavi-s-4a9b6141b/",
    external: true,
  },
  {
    title: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/Shambhavi-011",
    external: true,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-8 border-t border-violet-100 py-16 sm:py-24"
    >
      <div className="rounded-3xl border border-violet-100 bg-linear-to-br from-violet-50 via-white to-pink-50 p-6 sm:p-10 lg:p-14">
        <p className="font-mono text-xs tracking-[0.2em] text-violet-700">
          05 — LET'S CONNECT
        </p>

        <h2
          id="contact-title"
          className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-[#21182f] sm:text-5xl"
        >
          Have something{" "}
          <span className="text-violet-700">in mind?</span>
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-slate-600">
          I'd love to hear about software development opportunities,
          interesting projects and opportunities to learn and
          collaborate.
        </p>

        <a
          href="mailto:shambhavi521reshu@gmail.com"
          className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-200/60 transition-colors hover:bg-violet-700"
        >
          Say hello ↗
        </a>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="min-w-0 rounded-2xl border border-violet-100 bg-white/80 p-5 transition-colors hover:bg-violet-50"
            >
              <p className="text-sm font-semibold text-violet-700">
                {link.title} ↗
              </p>

              <p className="mt-2 break-words text-sm leading-6 text-slate-600">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;