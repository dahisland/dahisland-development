import React from "react";
import PropTypes from "prop-types";
import SectionAboutContent from "./SectionAboutContent";

const SectionAbout = React.forwardRef(({ data }, aboutRef) => {
  return (
    <section id="sectionAbout" ref={aboutRef}>
      <SectionAboutContent data={data} />
    </section>
  );
});

SectionAbout.propTypes = {
  data: PropTypes.object,
};

export default SectionAbout;
