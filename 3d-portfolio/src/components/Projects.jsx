import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useRef } from "react";

/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [
  {
    number: "01",
    title: "Luxe Restaurant",
    category: "FULL-STACK / RESTAURANT",

    description:
      "A premium restaurant platform with digital menu, QR ordering, reservations and a modern management system.",

    tech: ["React",
       "Node.js",
        "Firebase"
      ],

    image: "/projects/luxe.png",

    gradient: "from-blue-600 to-cyan-400",

    icon: "✦",

    liveLink:
      "https://luxerestaurantwebsite.netlify.app/",
  },

  {
    number: "02",
    title: "PawGuardian",
    category: "FULL-STACK / ANIMAL RESCUE",

    description:
      "A smart animal rescue ecosystem for reporting injured animals, location assistance and connecting people with rescue support.",

    tech: ["React", 
      "Node.js", 
      "Firebase"
    ],

    image: "/projects/paw.png",

    gradient: "from-blue-600 to-yellow-400",

    icon: "🐾",

    liveLink:
      "https://pawguardianindia.netlify.app/",
  },

  {
    number: "03",
    title: "ProjectHub",
    category: "MERN / COLLABORATION",

    description:
      "A collaborative platform where students can discover, share and build software projects while connecting with other developers.",

    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
    ],

    image: "/projects/projecthub.png",

    gradient: "from-indigo-600 to-blue-400",

    icon: "⌘",

    liveLink:
      "https://projecthubstd.netlify.app",
  },
];

/* =====================================================
   THREE.JS FLOATING SHAPE
===================================================== */

function FloatingShape({
  position,
  scale = 1,
  type = "ico",
}) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.25;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.35;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={1.5}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
      >
        {type === "ico" ? (
          <icosahedronGeometry args={[1, 1]} />
        ) : (
          <torusGeometry
            args={[1, 0.3, 16, 50]}
          />
        )}

        <MeshDistortMaterial
          color="#60a5fa"
          transparent
          opacity={0.18}
          roughness={0.2}
          metalness={0.7}
          distort={0.35}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

/* =====================================================
   THREE.JS BACKGROUND
===================================================== */

function ThreeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-80">

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 55,
        }}
        dpr={[1, 1.5]}
      >

        <ambientLight intensity={1} />

        <pointLight
          position={[4, 3, 5]}
          intensity={5}
          color="#60a5fa"
        />

        <pointLight
          position={[-4, -2, 4]}
          intensity={3}
          color="#22d3ee"
        />

        {/* Floating 3D Objects */}

        <FloatingShape
          position={[-4, 2, -1]}
          scale={1.2}
          type="ico"
        />

        <FloatingShape
          position={[4, -1, -2]}
          scale={1.5}
          type="torus"
        />

        <FloatingShape
          position={[1, 3, -3]}
          scale={0.7}
          type="ico"
        />

        <FloatingShape
          position={[-2, -3, -2]}
          scale={0.8}
          type="torus"
        />

      </Canvas>
    </div>
  );
}

/* =====================================================
   BROWSER PREVIEW
===================================================== */

const BrowserPreview = ({
  project,
  index,
}) => {
  return (
    <div className="relative h-[190px] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-slate-100 via-white to-blue-50 sm:h-[210px]">

      {/* ================= GRID ================= */}

      <div className="absolute inset-0 opacity-30">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#bfdbfe_1px,transparent_1px),linear-gradient(to_bottom,#bfdbfe_1px,transparent_1px)] bg-[size:24px_24px]" />

      </div>

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className={`absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${project.gradient} opacity-15 blur-3xl`}
      />

      {/* ================= FLOATING SPHERE ================= */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },

          rotate: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className={`absolute right-[12%] top-[12%] h-8 w-8 rounded-full bg-gradient-to-br ${project.gradient} opacity-70 shadow-xl`}
      />

      {/* ================= ORBIT ================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12 + index * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/40 sm:h-40 sm:w-40"
      >

        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />

      </motion.div>

      {/* ================= BROWSER ================= */}

      <motion.div
        animate={{
          y: [0, -5, 0],

          rotateX: [0, 2, 0],

          rotateY:
            index % 2 === 0
              ? [1, -1, 1]
              : [-1, 1, -1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/80 bg-white/90 shadow-[0_20px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl"
        style={{
          transformPerspective: 1000,
        }}
      >

        {/* Browser Header */}

        <div className="flex h-7 items-center gap-1.5 border-b border-slate-100 bg-white px-3">

          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />

          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />

          <div className="ml-2 h-2.5 flex-1 rounded-full bg-slate-100" />

        </div>

        {/* Browser Content */}

        <div className="relative h-[115px] overflow-hidden bg-slate-100 sm:h-[130px]">

          {/* Project Image */}

          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

          {/* Live Label */}

          <div className="absolute bottom-3 left-3 rounded-lg border border-white/40 bg-white/85 px-2.5 py-1.5 text-[8px] font-bold text-blue-600 shadow-lg backdrop-blur-md">
            LIVE PROJECT
          </div>

        </div>

        {/* Project Icon */}

        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className={`absolute bottom-3 right-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.gradient} text-lg shadow-lg`}
        >
          {project.icon}
        </motion.div>

      </motion.div>

      {/* ================= FLOATING CODE ================= */}

      <motion.div
        animate={{
          x: [0, 6, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute bottom-3 left-3 rounded-md border border-white/80 bg-white/90 px-2.5 py-1.5 font-mono text-[8px] font-bold text-blue-600 shadow-lg backdrop-blur"
      >
        {"<build />"}
      </motion.div>

      {/* ================= FLOATING LABEL ================= */}

      <motion.div
        animate={{
          x: [0, -6, 0],
          y: [0, 4, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
        className="absolute right-3 top-3 rounded-md border border-white/80 bg-white/90 px-2.5 py-1.5 font-mono text-[8px] font-bold text-cyan-600 shadow-lg backdrop-blur"
      >
        3D / WEB
      </motion.div>

    </div>
  );
};

/* =====================================================
   GITHUB FLOATING 3D BUTTON
===================================================== */

function GithubFloatingButton() {
  return (
    <motion.a
      href="https://github.com/sh4rma"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open GitHub Profile"

      whileHover={{
        scale: 1.12,
        rotateX: 8,
        rotateY: -8,
      }}

      whileTap={{
        scale: 0.92,
      }}

      animate={{
        y: [0, -8, 0],
        rotate: [0, 2, -2, 0],
      }}

      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },

        rotate: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}

      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-slate-950 text-white shadow-[0_15px_40px_rgba(15,23,42,0.3)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.35)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"

      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >

      {/* Glow */}

      <span className="absolute inset-0 -z-10 rounded-2xl bg-blue-500/30 blur-xl" />

      {/* GitHub Logo */}

      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
        aria-hidden="true"
      >

        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />

      </svg>

      {/* Blue 3D Dot */}

      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60" />

    </motion.a>
  );
}

/* =====================================================
   PROJECTS COMPONENT
===================================================== */

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white px-5 py-20 text-slate-950 sm:px-8 lg:px-12 lg:py-28"
    >

      {/* =================================================
          THREE.JS BACKGROUND
      ================================================= */}

      <ThreeBackground />

      {/* =================================================
          SOFT GLOWS
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">

        {/* Blue Glow */}

        <div className="absolute left-[-10%] top-[20%] h-80 w-80 rounded-full bg-blue-400/10 blur-[120px]" />

        {/* Cyan Glow */}

        <div className="absolute bottom-[10%] right-[-10%] h-96 w-96 rounded-full bg-cyan-400/10 blur-[130px]" />

        {/* Rotating Ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-32 top-[35%] h-72 w-72 rounded-full border-[14px] border-blue-100/40 sm:h-[420px] sm:w-[420px]"
        />

      </div>

      {/* =================================================
          GITHUB PROFILE BUTTON
      ================================================= */}

      <GithubFloatingButton />

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            HEADING
        ================================================= */}

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

          {/* Small Label */}

          <div className="flex items-center gap-3">

            <span className="h-[2px] w-8 bg-blue-600 sm:w-10" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 sm:text-sm">
              Selected Work
            </span>

          </div>

          {/* Heading + Description */}

          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl">

              Projects I've

              <br />

              <span className="text-blue-600">
                brought to life.
              </span>

            </h2>

            <p className="max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
              Scroll through a selection of products,
              experiments and digital experiences.
            </p>

          </div>

        </motion.div>

        {/* =================================================
            PROJECT SHOWCASE
        ================================================= */}

        <div className="relative mt-12">

          {/* Horizontal Scroll */}

          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 pt-4 sm:gap-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            {projects.map((project, index) => (

              <motion.article
                key={`${project.title}-${project.number}`}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  margin: "-50px",
                }}

                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}

                whileHover={{
                  y: -8,
                }}

                className="group w-[82vw] max-w-[420px] shrink-0 snap-center rounded-[24px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(37,99,235,0.15)] sm:w-[400px] sm:p-4 lg:w-[420px]"
              >

                {/* ================= PREVIEW ================= */}

                <BrowserPreview
                  project={project}
                  index={index}
                />

                {/* ================= DETAILS ================= */}

                <div className="px-1 pb-1 pt-5 sm:px-2">

                  {/* Category */}

                  <div className="flex items-center justify-between gap-3">

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">

                      {project.category}

                    </span>

                    <span className="font-mono text-[10px] font-bold text-slate-300">

                      {project.number}

                    </span>

                  </div>

                  {/* Title */}

                  <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">

                    {project.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-2 max-w-lg text-xs leading-5 text-slate-500 sm:text-sm">

                    {project.description}

                  </p>

                  {/* Tech */}

                  <div className="mt-4 flex flex-wrap gap-1.5">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-[9px] font-bold text-slate-600"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* ================= VIEW PROJECT ================= */}

                  <div className="mt-5">

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-[10px] font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/30"
                    >

                      View Project

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>

                    </a>

                  </div>

                </div>

                {/* ================= CARD ACCENT ================= */}

                <div
                  className={`mt-4 h-[3px] w-full rounded-full bg-gradient-to-r ${project.gradient} opacity-60 transition-all duration-500 group-hover:opacity-100`}
                />

              </motion.article>

            ))}

          </div>

          {/* =================================================
              SCROLL INDICATOR
          ================================================= */}

          <div className="mt-1 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-slate-200" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Swipe / Scroll
            </span>

            <span className="h-px w-10 bg-slate-200" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;