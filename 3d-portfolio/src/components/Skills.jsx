import { motion } from "framer-motion";

const skills = [
  {
    name: ".jsx",
    short: "RE",
    position: "left-[5%] top-[18%]",
    color: "blue",
    rotate: 8,
  },
   {
    name: ".tsx",
    short: "Next",
    position: "left-[20%] top-[35%]",
    color: "blue",
    rotate: 8,
  },
  {
    name: ".js",
    short: "JS",
    position: "right-[8%] top-[12%]",
    color: "yellow",
    rotate: -8,
  },
  {
    name: ".py",
    short: "Python",
    position: "right-[20%] top-[30%]",
    color: "yellow",
    rotate: -8,
  },
  {
    name: "Node",
    short: "Node",
    position: "left-[12%] bottom-[1%]",
    color: "green",
    rotate: -6,
  },
  {
    name: "MongoDB",
    short: "DB",
    position: "right-[10%] bottom-[18%]",
    color: "emerald",
    rotate: 7,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-cyan-50/60" />

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[120px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_3px),linear-gradient(to_bottom,#dbeafe_1px,transparent_3px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= TITLE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-blue-600 sm:w-10" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 sm:text-sm">
              My Skills
            </span>
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Technologies I
            <span className="text-blue-600"> build with.</span>
          </h2>
        </motion.div>


        {/* =====================================================
            3D STAGE
        ====================================================== */}

        <div className="relative mx-auto mt-16 h-[520px] max-w-6xl sm:h-[600px] lg:mt-20">

          {/* ================= CENTRAL ORBIT ================= */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200 sm:h-[390px] sm:w-[390px]"
          >
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600 shadow-lg shadow-blue-500/50" />
          </motion.div>


          {/* SECOND ORBIT */}

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[190px] w-[330px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border border-cyan-200 sm:h-[260px] sm:w-[480px]"
          >
            <span className="absolute -right-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
          </motion.div>


          {/* ================= CENTER OBJECT ================= */}

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateY: [0, 180, 360],
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateY: {
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-48 sm:w-48"
          >

            {/* Cube */}

            <div className="relative h-28 w-28 sm:h-36 sm:w-36">

              <div
                className="absolute inset-0 flex items-center justify-center rounded-2xl border border-blue-300 bg-blue-600 text-3xl font-black text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] sm:text-4xl"
                style={{
                  transform: "translateZ(55px)",
                }}
              >
                DEV
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center rounded-2xl border border-cyan-300 bg-cyan-500 text-2xl font-black text-white"
                style={{
                  transform: "rotateY(180deg) translateZ(55px)",
                }}
              >
                3D
              </div>

              <div
                className="absolute inset-0 rounded-2xl bg-blue-500"
                style={{
                  transform: "rotateY(90deg) translateZ(55px)",
                }}
              />

              <div
                className="absolute inset-0 rounded-2xl bg-cyan-500"
                style={{
                  transform: "rotateY(-90deg) translateZ(55px)",
                }}
              />

            </div>
          </motion.div>


          {/* ================= FLOATING SKILLS ================= */}

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              animate={{
                y: index % 2 === 0
                  ? [0, -18, 0]
                  : [0, 18, 0],

                rotate: [
                  skill.rotate,
                  skill.rotate + 6,
                  skill.rotate,
                ],
              }}
              className={`absolute ${skill.position} z-20`}
            >

              <div className="flex flex-col items-center gap-2">

                {/* 3D Block */}

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-white/80 bg-white text-xl font-black shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 sm:h-24 sm:w-24 sm:text-2xl`}
                >
                  <span className="text-blue-600">
                    {skill.short}
                  </span>
                </div>

                <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[10px] font-bold text-slate-600 shadow-sm sm:text-xs">
                  {skill.name}
                </span>

              </div>
            </motion.div>
          ))}


          {/* ================= FLOATING CODE ================= */}

          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-[5%] -translate-x-1/2 rounded-xl border border-blue-100 bg-white/80 px-4 py-3 font-mono text-xs text-blue-600 shadow-lg backdrop-blur-xl"
          >
            {"print(my skills);"}
          </motion.div>


          {/* ================= BOTTOM LABEL ================= */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[2%] left-1/2 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 text-center shadow-lg backdrop-blur-xl"
          >
            <p className="text-xs font-semibold text-slate-500">
              Always learning
            </p>

            <p className="mt-1 text-sm font-black text-slate-900">
              Building with technology
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;