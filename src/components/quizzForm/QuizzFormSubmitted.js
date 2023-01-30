import React from "react";
import PropTypes from "prop-types";

const QuizzFormSubmitted = ({
  score,
  quizzFormData,
  setIsSubmitted,
  openContactForm,
}) => {
  return (
    <div className="quizzForm_submitted">
      <h2
        className={
          score === quizzFormData.goodAnswers.length
            ? "quizzForm_score--success"
            : "quizzForm_score--fail"
        }
      >
        SCORE : {score + "/" + quizzFormData.goodAnswers.length}
      </h2>

      {score === quizzFormData.goodAnswers.length
        ? quizzFormData.result.success.map((item, index) => (
            <p key={"text-result-" + index}>{item}</p>
          ))
        : quizzFormData.result.fail.map((item, index) => (
            <p key={"text-result-" + index}>{item}</p>
          ))}

      <div className="quizzForm_buttons">
        <button onClick={() => setIsSubmitted(false)}>
          {quizzFormData.result.buttons.retry}
        </button>
        <button onClick={() => openContactForm()}>
          {quizzFormData.result.buttons.contact}
        </button>
      </div>
    </div>
  );
};

QuizzFormSubmitted.propTypes = {
  score: PropTypes.number,
  quizzFormData: PropTypes.object,
  setIsSubmitted: PropTypes.func,
  openContactForm: PropTypes.func,
};

export default QuizzFormSubmitted;
