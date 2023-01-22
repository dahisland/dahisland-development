import React from "react";
import PropTypes from "prop-types";
import SectionAboutContent from "./SectionAboutContent";
import Features from "../features/Features";

const SectionAbout = React.forwardRef(({ data }, aboutRef) => {
  return (
    <section id="sectionAbout" ref={aboutRef}>
      <SectionAboutContent data={data} />
      {/* <Features /> */}
    </section>
  );
});

SectionAbout.propTypes = {
  data: PropTypes.object,
};

export default SectionAbout;
