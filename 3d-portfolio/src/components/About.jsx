import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px] sm:h-96 sm:w-96" />

      {/* Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-blue-500 sm:w-10" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
              About Me
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Code is what I write.
            <br />

            <span className="text-blue-500">
              Experiences are what I build.
            </span>
          </h2>
        </motion.div>


        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* =================================================
              3D VISUAL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex h-[360px] items-center justify-center sm:h-[460px]"
          >

            {/* Glow */}

            <div className="absolute h-52 w-52 rounded-full bg-blue-500/20 blur-[90px] sm:h-72 sm:w-72" />


            {/* ORBIT */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[260px] w-[260px] rounded-full border border-blue-400/20 sm:h-[350px] sm:w-[350px]"
            >
              <span className="absolute -top-2 left-1/2 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.9)]" />
            </motion.div>


            {/* SECOND ORBIT */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[210px] w-[210px] rounded-full border border-cyan-400/20 sm:h-[290px] sm:w-[290px]"
            >
              <span className="absolute bottom-1 right-5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
            </motion.div>


            {/* =================================================
                3D CUBE
            ================================================== */}

            <motion.div
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 180],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative h-32 w-32 sm:h-40 sm:w-40"
            >

              {/* Front */}

              <div
                className="absolute inset-0 flex items-center justify-center border border-blue-400/40 bg-blue-600/20 text-4xl font-black text-blue-300 shadow-[inset_0_0_40px_rgba(59,130,246,0.2)] backdrop-blur-sm sm:text-5xl"
                style={{
                  transform: "translateZ(64px)",
                }}
              >
                {"</>"}
              </div>


              {/* Back */}

              <div
                className="absolute inset-0 flex items-center justify-center border border-cyan-400/40 bg-cyan-500/10 text-3xl font-black text-cyan-300"
                style={{
                  transform: "rotateY(180deg) translateZ(64px)",
                }}
              >
                JS
              </div>


              {/* Right */}

              <div
                className="absolute inset-0 flex items-center justify-center border border-blue-400/40 bg-blue-500/10 text-3xl font-black text-blue-300"
                style={{
                  transform: "rotateY(90deg) translateZ(64px)",
                }}
              >
                RE
              </div>


              {/* Left */}

              <div
                className="absolute inset-0 flex items-center justify-center border border-cyan-400/40 bg-cyan-500/10 text-3xl font-black text-cyan-300"
                style={{
                  transform: "rotateY(-90deg) translateZ(64px)",
                }}
              >
                UI
              </div>


              {/* Top */}

              <div
                className="absolute inset-0 flex items-center justify-center border border-blue-400/40 bg-blue-500/10 text-2xl font-black text-blue-300"
                style={{
                  transform: "rotateX(90deg) translateZ(64px)",
                }}
              >
                3D
              </div>


              {/* Bottom */}

              <div
                className="absolute inset-0 flex items-center justify-center border border-cyan-400/40 bg-cyan-500/10 text-2xl font-black text-cyan-300"
                style={{
                  transform: "rotateX(-90deg) translateZ(64px)",
                }}
              >
                API
              </div>

            </motion.div>


            {/* =================================================
                FLOATING CODE
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-2 top-10 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-blue-300 backdrop-blur-xl sm:left-5"
            >
              {"<React />"}
            </motion.div>


            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 right-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-cyan-300 backdrop-blur-xl sm:right-4"
            >
              {"npm run dev"}
            </motion.div>


            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-2 top-20 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-slate-300 backdrop-blur-xl sm:right-0"
            >
              {"git commit"}
            </motion.div>

          </motion.div>


          {/* =================================================
              ABOUT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Who I Am
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Developer.
              <br />

              <span className="text-blue-500">
                Designer.
              </span>

              <br />

              Problem Solver.
            </h3>


            <p className="mt-7 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              I'm Hritik Sharma, a Full-Stack Developer passionate about
              creating modern web applications, interactive interfaces and
              immersive digital experiences.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              I enjoy working across frontend, backend and UI/UX, combining
              technology and design to turn ideas into useful products.
            </p>


            {/* Skills */}

            <div className="mt-8 flex flex-wrap gap-2">

              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
                React
              </span>

              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                Node.js
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
                MongoDB
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
                UI/UX
              </span>

              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
                Three.js
              </span>

            </div>


            {/* Bottom Stats */}

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-white">
                  10+
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Projects
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-white">
                  3D
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Web
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-black text-white">
                  ∞
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Learning
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;