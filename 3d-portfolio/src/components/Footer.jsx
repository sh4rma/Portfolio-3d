import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sh4rma",
      icon: "GH",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hritik-sharma-114a9b291/",
      icon: "in",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/codewithhritik/",
      icon: "IG",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue Glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]"
        />

        {/* Cyan Glow */}

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.7) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-32 top-20 h-72 w-72 rounded-full border-[18px] border-blue-500/10 sm:h-96 sm:w-96"
        />

        {/* Floating Cube */}

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotateX: [0, 30, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateX: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateY: {
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="absolute left-[8%] top-[28%] hidden h-16 w-16 sm:block"
        >
          <div className="absolute inset-0 rotate-12 rounded-xl border border-blue-400/20 bg-blue-500/5" />

          <div className="absolute inset-2 -rotate-6 rounded-lg border border-cyan-400/20 bg-cyan-400/5" />
        </motion.div>

        {/* Floating Dots */}

        <motion.span
          animate={{
            y: [0, -18, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-[25%] top-[20%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        />

        <motion.span
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute right-[25%] top-[45%] h-1.5 w-1.5 rounded-full bg-cyan-400"
        />

      </div>

      {/* =====================================================
          TOP CTA
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:px-12">

       
          {/* CTA Glow */}

         

    

        {/* =====================================================
            FOOTER CONTENT
        ====================================================== */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div className="lg:col-span-2">

            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >

              <motion.div
                whileHover={{
                  rotateY: 20,
                  rotateX: -10,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-base font-black shadow-lg shadow-blue-600/20"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                H
              </motion.div>

              <div>
                <div className="text-xl font-black">
                  Hritik
                  <span className="text-blue-500">.</span>
                </div>

                <div className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-500">
                  Developer / Designer
                </div>
              </div>

            </a>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              Software developer and UI/UX designer focused on
              building modern, interactive and meaningful digital
              experiences.
            </p>

            {/* Social */}

            <div className="mt-6 flex items-center gap-2">

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[10px] font-black text-slate-400 transition-colors hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {social.icon}
                </motion.a>
              ))}

            </div>

          </div>

          {/* NAVIGATION */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  <span className="h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-3" />

                  {link.name}
                </a>
              ))}

            </div>

          </div>

          {/* FEATURED */}

          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Featured
            </h3>

            <div className="mt-5">

              <a
                href="#pawguardian"
                className="group block"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-lg">
                    <img></img>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-white transition-colors group-hover:text-blue-400">
                      PawGuardian
                    </div>

                    <div className="mt-0.5 text-[10px] text-slate-500">
                      Animal Rescue Ecosystem
                    </div>
                  </div>

                </div>

              </a>

              <a
                href="#projects"
                className="mt-5 inline-flex items-center text-xs font-bold text-blue-400 transition hover:text-blue-300"
              >
                View all projects
                <span className="ml-1 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="border-t border-white/10 py-6">

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <p className="text-[11px] text-slate-500">
              © {year} Hritik Sharma. All rights reserved.
            </p>

            <div className="flex items-center gap-4">

              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                Available for opportunities

              </span>

              <a
                href="#home"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-xs text-slate-400 transition hover:border-blue-500/30 hover:text-blue-400"
              >
                ↑
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;