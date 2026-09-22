import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import PawGuardian from "./components/PawGuardian";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar/>
      <Hero />
      <PawGuardian/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;