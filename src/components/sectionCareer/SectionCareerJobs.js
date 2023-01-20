import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { RiComputerFill } from "react-icons/ri";
import { MdSell } from "react-icons/md";
import { GiPopcorn, GiPencilBrush, GiSecretBook } from "react-icons/gi";
import { IoMdFilm } from "react-icons/io";
import { FaSmileBeam } from "react-icons/fa";

const SectionCareerJobs = ({ data }) => {
  const [isInView, setIsInView] = useState({
    pathLength: 0,
    strokeDasharray: "0px 1px",
  });

  const icons = [
    { link: RiComputerFill, id: "dev" },
    { link: GiSecretBook, id: "writer" },
    { link: IoMdFilm, id: "video" },
    { link: GiPencilBrush, id: "graphic" },
    { link: FaSmileBeam, id: "hello" },
    { link: GiPopcorn, id: "ugc" },
    { link: MdSell, id: "seller" },
  ];

  function iconFiltered(item) {
    const iconSelected = icons.filter((el) => el.id === item.iconId)[0];
    const Icon = iconSelected.link;
    return <Icon size="20px" />;
  }

  const transition = {
    ease: "easeInOut",
    duration: 4,
    yoyo: Infinity,
  };
  return (
    <div className="sectionCareerElements_jobs">
      <InView
        as="div"
        className={"elementsJobs_motionPath"}
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
        <svg width="100%" height="100%" viewBox="-25 0 200 350">
          <motion.path
            fill="transparent"
            strokeWidth="2"
            stroke="rgba(3, 62, 75, 0.2)"
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
            className="elementsJobs_motionDiv"
            variants={item.variant}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            data-descr={item.name}
          >
            {iconFiltered(item)}
          </motion.div>
        ))}
      </InView>
    </div>
  );
};

SectionCareerJobs.propTypes = {
  data: PropTypes.object,
};

export default SectionCareerJobs;
