import { motion } from "framer-motion";
import {
  FiHeart,
  FiMapPin,
  FiShield,
  FiActivity,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";

const PawGuardian = () => {
  const features = [
    {
      title: "Rescue Reports",
      description:
        "Report injured animals and request rescue assistance quickly.",
      icon: <FiShield />,
      type: "blue",
    },
    {
      title: "Location Assistance",
      description:
        "Help rescuers locate animals through accurate location data.",
      icon: <FiMapPin />,
      type: "yellow",
    },
    {
      title: "Nearby Help",
      description:
        "Find nearby veterinary and animal-care resources when needed.",
      icon: <FiActivity />,
      type: "blue",
    },
    {
      title: "Animal Care",
      description:
        "Connect people who want to help animals in need.",
      icon: <FiHeart />,
      type: "yellow",
    },
  ];

  return (
    <section
      id="pawguardian"
      className="relative overflow-hidden bg-white px-4 py-20 text-slate-950 sm:px-6 sm:py-24 lg:px-12 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue Glow */}
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-blue-400/15 blur-[100px] sm:-left-40 sm:h-80 sm:w-80 sm:blur-[120px]" />

        {/* Yellow Glow */}
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-[110px] sm:-right-40 sm:h-96 sm:w-96 sm:blur-[130px]" />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]
            bg-[size:45px_45px]
            opacity-25
            sm:bg-[size:60px_60px]
          "
        />

        {/* Floating Blue Sphere */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[5%]
            top-[20%]
            hidden
            h-10
            w-10
            rounded-full
            bg-blue-600
            shadow-[0_20px_50px_rgba(37,99,235,0.3)]
            sm:block
            sm:h-12
            sm:w-12
          "
        />

        {/* Floating Yellow Cube */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [12, 90, 12],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[6%]
            top-[16%]
            hidden
            h-12
            w-12
            rounded-2xl
            border
            border-yellow-300
            bg-yellow-100/70
            shadow-xl
            sm:block
            sm:h-16
            sm:w-16
          "
        />

        {/* Blue Dot */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[18%]
            left-[12%]
            h-2.5
            w-2.5
            rounded-full
            bg-blue-500
            sm:left-[18%]
            sm:h-3
            sm:w-3
          "
        />

        {/* Yellow Dot */}
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[20%]
            right-[18%]
            h-2
            w-2
            rounded-full
            bg-yellow-400
            sm:right-[25%]
            sm:h-2.5
            sm:w-2.5
          "
        />
      </div>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-20
          "
        >

          {/* =================================================
              PHONE AREA
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
            className="
              relative
              flex
              min-h-[520px]
              items-center
              justify-center
              sm:min-h-[600px]
            "
          >

            {/* BLUE ORBIT */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                z-0
                h-[300px]
                w-[300px]
                rounded-full
                border-2
                border-blue-300/60
                sm:h-[390px]
                sm:w-[390px]
                lg:h-[470px]
                lg:w-[470px]
              "
            >
              <span
                className="
                  absolute
                  -top-2
                  left-1/2
                  h-3
                  w-3
                  -translate-x-1/2
                  rounded-full
                  bg-blue-600
                  shadow-[0_0_25px_rgba(37,99,235,0.8)]
                  sm:h-4
                  sm:w-4
                "
              />
            </motion.div>


            {/* YELLOW ORBIT */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                z-0
                h-[245px]
                w-[245px]
                rounded-full
                border
                border-yellow-400/70
                sm:h-[330px]
                sm:w-[330px]
                lg:h-[400px]
                lg:w-[400px]
              "
              style={{
                transform: "rotateX(65deg) rotateZ(15deg)",
              }}
            >
              <span
                className="
                  absolute
                  bottom-[-4px]
                  right-[15%]
                  h-3
                  w-3
                  rounded-full
                  bg-yellow-400
                  shadow-[0_0_20px_rgba(250,204,21,0.9)]
                "
              />
            </motion.div>


            {/* FLOOR SHADOW */}

            <motion.div
              animate={{
                scale: [1, 0.85, 1],
                opacity: [0.25, 0.15, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                bottom-5
                z-0
                h-16
                w-48
                rounded-full
                bg-blue-600/20
                blur-2xl
                sm:bottom-8
                sm:h-20
                sm:w-60
              "
            />


            {/* =================================================
                3D PHONE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                rotateY: -12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateY: -8,
              }}
              viewport={{
                once: true,
              }}
              animate={{
                y: [0, -12, 0],
                rotateY: [-8, 5, -8],
                rotateZ: [-1, 1, -1],
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateZ: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1400,
              }}
              className="
                relative
                z-20
                h-[470px]
                w-[225px]
                sm:h-[570px]
                sm:w-[280px]
                lg:h-[590px]
                lg:w-[290px]
              "
            >

              {/* Phone Depth */}

              <div
                className="
                  absolute
                  left-4
                  top-5
                  h-full
                  w-full
                  rounded-[38px]
                  bg-blue-600/25
                  blur-xl
                  sm:rounded-[42px]
                "
              />

              {/* PHONE BODY */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[36px]
                  border-[6px]
                  border-slate-900
                  bg-slate-950
                  p-[6px]
                  shadow-[0_40px_90px_rgba(15,23,42,0.35)]
                  sm:rounded-[42px]
                  sm:p-[7px]
                "
              >

                {/* Left Buttons */}

                <div
                  className="
                    absolute
                    -left-[11px]
                    top-24
                    h-10
                    w-[5px]
                    rounded-l-md
                    bg-slate-800
                    sm:top-28
                    sm:h-12
                  "
                />

                <div
                  className="
                    absolute
                    -left-[11px]
                    top-40
                    h-14
                    w-[5px]
                    rounded-l-md
                    bg-slate-800
                    sm:top-44
                    sm:h-16
                  "
                />

                {/* Power Button */}

                <div
                  className="
                    absolute
                    -right-[11px]
                    top-32
                    h-16
                    w-[5px]
                    rounded-r-md
                    bg-slate-800
                    sm:top-36
                    sm:h-20
                  "
                />


                {/* SCREEN */}

                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[28px]
                    bg-black
                    sm:rounded-[32px]
                  "
                >

                  {/* Status Bar */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      z-30
                      flex
                      h-8
                      w-full
                      items-center
                      justify-between
                      px-4
                      text-[7px]
                      font-bold
                      text-white
                      sm:px-5
                      sm:text-[8px]
                    "
                  >
                    <span>9:41</span>

                    <div className="flex items-center gap-1">
                      <span>●</span>
                      <span>●</span>
                      <span>▮</span>
                    </div>
                  </div>


                  {/* Dynamic Island */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-2
                      z-40
                      h-5
                      w-16
                      -translate-x-1/2
                      rounded-full
                      bg-black
                      sm:w-20
                    "
                  />


                  {/* VIDEO */}

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source
                      src="/pawguardian/demo.mp4"
                      type="video/mp4"
                    />
                  </video>

                </div>

              </div>


              {/* PHONE EDGE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-3
                  top-8
                  h-[85%]
                  w-3
                  rounded-r-3xl
                  bg-gradient-to-b
                  from-blue-400
                  via-blue-600
                  to-slate-900
                  opacity-90
                "
                style={{
                  transform: "translateZ(-12px)",
                }}
              />

            </motion.div>


            {/* FLOATING LEFT CARD */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-2, 1, -2],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1
                top-[20%]
                z-30
                hidden
                rounded-2xl
                border
                border-blue-100
                bg-white/90
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
                sm:block
                lg:left-0
                lg:top-[25%]
              "
            >
              <p className="text-[9px] text-slate-400">
                Android Application
              </p>

              <p className="mt-1 text-sm font-black text-blue-600">
                PawGuardian India
              </p>
            </motion.div>


            {/* FLOATING RIGHT CARD */}

            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [2, -1, 2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[18%]
                right-1
                z-30
                hidden
                rounded-2xl
                border
                border-yellow-100
                bg-white/90
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
                sm:block
                lg:right-0
                lg:bottom-[22%]
              "
            >
              <p className="text-[9px] text-slate-400">
                Mission
              </p>

              <p className="mt-1 text-sm font-black text-yellow-600">
                Protect Animals
              </p>
            </motion.div>

          </motion.div>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
          >

            {/* Label */}

            <div className="flex items-center gap-3">

              <span className="h-[2px] w-8 bg-blue-600 sm:w-10" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-blue-600
                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                PawGuardian India
              </span>

            </div>


            {/* Heading */}

            <h2
              className="
                mt-5
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.045em]
                sm:mt-6
                sm:text-5xl
                lg:text-7xl
              "
            >
              Technology

              <br />

              <span className="text-blue-600">
                with compassion.
              </span>
            </h2>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-6
                text-slate-600
                sm:mt-7
                sm:text-lg
                sm:leading-7
              "
            >
              PawGuardian is an animal care and rescue ecosystem designed
              to make reporting, locating and helping animals easier through
              technology.
            </p>


            {/* =================================================
                FOUNDER
            ================================================= */}

            <motion.div
              whileHover={{
                y: -3,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                mt-7
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                sm:mt-8
                sm:p-5
              "
            >

              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-500/5 blur-2xl" />

              <div className="relative flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-600
                    text-lg
                    font-black
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    sm:h-12
                    sm:w-12
                  "
                >
                  H
                </div>

                <div>
                  <p className="text-[10px] text-slate-400 sm:text-xs">
                    Founder & Developer
                  </p>

                  <p className="mt-1 text-base font-black sm:text-lg">
                    Hritik Sharma
                  </p>
                </div>

              </div>

              <p
                className="
                  relative
                  mt-4
                  text-xs
                  leading-5
                  text-slate-500
                  sm:text-sm
                  sm:leading-6
                "
              >
                Building technology with the vision of creating a safer,
                smarter and more connected ecosystem for animals in need.
              </p>

            </motion.div>


            {/* =================================================
                FEATURES
            ================================================= */}

            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-3
                sm:mt-8
                sm:grid-cols-2
              "
            >

              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`
                    group
                    rounded-2xl
                    border
                    p-4
                    transition-all
                    duration-300
                    ${
                      feature.type === "blue"
                        ? "border-blue-100 bg-blue-50/70 hover:border-blue-200 hover:bg-blue-50"
                        : "border-yellow-100 bg-yellow-50/70 hover:border-yellow-200 hover:bg-yellow-50"
                    }
                  `}
                >

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      text-lg
                      text-white
                      shadow-lg
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      ${
                        feature.type === "blue"
                          ? "bg-blue-600 shadow-blue-600/20"
                          : "bg-yellow-400 shadow-yellow-400/20"
                      }
                    `}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="mt-4 font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {feature.description}
                  </p>

                </motion.div>
              ))}

            </div>


            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:mt-8
                sm:flex-row
              "
            >

              {/* MAIN PAGE BUTTON */}

              <a
                href="/pawguardian"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-700
                  hover:shadow-blue-600/30
                "
              >
                Explore PawGuardian India

                <FiArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>


              {/* MISSION BUTTON */}

              <a
                href="/pawguardian#mission"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:text-blue-600
                "
              >
                View Mission
                <FiExternalLink className="text-sm" />
              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default PawGuardian;