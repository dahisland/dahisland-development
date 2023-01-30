import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SectionAbout from "./sections/sectionAbout/SectionAbout";
import SectionProjects from "./sections/sectionProjects/SectionProjects";
import SectionSkills from "./sections/sectionSkills/SectionSkills";
import SectionCareer from "./sections/sectionCareer/SectionCareer";
import PageHeader from "./components/pageHeader/PageHeader";
import SwitchLanguage from "./components/switchLanguage/SwitchLanguage";
import BtnScrollToTop from "./components/btnScrollToTop/BtnScrollToTop";
import ContactForm from "./components/contactForm/ContactForm";
import QuizzForm from "./components/quizzForm/QuizzForm";
import { navData } from "./data/headerData";
import { aboutData } from "./data/aboutData";
import { projectsData } from "./data/projectsData";
import { careerData } from "./data/careerData";
import { skillsData } from "./data/skillsData";
import { ModaleFullscreen } from "modale-fullscreen-customizable";
import { contactFormData } from "./data/contactFormData";
import { quizzData } from "./data/quizzData";
import BackgroundAnim from "./components/backgroundAnim/BackgroundAnim";
import LadybirdAnim from "./components/ladybirdAnim/LadybirdAnim";

function App() {
  const [language, setLanguage] = useState("fr");
  const [positionScrollY, setPositionScrollY] = useState(1);
  const [contactModale, setContactModale] = useState(false);
  const [quizzModale, setQuizzModale] = useState(false);
  // State all sections heights
  const [sectionsHeight, setSectionsHeight] = useState({
    aboutSection: 0,
    projectsSection: 0,
    skillsSection: 0,
    careerSection: 0,
  });

  // Refs for each section
  const aboutRef = React.createRef();
  const projectsRef = React.createRef();
  const skillsRef = React.createRef();
  const careerRef = React.createRef();

  // Define position Y of each section to animate navigation class active on scroll
  useEffect(() => {
    // Initialize and round the scroll Y position to calculate sections zones on page
    setPositionScrollY(Math.round(window.scrollY) + 1);
    // Collect and round the scroll Y position while scrolling to calculate sections zones on page
    document.addEventListener("scroll", (e) => {
      setPositionScrollY(Math.round(window.scrollY) + 1);
    });
    // Collect and round the height of each section
    setSectionsHeight({
      aboutSection: Math.round(aboutRef.current.offsetHeight),
      projectsSection: Math.round(projectsRef.current.offsetHeight),
      skillsSection: Math.round(skillsRef.current.offsetHeight),
      careerSection: Math.round(careerRef.current.offsetHeight),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionScrollY]);

  return language === "fr" ? (
    <div className="page_container">
      <SwitchLanguage lang={language} setLanguage={() => setLanguage("en")} />

      <PageHeader
        data={navData.fr}
        positionScrollY={positionScrollY}
        setContactModale={setContactModale}
        sectionsHeight={sectionsHeight}
      />

      {positionScrollY > 3 ? <BtnScrollToTop /> : null}

      <main id="mainContent">
        <BackgroundAnim />
        <SectionAbout data={aboutData.fr} ref={aboutRef} />
        <SectionProjects data={projectsData.fr} ref={projectsRef} />
        <SectionSkills data={skillsData.fr} ref={skillsRef} />
        <SectionCareer data={careerData.fr} ref={careerRef} />
        <LadybirdAnim data="Clique-moi !" setQuizzModale={setQuizzModale} />
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

      {quizzModale ? (
        <ModaleFullscreen
          eventOnClickIcon={() => setQuizzModale(false)}
          modaleContent={
            <QuizzForm
              quizzFormData={quizzData.fr}
              setQuizzModale={setQuizzModale}
              setContactModale={setContactModale}
            />
          }
          modaleTitle={"ON JOUE ?"}
          modaleIcon={<FontAwesomeIcon icon={faTimesCircle} />}
          idInnerContainer="quizzModale_innerContainer"
          idModaleHeader="quizzModale_header"
          idModaleTitle="quizzModale_title"
          idModaleContent="quizzModale_content"
          idModaleIcon="quizzModale_icon"
        />
      ) : null}
    </div>
  ) : (
    <div className="page_container">
      <SwitchLanguage lang={language} setLanguage={() => setLanguage("fr")} />

      <PageHeader
        data={navData.en}
        positionScrollY={positionScrollY}
        setContactModale={setContactModale}
        sectionsHeight={sectionsHeight}
      />

      {positionScrollY > 3 ? <BtnScrollToTop /> : null}

      <main>
        <BackgroundAnim />
        <SectionAbout data={aboutData.en} ref={aboutRef} />
        <SectionProjects data={projectsData.en} ref={projectsRef} />
        <SectionSkills data={skillsData.en} ref={skillsRef} />
        <SectionCareer data={careerData.en} ref={careerRef} />
        <LadybirdAnim data="Clic me !" setQuizzModale={setQuizzModale} />
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

      {quizzModale ? (
        <ModaleFullscreen
          eventOnClickIcon={() => setQuizzModale(false)}
          modaleContent={
            <QuizzForm
              quizzFormData={quizzData.en}
              setQuizzModale={setQuizzModale}
              setContactModale={setContactModale}
            />
          }
          modaleTitle={"Let's play ?"}
          modaleIcon={<FontAwesomeIcon icon={faTimesCircle} />}
          idInnerContainer="quizzModale_innerContainer"
          idModaleHeader="quizzModale_header"
          idModaleTitle="quizzModale_title"
          idModaleContent="quizzModale_content"
          idModaleIcon="quizzModale_icon"
        />
      ) : null}
    </div>
  );
}

export default App;
