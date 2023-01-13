import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SectionAbout from "./components/sectionAbout/SectionAbout";
import SectionProjects from "./components/sectionProjects/SectionProjects";
import SectionSkills from "./components/sectionSkills/SectionSkills";
import PageHeader from "./components/pageHeader/PageHeader";
import SwitchLanguage from "./components/switchLanguage/SwitchLanguage";
import SectionCareer from "./components/sectionCareer/SectionCareer";
import BtnScrollToTop from "./components/btnScrollToTop/BtnScrollToTop";
import ContactForm from "./components/contactForm/ContactForm";
import { navData } from "./data/headerData";
import { aboutData } from "./data/aboutData";
import { projectsData } from "./data/projectsData";
import { careerData } from "./data/careerData";
import { skillsData } from "./data/skillsData";
import { ModaleFullscreen } from "modale-fullscreen-customizable";
import { contactFormData } from "./data/contactFormData";

function App() {
  // const [pathLength, setPathLength] = useState(0);
  const [language, setLanguage] = useState("fr");
  const [positionScrollY, setPositionScrollY] = useState(0);
  const [contactModale, setContactModale] = useState(false);

  // Collect height of browser window to define zones of each section
  const windowHeight = window.innerHeight;

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setPositionScrollY(parseInt(window.scrollY));
    });
  }, [positionScrollY]);

  return language === "fr" ? (
    <div className="page_container">
      <SwitchLanguage lang={language} setLanguage={() => setLanguage("en")} />

      <PageHeader
        data={navData.fr}
        positionScrollY={positionScrollY}
        windowHeight={windowHeight}
        setContactModale={setContactModale}
      />

      {positionScrollY >= 1 ? <BtnScrollToTop /> : null}

      <main>
        <SectionAbout data={aboutData.fr} />
        <SectionProjects data={projectsData.fr} />
        <SectionSkills data={skillsData.fr} />
        <SectionCareer data={careerData.fr} />
      </main>

      {contactModale ? (
        <ModaleFullscreen
          eventOnClickIcon={() => setContactModale(false)}
          modaleContent={<ContactForm contactFormData={contactFormData.fr} />}
          modaleTitle={"CONTACTEZ-MOI"}
          modaleIcon={<FontAwesomeIcon icon={faTimesCircle} />}
          idInnerContainer="contactModale_innerContainer"
          idModaleHeader="contactModale_header"
          idModaleTitle="contactModale_title"
          idModaleContent="contactModale_content"
          idModaleIcon="contactModale_icon"
        />
      ) : null}
    </div>
  ) : (
    <div className="page_container">
      <SwitchLanguage lang={language} setLanguage={() => setLanguage("fr")} />

      <PageHeader
        data={navData.en}
        positionScrollY={positionScrollY}
        windowHeight={windowHeight}
        setContactModale={setContactModale}
      />

      {positionScrollY >= 1 ? <BtnScrollToTop /> : null}

      <main>
        <SectionAbout data={aboutData.en} />
        <SectionProjects data={projectsData.en} />
        <SectionSkills data={skillsData.en} />
        <SectionCareer data={careerData.en} />
      </main>

      {contactModale ? (
        <ModaleFullscreen
          eventOnClickIcon={() => setContactModale(false)}
          modaleContent={<ContactForm contactFormData={contactFormData.en} />}
          modaleTitle={"CONTACT ME"}
          modaleIcon={<FontAwesomeIcon icon={faTimesCircle} />}
          idInnerContainer="contactModale_innerContainer"
          idModaleHeader="contactModale_header"
          idModaleTitle="contactModale_title"
          idModaleContent="contactModale_content"
          idModaleIcon="contactModale_icon"
        />
      ) : null}
    </div>
  );
}

export default App;
