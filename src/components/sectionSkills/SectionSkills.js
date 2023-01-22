import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { skillContainer, skillItem } from "./sectionSkills.variants";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiJest,
  SiRedux,
  SiLighthouse,
  SiNotion,
  SiAdobephotoshop,
  SiGithub,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiFramer,
  SiVisualstudio,
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
    { link: SiFramer, id: "framer", color: "white" },
    { link: IoLogoNpm, id: "npm", color: "#cd3939" },
    { link: SiJest, id: "jest", color: "white" },
    { link: SiRedux, id: "redux", color: "#ab77ff" },
    { link: SiLighthouse, id: "lighthouse", color: "#339fd6" },
    { link: SiNotion, id: "notion", color: "white" },
    { link: SiAdobephotoshop, id: "photoshop", color: "#9BD2FB" },
    { link: SiGithub, id: "git", color: "white" },
    { link: SiAdobeaftereffects, id: "ae", color: "#9998fe" },
    { link: SiAdobepremierepro, id: "premiere", color: "#dc56fd" },
    { link: SiVisualstudio, id: "vscode", color: "#2d9eea" },
  ];

  function iconFiltered(item) {
    const iconSelected = icons.filter((el) => el.id === item.id)[0];
    const Icon = iconSelected.link;
    return <Icon style={{ color: iconSelected.color }} size="36px" />;
  }

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
                        style={{ color: "#0EBBF1" }}
                        key={item.name + "range" + level}
                      />
                    ) : level - 1 < item.level ? (
                      <RiStarHalfSFill
                        size="18px"
                        style={{ color: "#0EBBF1" }}
                        key={item.name + "range" + level}
                      />
                    ) : (
                      <RiStarSLine
                        size="18px"
                        style={{ color: "#0EBBF1" }}
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
    </section>
  );
});

SectionSkills.propTypes = {
  data: PropTypes.object,
};

export default SectionSkills;
