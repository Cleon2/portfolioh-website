import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Footer from "./components/footer";
import About from "./components/about";
import Experience from "./components/experience";
import NavBar from "./components/navbar";
import { useRef } from "react";
import Certifications from "./components/certifications";

function App() {
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const PortfolioRef = useRef(null);
  const ExperienceRef = useRef(null);
  const CertificateRef = useRef(null);

  return (
    <div className="App ">
      <NavBar
        About={AboutRef}
        Skills={SkillsRef}
        Portfolio={PortfolioRef}
        Experience={ExperienceRef}
        Certificates={CertificateRef}
      />
      <Intro />
      <About aboutRef={AboutRef} />
      <Skills skillsRef={SkillsRef} />
      <Portfolio portfolioRef={PortfolioRef} />
      <Experience experienceRef={ExperienceRef} />
      <Certifications certificateRef={CertificateRef} />
    </div>
  );
}

export default App;
