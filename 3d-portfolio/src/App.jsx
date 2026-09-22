import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PawGuardian from "./components/PawGuardian";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import PawGuardianPage from "./pages/PawGuardianPage";

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

      <Loader />

      <Navbar />
      <Hero />
      <PawGuardian />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </main>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Main Portfolio */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PawGuardian Dedicated Page */}
        <Route
          path="/pawguardian"
          element={<PawGuardianPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;