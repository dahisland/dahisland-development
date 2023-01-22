import React from "react";
import PropTypes from "prop-types";
import SectionCareerJobs from "./SectionCareerJobs";

const SectionCareer = React.forwardRef(({ data }, careerRef) => {
  return (
    <section id="sectionCareer" ref={careerRef}>
      <div className="section_content">
        <h1>{data.title}</h1>
        <div className={"sectionCareer_elements"}>
          <SectionCareerJobs data={data} />
          <div className="sectionCareerElements_pastWork"></div>
        </div>
      </div>
    </section>
  );
});

SectionCareer.propTypes = {
  data: PropTypes.object,
};

export default SectionCareer;
