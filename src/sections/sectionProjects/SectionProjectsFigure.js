import React from "react";
import PropTypes from "prop-types";
import SectionProjectsFigcaption from "./SectionProjectsFigcaption";
import { imagesProjects } from "./sectionprojects.images";

const SectionProjectsFigure = ({
  dataGallery,
  indexGallery,
  slide,
  setSlide,
}) => {
  // Filter image to display when user navigate on gallery
  function filterImgUrl(item) {
    const image = imagesProjects.filter((el) => el.imgId === item.imgId)[0];
    return image.url;
  }

  return (
    <figure
      className={`projectsGallery_container`}
      slide={slide}
      onAnimationEnd={() => setSlide(0)}
    >
      <picture
        className="projectsGallery_picture"
        data-description={dataGallery[indexGallery].description}
      >
        <img
          src={filterImgUrl(dataGallery[indexGallery])}
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
