import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { classesTags } from "./sectionprojects.images";

const SectionProjectsFigcaption = ({ dataGallery, indexGallery }) => {
  const initRandomClasses = ["", "", "", "", "", "", "", ""];
  const [randomClassesTags, setRandomClassesTags] = useState(initRandomClasses);

  // Change class of each tag each time user navigate on gallery by an random class in a class list
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
      <div className="galleryCaption_header">
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
        {dataGallery[indexGallery].links.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={dataGallery[indexGallery].name + "-" + item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
    </figcaption>
  );
};

SectionProjectsFigcaption.propTypes = {
  dataGallery: PropTypes.array,
  indexGallery: PropTypes.number,
};

export default SectionProjectsFigcaption;
