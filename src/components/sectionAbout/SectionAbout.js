import React from "react";
import PropTypes from "prop-types";
import SectionAboutContent from "./SectionAboutContent";

const SectionAbout = React.forwardRef(({ data }, aboutRef) => {
  return (
    <section id="sectionAbout" ref={aboutRef}>
      <SectionAboutContent data={data} />

      <div className="section_feature"></div>
      {/* <div className="ladybird_container"></div> */}
      {/* <div className="ladybird_animation">
        <div className="ladybird"></div>
      </div> */}
    </section>
  );
});

SectionAbout.propTypes = {
  data: PropTypes.object,
};

export default SectionAbout;
