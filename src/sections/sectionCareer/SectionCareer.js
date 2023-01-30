import React from "react";
import PropTypes from "prop-types";
import SectionCareerJobs from "./SectionCareerJobs";
import SliderOldProjects from "../../components/sliderOldProjects/SliderOldProjects";

const SectionCareer = React.forwardRef(({ data }, careerRef) => {
  return (
    <section id="sectionCareer" ref={careerRef}>
      <div className="section_content">
        <h1>{data.title}</h1>
        <div className="sectionCareer_formation">
          {data.formation.map((item, index) => (
            <p key={"formation-item-" + index}>{item.toUpperCase()}</p>
          ))}
        </div>
        <div className={"sectionCareer_elements"}>
          <SectionCareerJobs data={data} />
          <SliderOldProjects data={data} />
        </div>
      </div>
    </section>
  );
});

SectionCareer.propTypes = {
  data: PropTypes.object,
};

export default SectionCareer;
