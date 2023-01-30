import React, { useState } from "react";
import PropTypes from "prop-types";

const LadybirdAnim = ({ data, setQuizzModale }) => {
  const [ladybirdOnHover, setLadybirdOnHover] = useState(false);

  return (
    <div>
      <span
        id="ladybird_quizz"
        onMouseEnter={() => setLadybirdOnHover(true)}
        onMouseLeave={() => setLadybirdOnHover(false)}
        onClick={() => setQuizzModale(true)}
      ></span>
      <span
        className={
          ladybirdOnHover
            ? "ladybird_text ladybird_text--visible"
            : "ladybird_text ladybird_text--hidden"
        }
      >
        {data}
      </span>
    </div>
  );
};

LadybirdAnim.propTypes = {
  data: PropTypes.string,
  setQuizzModale: PropTypes.func,
};

export default LadybirdAnim;
