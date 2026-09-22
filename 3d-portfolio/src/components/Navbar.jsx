import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "PawGuardian", href: "#pawguardian" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  /* ================================
     SCROLL EFFECT
  ================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================================
     CLOSE MOBILE MENU
  ================================= */

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4">

      {/* ================================
          NAVBAR
      ================================= */}

      <motion.nav
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`
          mx-auto max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          px-3 py-2.5
          transition-all duration-500
          sm:px-5
          ${
            scrolled
              ? "border-blue-200/70 bg-white/90 shadow-[0_15px_50px_rgba(37,99,235,0.12)] backdrop-blur-2xl"
              : "border-slate-200/70 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          }
        `}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >

        {/* ================================
            NAVBAR LIGHT EFFECT
        ================================= */}

        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-xl"
        />

        <div className="relative flex items-center justify-between">

          {/* ================================
              LOGO
          ================================= */}

          <a
            href="#home"
            onClick={handleLinkClick}
            className="group relative flex items-center gap-2.5"
          >

            {/* Logo 3D Container */}

            <motion.div
              whileHover={{
                rotateY: 20,
                rotateX: -10,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="relative"
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              {/* Glow */}

              <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-lg" />

              {/* Logo */}

              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-black text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)]">

                H

                {/* Shine */}

                <span className="absolute left-1 top-1 h-2 w-2 rounded-full bg-white/50 blur-[1px]" />
              </div>

            </motion.div>

            {/* Brand */}

            <div className="leading-none">
              <span className="block text-lg font-black tracking-tight text-slate-900">
                Hritik
                <span className="text-blue-600">.</span>
              </span>

              <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400">
                Developer
              </span>
            </div>

          </a>

          {/* ================================
              DESKTOP NAVIGATION
          ================================= */}

          <div className="hidden items-center gap-1 md:flex">

            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1 + index * 0.05,
                }}
                whileHover={{
                  y: -2,
                }}
                className="group relative rounded-xl px-3.5 py-2 text-[13px] font-semibold text-slate-600 transition-colors duration-300 hover:text-blue-600"
              >

                {/* Hover background */}

                <span className="absolute inset-0 -z-10 scale-75 rounded-xl bg-blue-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />

                {link.name}

                {/* Bottom indicator */}

                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-4/5" />

              </motion.a>
            ))}

          </div>

          {/* ================================
              DESKTOP CTA
          ================================= */}

          <motion.a
            href="https://wa.me/919528532241"
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="relative hidden overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(37,99,235,0.25)] md:block"
          >

            {/* Shine */}

            <motion.span
              animate={{
                x: ["-150%", "150%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />

            <span className="relative z-10">
              Let's Talk
            </span>

          </motion.a>

          {/* ================================
              MOBILE BUTTON
          ================================= */}

          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{
              scale: 0.9,
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-800 shadow-sm backdrop-blur md:hidden"
          >

            <div className="relative h-5 w-5">

              {/* Top */}

              <motion.span
                animate={
                  isOpen
                    ? {
                        top: "9px",
                        rotate: 45,
                      }
                    : {
                        top: "3px",
                        rotate: 0,
                      }
                }
                className="absolute left-0 h-[2px] w-5 rounded-full bg-current"
              />

              {/* Middle */}

              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scaleX: isOpen ? 0 : 1,
                }}
                className="absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-current"
              />

              {/* Bottom */}

              <motion.span
                animate={
                  isOpen
                    ? {
                        top: "9px",
                        rotate: -45,
                      }
                    : {
                        top: "15px",
                        rotate: 0,
                      }
                }
                className="absolute left-0 h-[2px] w-5 rounded-full bg-current"
              />

            </div>

          </motion.button>

        </div>

        {/* ================================
            MOBILE MENU
        ================================= */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="md:hidden"
            >

              <div className="mt-3 border-t border-slate-200/80 pt-3">

                <div className="flex flex-col gap-1">

                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="group relative overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    >

                      <span className="relative z-10 flex items-center justify-between">
                        {link.name}

                        <span className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          →
                        </span>
                      </span>

                    </motion.a>
                  ))}

                </div>

 {/* Mobile CTA */}
<motion.a
  href="https://wa.me/919528532241"
  target="_blank"
  rel="noopener noreferrer"
  whileTap={{ scale: 0.97 }}
  className="mt-3 block rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-center text-sm font-bold text-white shadow-[0_8px_25px_rgba(37,99,235,0.2)]"
>
  Let's Talk →
</motion.a>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>

      {/* ================================
          FLOATING DECORATION
      ================================= */}

      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-1 top-20 hidden h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] sm:block"
      />

    </header>
  );
};

export default Navbar;