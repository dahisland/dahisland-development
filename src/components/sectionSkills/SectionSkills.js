import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiNodedotjs,
  SiJest,
  SiRedux,
  SiLighthouse,
  SiNotion,
  SiAdobephotoshop,
  SiGithub,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";
import { RiStarSFill, RiStarSLine, RiStarHalfSFill } from "react-icons/ri";

const SectionSkills = React.forwardRef(({ data }, skillsRef) => {
  const range = [1, 2, 3, 4, 5];

  const icons = [
    { link: SiHtml5, id: "html5", color: "#f22601" },
    { link: SiCss3, id: "css3", color: "#2aaadf" },
    { link: SiJavascript, id: "js", color: "#fed73c" },
    { link: SiReact, id: "react", color: "#00d8ff" },
    { link: SiFigma, id: "figma", color: "#ff7261" },
    { link: SiNodedotjs, id: "node", color: "#91c640" },
    { link: IoLogoNpm, id: "npm", color: "#cd3939" },
    { link: SiJest, id: "jest", color: "white" },
    { link: SiRedux, id: "redux", color: "#ab77ff" },
    { link: SiLighthouse, id: "lighthouse", color: "#339fd6" },
    { link: SiNotion, id: "notion", color: "white" },
    { link: SiAdobephotoshop, id: "photoshop", color: "#9BD2FB" },
    { link: SiGithub, id: "git", color: "white" },
    { link: SiAdobeaftereffects, id: "ae", color: "#9998fe" },
    { link: SiAdobepremierepro, id: "premiere", color: "#dc56fd" },
  ];

  function iconFiltered(item) {
    const iconSelected = icons.filter((el) => el.id === item.id)[0];
    const Icon = iconSelected.link;
    return <Icon style={{ color: iconSelected.color }} size="36px" />;
  }

  const skillContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.6,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const skillItem = {
    hidden: { y: 50, opacity: 0, rotate: 20, scale: 0 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        ease: "easeIn",
      },
    },
  };

  return (
    <section id="sectionSkills" ref={skillsRef}>
      <div className="section_content">
        <h1>{data.title}</h1>

        <motion.ul
          variants={skillContainer}
          className="sectionSkills_skillsContainer"
          initial="hidden"
          whileInView="visible"
        >
          {data.skills.map((item) => (
            <motion.li
              variants={skillItem}
              className={"skillsContainer_item"}
              key={item.name}
            >
              <span className="skillsItem_name">{iconFiltered(item)}</span>
              <span className="skillsItem_range">
                <span>{item.name}</span>
                <span>
                  {range.map((level) =>
                    level <= item.level ? (
                      <RiStarSFill
                        size="18px"
                        style={{ color: "#09d6dd" }}
                        key={item.name + "range" + level}
                      />
                    ) : level - 1 < item.level ? (
                      <RiStarHalfSFill
                        size="18px"
                        style={{ color: "#09d6dd" }}
                        key={item.name + "range" + level}
                      />
                    ) : (
                      <RiStarSLine
                        size="18px"
                        style={{ color: "#09d6dd" }}
                        key={item.name + "range" + level}
                      />
                    )
                  )}
                </span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="section_feature"></div>
    </section>
  );
});

SectionSkills.propTypes = {
  data: PropTypes.object,
};

export default SectionSkills;