import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SectionProjectsFigcaption = ({ dataGallery, indexGallery }) => {
  const initRandomClasses = ["", "", "", "", "", "", "", ""];
  const [randomClassesTags, setRandomClassesTags] = useState(initRandomClasses);
  const classesTags = [
    "galleryCaption_tags--purple",
    "galleryCaption_tags--purple-fill",
    "galleryCaption_tags--white",
    "galleryCaption_tags--white-fill",
    "galleryCaption_tags--blue",
    "galleryCaption_tags--blue-fill",
    "galleryCaption_tags--gold-fill",
    "galleryCaption_tags--gold",
  ];

  useEffect(() => {
    let randomizedClasses = [];
    for (let i = 0; i < classesTags.length; i++) {
      const randomIndex = Math.floor(Math.random() * classesTags.length);
      randomizedClasses[i] = classesTags[randomIndex];
    }
    setRandomClassesTags(randomizedClasses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexGallery]);

  return (
    <figcaption className="projectsGallery_caption">
      <div className="galleryCaption_description">
        <h2>{dataGallery[indexGallery].name}</h2>
        {dataGallery[indexGallery].tags.map((item, index) => (
          <span
            key={dataGallery[indexGallery].name + item}
            className={
              "galleryCaption_tags" +
              " " +
              randomClassesTags[
                index !== 0 && index < randomClassesTags.length
                  ? index
                  : index > 10
                  ? index[1]
                  : parseInt(index / 2)
              ]
            }
          >
            {item.toUpperCase()}
          </span>
        ))}
      </div>
      <div className="galleryCaption_links">
        <a
          href={dataGallery[indexGallery].github}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href={dataGallery[indexGallery].view}
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
      </div>
    </figcaption>
  );
};

SectionProjectsFigcaption.propTypes = {
  dataGallery: PropTypes.array,
  indexGallery: PropTypes.number,
};

export default SectionProjectsFigcaption;
