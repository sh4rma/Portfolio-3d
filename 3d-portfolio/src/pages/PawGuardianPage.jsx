import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiHeart,
  FiMapPin,
  FiShield,
  FiActivity,
  FiUsers,
  FiCode,
} from "react-icons/fi";

const PawGuardianPage = () => {
  const features = [
    {
      icon: <FiShield />,
      title: "Injured Animal Protection",
      text: "PawGuardian ka primary focus injured and vulnerable animals ko protection aur timely help tak pahunchana hai.",
    },
    {
      icon: <FiMapPin />,
      title: "Location Assistance",
      text: "Location-based assistance ke through rescuers ko animal ke location tak pahunchne mein help mil sakti hai.",
    },
    {
      icon: <FiActivity />,
      title: "Rescue Reporting",
      text: "Users injured animals ki information aur report share karke rescue support request kar sakte hain.",
    },
    {
      icon: <FiHeart />,
      title: "Animal Care",
      text: "Platform ka goal animal lovers, rescuers aur care resources ko ek connected ecosystem mein lana hai.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 sm:pb-28 lg:px-12">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-yellow-400/15 blur-[130px]" />

          <div
            className="
              absolute
              inset-0
              opacity-20
              bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]
              bg-[size:55px_55px]
            "
          />

        </div>


        {/* Navbar */}

        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">

          <a
            href="/#pawguardian"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-slate-600
              transition
              hover:text-blue-600
            "
          >
            <FiArrowLeft />
            Back to Portfolio
          </a>

          <div className="flex items-center gap-2">

            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

            <span className="text-sm font-black tracking-tight">
              PawGuardian
            </span>

          </div>

        </div>


        {/* Hero Content */}

        <div className="relative z-10 mx-auto mt-16 max-w-5xl text-center sm:mt-20">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="mx-auto flex w-fit items-center gap-3">

              <span className="h-[2px] w-8 bg-blue-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 sm:text-xs">
                PawGuardian India
              </span>

              <span className="h-[2px] w-8 bg-yellow-400" />

            </div>


            <h1
              className="
                mt-7
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-6xl
                lg:text-8xl
              "
            >
              Protecting Animals.
              <br />

              <span className="text-blue-600">
                Connecting Humanity.
              </span>
            </h1>


            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-sm
                leading-6
                text-slate-600
                sm:text-lg
                sm:leading-8
              "
            >
              PawGuardian is an animal care and rescue ecosystem created
              to make reporting injured animals, finding assistance and
              connecting people with rescue support easier through technology.
            </p>

          </motion.div>


          {/* Hero Video */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="
              relative
              mx-auto
              mt-12
              max-w-4xl
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-slate-950
              p-2
              shadow-[0_40px_100px_rgba(15,23,42,0.15)]
              sm:rounded-[36px]
            "
          >

            <div className="overflow-hidden rounded-[22px] sm:rounded-[30px]">

              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="aspect-video w-full object-cover"
              >
                <source
                  src="/pawguardian/demo.mp4"
                  type="video/mp4"
                />
              </video>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ====================================================== */}

      <section
        id="mission"
        className="relative scroll-mt-20 border-y border-slate-100 bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* Left */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Our Mission
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                  leading-tight
                  tracking-tight
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Every injured animal
                <br />
                <span className="text-blue-600">
                  deserves protection.
                </span>
              </h2>

            </motion.div>


            {/* Right */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                PawGuardian ka mission technology ka use karke injured,
                vulnerable aur needy animals ke liye help ko accessible
                banana hai.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Humara focus ek aisa connected ecosystem banana hai jahan
                people injured animals ko report kar saken, location
                information share kar saken aur available rescue aur
                veterinary support tak information pahunch sake.
              </p>

              <div className="mt-8 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <FiShield />
                </div>

                <div>
                  <p className="text-sm font-black">
                    Protect • Rescue • Care
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Technology for animal welfare
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              What PawGuardian Does
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Built around
              <span className="text-blue-600"> animal protection.</span>
            </h2>

          </div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  y: -6,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]
                "
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-black">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-12">

        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-5xl">

          <div className="text-center">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Founder & Developer
            </span>

            <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-3xl font-black shadow-2xl shadow-blue-600/30">
              H
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
              Hritik Sharma
            </h2>

            <p className="mt-2 text-sm font-medium text-blue-400">
              Founder & Developer — PawGuardian India
            </p>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              PawGuardian ko technology aur animal welfare ke combination
              se build karne ka goal ek safer aur more connected ecosystem
              create karna hai for animals in need.
            </p>

          </div>


          {/* Founder Info */}

          <div className="mt-12 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <FiCode className="mx-auto text-2xl text-blue-400" />

              <p className="mt-3 text-sm font-black">
                Developer
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Technology & Product Development
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <FiShield className="mx-auto text-2xl text-yellow-400" />

              <p className="mt-3 text-sm font-black">
                Animal Protection
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Focused on injured and vulnerable animals
              </p>
            </div>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
              <FiUsers className="mx-auto text-2xl text-blue-400" />

              <p className="mt-3 text-sm font-black">
                Community
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Connecting people with animal-care support
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-12">

        <div
          className="
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[32px]
            border
            border-blue-100
            bg-blue-50
            px-6
            py-12
            text-center
            sm:px-10
            sm:py-16
          "
        >

          <FiHeart className="mx-auto text-4xl text-blue-600" />

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            Technology with compassion.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            PawGuardian ka vision simple hai — injured animals ko protection,
            people ko information aur rescuers ko better support provide karna.
          </p>

          <a
            href="/#contact"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-blue-600/20
              transition
              hover:-translate-y-1
              hover:bg-blue-700
            "
          >
            Connect With Me
            <FiArrowLeft className="rotate-180" />
          </a>

        </div>

      </section>

    </main>
  );
};

export default PawGuardianPage;