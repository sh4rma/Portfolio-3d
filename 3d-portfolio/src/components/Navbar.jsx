import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHome,
  FaPaw,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    {
      name: "Home",
      href: "#home",
      icon: FaHome,
    },
    {
      name: "PawGuardian India",
      href: "#pawguardian",
      icon: FaPaw,
    },
    {
      name: "About",
      href: "#about",
      icon: FaUser,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: FaCode,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FaFolderOpen,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: FaEnvelope,
    },
  ];

  /* ================================
     SCROLL + ACTIVE SECTION
  ================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================================
     CLOSE MOBILE MENU
  ================================= */

  const handleLinkClick = (section) => {
    setActiveSection(section.replace("#", ""));
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          relative mx-auto max-w-7xl
          overflow-hidden
          rounded-[20px]
          border
          px-3 py-2.5
          transition-all duration-500
          sm:px-4 sm:py-3
          ${
            scrolled
              ? "border-blue-200/80 bg-white/95 shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur-2xl"
              : "border-slate-200/80 bg-white/85 shadow-[0_12px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl"
          }
        `}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1200px",
        }}
      >
        {/* ================================
            TOP SHINE
        ================================= */}

        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-xl"
        />

        {/* ================================
            NAV CONTENT
        ================================= */}

        <div className="relative z-10 flex items-center justify-between">
          {/* ================================
              LOGO
          ================================= */}

          <a
  href="#home"
  onClick={handleLinkClick}
  className="group flex flex-col leading-none"
>
  <span className="text-lg font-black tracking-tight text-slate-900">
    Hritik
  </span>

  <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400">
    Developer
  </span>
</a>
          {/* ================================
              DESKTOP NAVIGATION
          ================================= */}

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{
                    opacity: 0,
                    y: -12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08 + index * 0.045,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  onClick={() => handleLinkClick(link.href)}
                  className={`
                    group relative flex items-center gap-2
                    rounded-xl px-3 py-2.5
                    text-[12px] font-bold
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-600"
                    }
                  `}
                >
                  {/* active / hover background */}

                  <span
                    className={`
                      absolute inset-0 -z-10 rounded-xl
                      transition-all duration-300
                      ${
                        isActive
                          ? "scale-100 bg-blue-50 opacity-100"
                          : "scale-90 bg-blue-50 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }
                    `}
                  />

                  {/* icon */}

                  <Icon
                    className={`
                      text-[12px] transition-transform duration-300
                      ${
                        isActive
                          ? "text-blue-600"
                          : "text-slate-400 group-hover:text-blue-600"
                      }
                    `}
                  />

                  <span>{link.name}</span>

                  {/* active indicator */}

                  <span
                    className={`
                      absolute bottom-[4px] left-1/2
                      h-[2px] -translate-x-1/2
                      rounded-full bg-blue-600
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-6 opacity-100"
                          : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                      }
                    `}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* ================================
              DESKTOP CTA
          ================================= */}

          <motion.a
            href="https://wa.me/919528532241"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group relative hidden items-center gap-2
              overflow-hidden rounded-xl
              bg-gradient-to-r from-blue-700 to-blue-500
              px-4.5 py-2.5
              text-[12px] font-extrabold text-white
              shadow-[0_8px_25px_rgba(37,99,235,0.25)]
              lg:flex
            "
          >
            {/* shine */}

            <motion.span
              animate={{
                x: ["-160%", "180%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
              className="absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />

            <FaWhatsapp className="relative z-10 text-[15px]" />

            <span className="relative z-10">Let's Talk</span>

            <FiArrowUpRight className="relative z-10 text-[14px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}

          <motion.button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-slate-200
              bg-white/80 text-slate-800
              shadow-sm backdrop-blur
              transition-colors
              hover:border-blue-200 hover:bg-blue-50
              lg:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FiX className="text-[21px]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FiMenu className="text-[21px]" />
                </motion.div>
              )}
            </AnimatePresence>
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
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:hidden"
            >
              <div className="mt-3 border-t border-slate-200/80 pt-3">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive =
                      activeSection === link.href.replace("#", "");

                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.045,
                          duration: 0.3,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className={`
                          group flex items-center gap-3
                          rounded-xl px-4 py-3
                          text-sm font-bold
                          transition-all duration-300
                          ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                          }
                        `}
                      >
                        {/* icon box */}

                        <span
                          className={`
                            flex h-9 w-9 items-center justify-center
                            rounded-lg transition-all duration-300
                            ${
                              isActive
                                ? "bg-blue-600 text-white shadow-[0_5px_15px_rgba(37,99,235,0.25)]"
                                : "bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                            }
                          `}
                        >
                          <Icon className="text-[14px]" />
                        </span>

                        <span className="flex-1">{link.name}</span>

                        <FiArrowUpRight
                          className={`
                            text-[17px] transition-all duration-300
                            ${
                              isActive
                                ? "translate-x-0 text-blue-600"
                                : "translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-blue-600"
                            }
                          `}
                        />
                      </motion.a>
                    );
                  })}
                </div>

                {/* ================================
                    MOBILE WHATSAPP CTA
                ================================= */}

                <motion.a
                  href="https://wa.me/919528532241"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group mt-3 flex items-center justify-center gap-2
                    rounded-xl
                    bg-gradient-to-r from-blue-700 to-blue-500
                    px-4 py-3.5
                    text-sm font-extrabold text-white
                    shadow-[0_10px_25px_rgba(37,99,235,0.22)]
                  "
                >
                  <FaWhatsapp className="text-[17px]" />

                  <span>Let's Talk on WhatsApp</span>

                  <FiArrowUpRight className="text-[16px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
          y: [0, -6, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute right-0 top-20
          hidden h-2 w-2
          rounded-full bg-blue-500
          shadow-[0_0_18px_rgba(59,130,246,0.7)]
          sm:block
        "
      />
    </header>
  );
};

export default Navbar;