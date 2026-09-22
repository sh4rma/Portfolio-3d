import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* =====================================================
          3D BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-400/15 blur-[130px]" />

        {/* Yellow glow */}
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-yellow-300/20 blur-[130px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

        {/* Large rotating ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-32 top-1/2 h-[420px] w-[420px] rounded-full border-[18px] border-blue-100/50"
        />

        {/* Small yellow sphere */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[12%] top-[18%] h-10 w-10 rounded-full bg-yellow-400 shadow-[0_15px_40px_rgba(250,204,21,0.3)]"
        />

        {/* Blue dot */}
        <motion.div
          animate={{
            y: [0, 18, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-[20%] bottom-[18%] h-3 w-3 rounded-full bg-blue-500"
        />
      </div>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="flex items-center gap-3">

            <span className="h-[2px] w-10 bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Get In Touch
            </span>

          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            Let's build
            <br />

            <span className="text-blue-600">
              something great.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Have a project, idea or opportunity in mind?
            Let's talk about it and turn your idea into a real
            digital experience.
          </p>
        </motion.div>


        {/* =====================================================
            CONTACT GRID
        ====================================================== */}

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2 lg:gap-24">


          {/* =================================================
              LEFT — 3D CONTACT OBJECT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative flex min-h-[430px] items-center justify-center"
          >

            {/* Ground shadow */}

            <motion.div
              animate={{
                scale: [1, 0.8, 1],
                opacity: [0.25, 0.12, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 h-24 w-64 rounded-full bg-blue-500/20 blur-3xl"
            />


            {/* Outer orbit */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[300px] w-[300px] rounded-full border border-blue-200 sm:h-[360px] sm:w-[360px]"
            >

              <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-600 shadow-lg shadow-blue-500/40" />

            </motion.div>


            {/* Second orbit */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[240px] w-[360px] rotate-12 rounded-full border border-yellow-200"
            />


            {/* =================================================
                3D ENVELOPE / MESSAGE
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -18, 0],
                rotateY: [-10, 10, -10],
                rotateX: [2, -2, 2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1200,
              }}
              className="relative z-10 h-48 w-64 sm:h-56 sm:w-80"
            >

              {/* Shadow/depth */}

              <div className="absolute left-4 top-5 h-full w-full rounded-[30px] bg-blue-600/20 blur-2xl" />


              {/* Main card */}

              <div className="absolute inset-0 overflow-hidden rounded-[30px] border border-blue-100 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.16)]">

                {/* Top blue layer */}

                <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400" />

                {/* Envelope shape */}

                <div className="absolute left-8 right-8 top-14 h-24 rounded-2xl border border-slate-100 bg-slate-50 sm:h-28">

                  <div className="absolute left-0 top-0 h-full w-1/2 origin-top-left -skew-y-[28deg] border-b border-slate-200" />

                  <div className="absolute right-0 top-0 h-full w-1/2 origin-top-right skew-y-[28deg] border-b border-slate-200" />

                </div>


                {/* Message icon */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-xl shadow-blue-600/30"
                >
                  @
                </motion.div>

              </div>

            </motion.div>


            {/* =================================================
                FLOATING CARDS
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute left-0 top-[20%] hidden rounded-2xl border border-blue-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] text-slate-400">
                Available for
              </p>

              <p className="mt-1 text-xs font-black text-blue-600">
                Freelance & Projects
              </p>
            </motion.div>


            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
              className="absolute bottom-[18%] right-0 hidden rounded-2xl border border-yellow-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] text-slate-400">
                Response
              </p>

              <p className="mt-1 text-xs font-black text-yellow-600">
                Let's connect
              </p>
            </motion.div>

          </motion.div>


          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8 lg:p-10"
          >

            <div className="mb-8">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Contact Me
              </p>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Tell me about your idea.
              </h3>

            </div>


            <form className="space-y-5">

              {/* Name */}

              <div>

                <label className="mb-2 block text-xs font-bold text-slate-600">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Hritik Sharma"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

              </div>


              {/* Email */}

              <div>

                <label className="mb-2 block text-xs font-bold text-slate-600">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

              </div>


              {/* Subject */}

              <div>

                <label className="mb-2 block text-xs font-bold text-slate-600">
                  Project Type
                </label>

                <select
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  <option>Website Development</option>
                  <option>Full-Stack Application</option>
                  <option>UI/UX Design</option>
                  <option>3D Website</option>
                  <option>Other</option>
                </select>

              </div>


              {/* Message */}

              <div>

                <label className="mb-2 block text-xs font-bold text-slate-600">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Send Message

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>


            {/* Direct contact */}

            <div className="mt-7 border-t border-slate-100 pt-6">

              <p className="text-xs text-slate-400">
                Prefer direct contact?
              </p>

              <a
                href="mailto:shritik406@example.com"
                className="mt-2 inline-block text-sm font-bold text-slate-800 transition hover:text-blue-600"
              >
                shritik406@example.com
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;