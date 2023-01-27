import React, { useState, useRef, useEffect } from "react";

const SliderOldProjects = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [isOnHover, setIsOnHover] = useState(false);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function slider() {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.oldProjects.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );
    return () => {
      resetTimeout();
    };
  }

  useEffect(() => {
    if (isOnHover === false) {
      slider();
    } else {
      resetTimeout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isOnHover]);

  return (
    <div className="sectionCareerElements_oldProjects">
      <div className="oldProjects_innerContainer--border">
        <div
          className="oldProjects_innerContainer"
          style={{
            transform: `translate(${-index * 100}%)`,
            transition: "ease-in-out 2000ms",
          }}
        >
          {data.oldProjects.map((item) => (
            <figure
              key={"oldProject-img-" + item.imgId}
              className="oldProjects_element"
              onMouseEnter={() => setIsOnHover(true)}
              onMouseLeave={() => setIsOnHover(false)}
            >
              <img src={item.imgLink} alt=""></img>
              <figcaption className="oldProjects_elementCaption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={item.link}
                  alt=""
                  target="_blank"
                  rel="noreferrer"
                  className="elementCaption_linkTxt"
                >
                  {item.linkTxt}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="oldProjects_innerLegend">
        <h2>{data.titleOldProjects.toUpperCase()}</h2>
        <div className="oldProjects_iconsContainer">
          {data.oldProjects.map((item, idx) => (
            <div
              key={"oldProject-icon-" + item.imgId}
              onClick={() => setIndex(idx)}
              className={
                index === idx ? "oldProjects_icon--active" : "oldProjects_icon"
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderOldProjects;
