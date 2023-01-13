import React from "react";
import PropTypes from "prop-types";
import SectionProjectsFigcaption from "./SectionProjectsFigcaption";

const SectionProjectsFigure = ({
  dataGallery,
  indexGallery,
  slide,
  setSlide,
}) => {
  return (
    <figure
      className={`projectsGallery_container`}
      slide={slide}
      onAnimationEnd={() => setSlide(0)}
    >
      <picture className="projectsGallery_picture">
        <img
          src={process.env.PUBLIC_URL + "/img/" + dataGallery[indexGallery].url}
          alt={dataGallery[indexGallery].name}
        />
      </picture>
      <SectionProjectsFigcaption
        dataGallery={dataGallery}
        indexGallery={indexGallery}
      />
    </figure>
  );
};

SectionProjectsFigure.propTypes = {
  dataGallery: PropTypes.array,
  indexGallery: PropTypes.number,
  setSlide: PropTypes.func,
  slide: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SectionProjectsFigure;
