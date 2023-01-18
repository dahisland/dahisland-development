import React from "react";
import PropTypes from "prop-types";

const SwitchLanguage = ({ lang, setLanguage }) => {
  return (
    <div className="switch_language">
      <div className={"switch_language--" + lang} onClick={setLanguage}></div>
    </div>
  );
};

SwitchLanguage.propTypes = {
  lang: PropTypes.string,
  setLanguage: PropTypes.func,
};

export default SwitchLanguage;
