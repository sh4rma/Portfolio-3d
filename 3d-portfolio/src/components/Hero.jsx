import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12 lg:pt-24"
    >
      {/* =====================================================
          VIDEO BACKGROUND
      ====================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg6.mp4" type="video/mp4" />
      </video>

      {/* Dark cinematic overlay - NO WHITE FADE */}

      <div className="pointer-events-none absolute inset-0 bg-[#020617]/45" />

      {/* Blue cinematic gradient */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/35 to-blue-950/30" />

      {/* Bottom fade only */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-32 w-full bg-gradient-to-t from-[#020617] to-transparent" />

      {/* =====================================================
          AMBIENT GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-4">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative">

          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-blue-400 sm:w-12" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-300 sm:text-xs sm:tracking-[0.35em]"
            >
              Founder Of PawGuardian India
            </span>
          </motion.div>


          {/* Main Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-[3.4rem] font-black leading-[0.88] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
          >
            I'm

            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Hritik Sharma
            </span>

            <br />

            <span >
              Full Stack Dev
            </span>
          </motion.h1>


          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mt-7 max-w-xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg"
          >
            I'm Hritik Sharma — a Full-Stack Developer focused on
            building modern web applications, immersive interfaces
            and interactive 3D experiences.
          </motion.p>


          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              View My Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
  href="/HS_CV2.pdf"
  download="HS_CV2.pdf"
  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
>
  Checkout My CV
  <span className="ml-2"></span>
</a>
          </motion.div>


          {/* Stats

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="mt-10 flex gap-8 border-t border-white/10 pt-6 sm:mt-12 sm:gap-12"
          >

            <div>
              <p className="text-xl font-black sm:text-2xl">
                10+
              </p>

              <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                Projects
              </p>
            </div>

            <div>
              <p className="text-xl font-black sm:text-2xl">
                3D
              </p>

              <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                Experiences
              </p>
            </div>

            <div>
              <p className="text-xl font-black sm:text-2xl">
                ∞
              </p>

              <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                Ideas
              </p>
            </div>

          </motion.div> */}

        </div>


        {/* =================================================
            RIGHT 3D VISUAL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative mx-auto flex h-[390px] w-full max-w-[520px] items-center justify-center sm:h-[500px] lg:h-[620px]"
        >

          {/* =================================================
              CENTRAL GLOW
          ================================================= */}

          <div className="absolute h-52 w-52 rounded-full bg-blue-500/20 blur-[80px] sm:h-72 sm:w-72" />


          {/* =================================================
              LARGE ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-64 w-64 rounded-full border border-blue-400/20 sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]"
          >
            <span className="absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,1)] sm:h-4 sm:w-4" />

            <span className="absolute bottom-8 right-[-4px] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]" />
          </motion.div>


          {/* =================================================
              ELLIPTICAL ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 27,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-40 w-72 rotate-[25deg] rounded-full border border-cyan-400/20 sm:h-56 sm:w-[400px]"
          >
            <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.9)]" />
          </motion.div>


          {/* =================================================
              3D CORE
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >

            {/* Outer glass sphere */}

            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[0_30px_100px_rgba(37,99,235,0.25)] backdrop-blur-sm sm:h-60 sm:w-60 lg:h-72 lg:w-72">

              {/* Inner sphere */}

              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-cyan-400/20 shadow-[inset_0_0_50px_rgba(59,130,246,0.15)] sm:h-44 sm:w-44 lg:h-52 lg:w-52">

                {/* Code cube */}

                <motion.div
                  animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="relative h-24 w-24 sm:h-28 sm:w-28"
                >

                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-2xl border border-blue-300/40 bg-blue-600/80 text-3xl font-black text-white shadow-[0_15px_50px_rgba(37,99,235,0.5)] sm:text-4xl"
                    style={{
                      transform: "translateZ(45px)",
                    }}
                  >
                    {"</>"}
                  </div>

                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-500/70 text-xl font-black text-white"
                    style={{
                      transform: "rotateY(180deg) translateZ(45px)",
                    }}
                  >
                    JS
                  </div>

                  <div
                    className="absolute inset-0 rounded-2xl bg-blue-500/80"
                    style={{
                      transform: "rotateY(90deg) translateZ(45px)",
                    }}
                  />

                  <div
                    className="absolute inset-0 rounded-2xl bg-cyan-500/70"
                    style={{
                      transform: "rotateY(-90deg) translateZ(45px)",
                    }}
                  />

                </motion.div>

              </div>

            </div>

          </motion.div>


          {/* =================================================
              FLOATING TECH CARD — REACT
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-5 z-20 rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3 shadow-2xl backdrop-blur-xl sm:right-2 sm:top-10 sm:px-5 sm:py-4"
          >
            <p className="text-[9px] uppercase tracking-wider text-slate-400 sm:text-[10px]">
              Currently working with
            </p>

            <p className="mt-1 text-xs font-bold text-white sm:text-sm">
              React · Three.js
            </p>
          </motion.div>


          {/* =================================================
              FLOATING TECH CARD — MERN
          ================================================= */}

          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [2, -2, 2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-5 left-0 z-20 rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3 shadow-2xl backdrop-blur-xl sm:bottom-10 sm:left-2 sm:px-5 sm:py-4"
          >
            <p className="text-[9px] uppercase tracking-wider text-slate-400 sm:text-[10px]">
              Stack
            </p>

            <div className="mt-2 flex gap-1.5">
              <span className="rounded-md bg-blue-500/15 px-2 py-1 text-[9px] font-bold text-blue-300">
                MERN
              </span>

              <span className="rounded-md bg-cyan-500/15 px-2 py-1 text-[9px] font-bold text-cyan-300">
                UI/UX
              </span>
            </div>
          </motion.div>


          {/* =================================================
              FLOATING CODE CHIP
          ================================================= */}

          <motion.div
            animate={{
              x: [0, 12, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[8%] top-[15%] rounded-xl border border-blue-400/20 bg-blue-950/40 px-3 py-2 font-mono text-[9px] text-blue-300 backdrop-blur-xl sm:text-[10px]"
          >
            {"<build />"}
          </motion.div>


          {/* =================================================
              FLOATING CODE CHIP
          ================================================= */}

          <motion.div
            animate={{
              x: [0, -10, 0],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[18%] right-[5%] rounded-xl border border-cyan-400/20 bg-cyan-950/40 px-3 py-2 font-mono text-[9px] text-cyan-300 backdrop-blur-xl sm:text-[10px]"
          >
            {"npm run dev"}
          </motion.div>


          {/* =================================================
              PARTICLES
          ================================================= */}

          <span className="absolute left-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,1)]" />

          <span className="absolute right-[18%] top-[40%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]" />

          <span className="absolute bottom-[30%] left-[25%] h-1.5 w-1.5 rounded-full bg-blue-300" />

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;