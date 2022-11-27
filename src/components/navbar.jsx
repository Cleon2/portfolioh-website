import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

function NavBar({ About, Skills, Portfolio, Experience, Certificates }) {
  const [isOpen, setOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [skillsHover, setSkillsHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [experienceHover, setExperienceHover] = useState(false);
  const [certificationsHover, setCertificationsHover] = useState(false);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className=" mt-10 mx-10 md:mx-20 flex flex-row justify-between">
        <span className="text-xl font-bold">Cleon Tan</span>
        <span className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            className="cursor-pointer"
          />
        </span>
        <ul className="mx-10 text-gray-500 flex flex-row items-baseline justify-evenly w-96 hidden md:flex">
          <li
            className={
              aboutHover ? "underline cursor-pointer" : "cursor-pointer"
            }
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
            onClick={() => scrollToSection(About)}
          >
            About
          </li>
          <li
            className={
              skillsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setSkillsHover(true)}
            onMouseLeave={() => setSkillsHover(false)}
            onClick={() => scrollToSection(Skills)}
          >
            Skills
          </li>
          <li
            className={
              projectsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setProjectsHover(true)}
            onMouseLeave={() => setProjectsHover(false)}
            onClick={() => scrollToSection(Portfolio)}
          >
            Projects
          </li>
          <li
            className={
              experienceHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setExperienceHover(true)}
            onMouseLeave={() => setExperienceHover(false)}
            onClick={() => scrollToSection(Experience)}
          >
            Experience
          </li>
          <li
            className={
              certificationsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setCertificationsHover(true)}
            onMouseLeave={() => setCertificationsHover(false)}
            onClick={() => scrollToSection(Certificates)}
          >
            Certifications
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="mx-10 md:invisible text-gray-500">
          <li
            className={
              aboutHover ? "underline cursor-pointer" : "cursor-pointer"
            }
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
            onClick={() => scrollToSection(About)}
          >
            About
          </li>
          <li
            className={
              skillsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setSkillsHover(true)}
            onMouseLeave={() => setSkillsHover(false)}
            onClick={() => scrollToSection(Skills)}
          >
            Skills
          </li>
          <li
            className={
              projectsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setProjectsHover(true)}
            onMouseLeave={() => setProjectsHover(false)}
            onClick={() => scrollToSection(Portfolio)}
          >
            Projects
          </li>
          <li
            className={
              experienceHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setExperienceHover(true)}
            onMouseLeave={() => setExperienceHover(false)}
            onClick={() => scrollToSection(Experience)}
          >
            Experience
          </li>
          <li
            className={
              certificationsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setCertificationsHover(true)}
            onMouseLeave={() => setCertificationsHover(false)}
            onClick={() => scrollToSection(Certificates)}
          >
            Certifications
          </li>
        </ul>
      )}
    </>
  );
}

export default NavBar;
