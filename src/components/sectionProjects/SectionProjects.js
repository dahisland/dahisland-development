import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareRight,
  faCaretSquareLeft,
} from "@fortawesome/free-solid-svg-icons";
import SectionProjectsFigure from "./SectionProjectsFigure";
import Features from "../features/Features";

const SectionProjects = React.forwardRef(({ data }, projectsRef) => {
  const [indexGallery, setIndexGallery] = useState(0);
  const [slide, setSlide] = useState(0);
  const dataGallery = data.gallery.sort(function (a, b) {
    return a.order - b.order;
  });

  function onClickLeft() {
    if (indexGallery !== 0) {
      setIndexGallery(indexGallery - 1);
    } else {
      setIndexGallery(dataGallery.length - 1);
    }
    setSlide(1);
  }

  function onClickRight() {
    if (indexGallery !== dataGallery.length - 1) {
      setIndexGallery(indexGallery + 1);
    } else {
      setIndexGallery(0);
    }
    setSlide(1);
  }

  return (
    <section id="sectionProjects" ref={projectsRef}>
      <div className="section_content">
        <h1>{data.title}</h1>
        <div className="sectionProjects_gallery">
          <FontAwesomeIcon
            icon={faCaretSquareLeft}
            className="projectsGallery_icons"
            onClick={onClickLeft}
          />

          <SectionProjectsFigure
            dataGallery={dataGallery}
            indexGallery={indexGallery}
            slide={slide}
            setSlide={setSlide}
          />

          <FontAwesomeIcon
            icon={faCaretSquareRight}
            className="projectsGallery_icons"
            onClick={onClickRight}
          />

          <div className="projectsGallery_counter">
            {indexGallery + 1 + "/" + dataGallery.length}
          </div>
        </div>
      </div>

      {/* <Features /> */}
    </section>
  );
});

SectionProjects.propTypes = {
  data: PropTypes.object,
};

export default SectionProjects;
