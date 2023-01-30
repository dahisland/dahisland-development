import React from "react";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const BtnScrollToTop = () => {
  // Event on click for button scroll to top
  const goToTopOnclick = (e) => {
    animateScroll.scrollToTop();
    e.target.classList.add("btn_goToTop--hide");
  };

  return (
    <button className="btn_goToTop" onClick={(e) => goToTopOnclick(e)}>
      <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>
    </button>
  );
};

export default BtnScrollToTop;
