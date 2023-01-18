import React from "react";
import PropTypes from "prop-types";

const SectionCareer = React.forwardRef(({ data }, careerRef) => {
  return (
    <section id="sectionCareer" ref={careerRef}>
      <div className="section_content">
        <h1>{data.title}</h1>
      </div>
      <div className="section_feature"></div>
    </section>
  );
});

SectionCareer.propTypes = {
  data: PropTypes.object,
};

export default SectionCareer;
