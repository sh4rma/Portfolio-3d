import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 5) + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 650);
      }

      setProgress(value);
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
            transition: {
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#050816]
          "
        >

          {/* =====================================================
              BACKGROUND
          ====================================================== */}

          <div className="pointer-events-none absolute inset-0">

            {/* Main Blue Glow */}

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.18, 0.35, 0.18],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-600/20
                blur-[120px]
                sm:h-[500px]
                sm:w-[500px]
              "
            />

            {/* Cyan Glow */}

            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-20
                top-1/4
                h-48
                w-48
                rounded-full
                bg-cyan-500/10
                blur-[100px]
              "
            />

            {/* Yellow Glow */}

            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-20
                bottom-1/4
                h-48
                w-48
                rounded-full
                bg-yellow-400/10
                blur-[100px]
              "
            />

            {/* Grid */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.055]
                [background-image:linear-gradient(rgba(96,165,250,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.8)_1px,transparent_1px)]
                [background-size:55px_55px]
              "
            />

            {/* Vignette */}

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,transparent_15%,#050816_78%)]
              "
            />

          </div>


          {/* =====================================================
              3D SCENE
          ====================================================== */}

          <div
            className="
              relative
              flex
              h-[360px]
              w-[360px]
              items-center
              justify-center
              sm:h-[480px]
              sm:w-[480px]
            "
            style={{
              perspective: "1200px",
            }}
          >

            {/* =================================================
                OUTER BLUE ORBIT
            ================================================= */}

            <motion.div
              animate={{
                rotateZ: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(68deg) rotateZ(15deg)",
              }}
              className="
                absolute
                h-[260px]
                w-[260px]
                rounded-full
                border
                border-blue-400/30
                shadow-[0_0_30px_rgba(59,130,246,0.08)]
                sm:h-[370px]
                sm:w-[370px]
              "
            >

              {/* Blue Satellite */}

              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -top-1.5
                  left-1/2
                  h-3
                  w-3
                  -translate-x-1/2
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_25px_rgba(59,130,246,1)]
                "
              />

            </motion.div>


            {/* =================================================
                YELLOW ORBIT
            ================================================= */}

            <motion.div
              animate={{
                rotateZ: -360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(64deg) rotateZ(-25deg)",
              }}
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                border
                border-yellow-400/35
                sm:h-[310px]
                sm:w-[310px]
              "
            >

              <span
                className="
                  absolute
                  bottom-[7%]
                  right-[9%]
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-yellow-400
                  shadow-[0_0_20px_rgba(250,204,21,1)]
                "
              />

            </motion.div>


            {/* =================================================
                CYAN ORBIT
            ================================================= */}

            <motion.div
              animate={{
                rotateZ: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(74deg) rotateZ(55deg)",
              }}
              className="
                absolute
                h-[180px]
                w-[180px]
                rounded-full
                border
                border-cyan-400/20
                sm:h-[250px]
                sm:w-[250px]
              "
            />


            {/* =================================================
                VERTICAL ORBIT
            ================================================= */}

            <motion.div
              animate={{
                rotateY: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                absolute
                h-[230px]
                w-[110px]
                rounded-[50%]
                border
                border-blue-400/20
                sm:h-[320px]
                sm:w-[150px]
              "
            />


            {/* =================================================
                FLOATING PARTICLES
            ================================================= */}

            <motion.span
              animate={{
                y: [0, -35, 0],
                x: [0, 18, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[14%]
                top-[27%]
                h-1.5
                w-1.5
                rounded-full
                bg-blue-400
                shadow-[0_0_15px_rgba(59,130,246,1)]
              "
            />

            <motion.span
              animate={{
                y: [0, 30, 0],
                x: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[24%]
                right-[13%]
                h-2
                w-2
                rounded-full
                bg-yellow-400
                shadow-[0_0_15px_rgba(250,204,21,1)]
              "
            />

            <motion.span
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
                absolute
                right-[22%]
                top-[22%]
                h-1
                w-1
                rounded-full
                bg-cyan-400
              "
            />

            <motion.span
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.2, 0.9, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-[20%]
                left-[23%]
                h-1
                w-1
                rounded-full
                bg-blue-300
              "
            />


            {/* =================================================
                CENTRAL GLASS CORE
            ================================================= */}

            <motion.div
              initial={{
                scale: 0.75,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                scale: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: {
                  duration: 0.5,
                },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                relative
                z-30
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-[32px]
                border
                border-white/15
                bg-white/[0.045]
                shadow-[0_0_80px_rgba(37,99,235,0.25)]
                backdrop-blur-xl
                sm:h-40
                sm:w-40
              "
            >

              {/* Outer Glow */}

              <motion.div
                animate={{
                  scale: [0.8, 1.15, 0.8],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-24
                  w-24
                  rounded-full
                  bg-blue-500/20
                  blur-2xl
                  sm:h-28
                  sm:w-28
                "
              />

              {/* Core */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-20
                  w-20
                  rounded-[24px]
                  border
                  border-blue-400/20
                  bg-gradient-to-br
                  from-blue-600/30
                  via-blue-500/10
                  to-cyan-400/20
                  sm:h-24
                  sm:w-24
                "
              />

              {/* Brand */}

              <div className="relative z-10 text-center">

                <motion.div
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    text-2xl
                    font-black
                    tracking-[-0.04em]
                    text-white
                    sm:text-3xl
                  "
                >
                  Hritik
                  <span className="text-blue-500">.</span>
                </motion.div>

                <div
                  className="
                    mt-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.35em]
                    text-slate-500
                    sm:text-[8px]
                  "
                >
                  Developer
                </div>

              </div>

            </motion.div>

          </div>


          {/* =================================================
              BOTTOM BRAND / PROGRESS
          ================================================= */}

          <div
            className="
              absolute
              bottom-9
              left-1/2
              w-[calc(100%-40px)]
              max-w-sm
              -translate-x-1/2
            "
          >

            {/* Progress Header */}

            <div className="mb-2 flex items-center justify-between">

              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-slate-500
                "
              >
                Initializing Experience
              </motion.span>

              <span className="text-xs font-bold text-blue-400">
                {progress}%
              </span>

            </div>


            {/* Progress Bar */}

            <div className="h-[2px] overflow-hidden rounded-full bg-white/10">

              <motion.div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-400
                  to-yellow-400
                  shadow-[0_0_15px_rgba(59,130,246,0.8)]
                "
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.12,
                  ease: "linear",
                }}
              />

            </div>


            {/* Bottom Text */}

            <div className="mt-3 text-center">

              <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-slate-600">
                Code • Design • Experience
              </span>

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;