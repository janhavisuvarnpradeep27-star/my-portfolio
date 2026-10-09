import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { ResearchProjects } from "./components/ResearchProjects";
import { SoftwareProjects } from "./components/SoftwareProjects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";
import videoUrl from "./hooks/animo-card-tunnel-720p.mp4";

function App() {
  return (
    <>
      <div className="site-backdrop" aria-hidden="true">
        <video
          className="site-backdrop__video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source
            src={videoUrl}
            type="video/mp4"
          />
        </video>
        <div className="site-backdrop__veil" />
        <div className="site-backdrop__grid" />
      </div>
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
