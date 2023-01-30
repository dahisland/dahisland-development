import React from "react";
import PropTypes from "prop-types";
import imgProfile from "../../assets/profile.jpg";

const SectionAboutContent = ({ data }) => {
  return (
    <div className="section_content">
      <h1>{data.title}</h1>
      <div className="sectionAbout_presentation">
        <div className="sectionAboutPresentation_txt">
          <div className="sectionAboutPresentation_img">
            <img src={imgProfile} alt="profile"></img>
          </div>
          {data.content.map((item, index) => (
            <p key={data.key + index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

SectionAboutContent.propTypes = {
  data: PropTypes.object,
};

export default SectionAboutContent;
