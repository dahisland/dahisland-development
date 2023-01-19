import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const SectionCareer = React.forwardRef(({ data }, careerRef) => {
  const transition = {
    ease: "easeInOut",
    duration: 4,
    yoyo: Infinity,
  };
  const [isInView, setIsInView] = useState({
    pathLength: 0,
    strokeDasharray: "0px 1px",
  });

  return (
    <section id="sectionCareer" ref={careerRef}>
      <div className="section_content">
        <h1>{data.title}</h1>
        <div className={"sectionCareer_elements"}>
          <InView
            as="div"
            className={"sectionCareerElements_motionPath"}
            onChange={(inView) => {
              inView
                ? setIsInView({
                    pathLength: 1,
                  })
                : setIsInView({
                    pathLength: 0,
                  });
            }}
            root={null}
            rootMargin="0px"
          >
            <svg width="100%" height="100%" viewBox="0 0 200 350">
              <motion.path
                fill="transparent"
                strokeWidth="1"
                stroke="green"
                strokeLinecap="round"
                pathLength="0"
                d="M 81.105 14.599 C 135.716 34.064 31.361 52.448 71.913 94.082 C 173.566 193.572 58.937 202.764 46.5 242.775 C 35.146 284.41 81.646 302.253 77.32 320.637"
                initial={{ pathLength: 0 }}
                animate={isInView}
                transition={transition}
              />
            </svg>
            {data.jobs.map((item) => (
              <motion.div
                key={"motionEl-" + item.name}
                className="sectionCareer_motionDiv"
                variants={item.variant}
                initial="hidden"
                whileInView="visible"
              >
                {item.name}
              </motion.div>
            ))}
          </InView>
        </div>
      </div>
      <div className="section_feature"></div>
    </section>
  );
});

SectionCareer.propTypes = {
  data: PropTypes.object,
};

export default SectionCareer;
