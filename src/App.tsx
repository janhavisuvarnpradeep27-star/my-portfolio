import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { ResearchProjects } from "./components/ResearchProjects";
import { SoftwareProjects } from "./components/SoftwareProjects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="pt-[57px]">
        <Hero />
        <About />
        <Skills />
        <ResearchProjects />
        <SoftwareProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
