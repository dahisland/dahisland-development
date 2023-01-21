import React from "react";
import PropTypes from "prop-types";

const SectionAboutContent = ({ data }) => {
  return (
    <div className="section_content">
      <h1>{data.title}</h1>
      <div className="sectionAbout_presentation">
        <div className="sectionAboutPresentation_txt">
          {data.content.map((item, index) => (
            <p key={data.key + index}>{item}</p>
          ))}
        </div>
        <div className="sectionAboutPresentation_img"></div>
      </div>
    </div>
  );
};

SectionAboutContent.propTypes = {
  data: PropTypes.object,
};

export default SectionAboutContent;
