import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import QuizzFormSubmitted from "./QuizzFormSubmitted";

const QuizzForm = ({ quizzFormData, setQuizzModale, setContactModale }) => {
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function submitQuizz(data) {
    const arrayData = [data.Q1, data.Q2, data.Q3];
    let result = 0;
    for (let i = 0; i < arrayData.length; i++) {
      if (arrayData[i] === quizzFormData.goodAnswers[i]) {
        result = result + 1;
      }
    }
    setScore(result);
    setIsSubmitted(true);
    reset();
  }

  function openContactForm() {
    setQuizzModale(false);
    setContactModale(true);
  }

  return isSubmitted ? (
    <QuizzFormSubmitted
      score={score}
      quizzFormData={quizzFormData}
      setIsSubmitted={setIsSubmitted}
      openContactForm={openContactForm}
    />
  ) : (
    <div className="quizz_form">
      <div className="quizzForm_intro">
        {quizzFormData.intro.map((item, index) => (
          <p key={"quizz-intro-" + index}>{item}</p>
        ))}
      </div>

      <form onSubmit={handleSubmit(submitQuizz)}>
        {quizzFormData.form.map((item) => (
          <div className="quizzForm_block" key={item.name}>
            <p className="quizzFormBlock_question">{item.question}</p>
            <div className="quizzFormBlock_propositions">
              <div className="propositions_radio">
                <label htmlFor={item.radio[0].id}>{item.radio[0].value}</label>
                <input
                  type="radio"
                  id={item.radio[0].id}
                  name={item.name}
                  value={item.radio[0].value}
                  {...register(item.name, {
                    required: quizzFormData.required,
                  })}
                />
              </div>
              {item.radio.slice(1).map((el) => (
                <div className="propositions_radio" key={el.id}>
                  <label htmlFor={el.id}>{el.value}</label>
                  <input
                    type="radio"
                    id={el.id}
                    name={item.name}
                    value={el.value}
                    {...register(item.name)}
                  />
                </div>
              ))}
            </div>
            <p className="input-error-message">
              <ErrorMessage errors={errors} name={item.name} />
            </p>
          </div>
        ))}

        <div className="quizzForm_buttons">
          <input
            type="submit"
            value={quizzFormData.result.buttons.submit}
            id="input-quizz-submit"
          />
        </div>
      </form>
    </div>
  );
};

QuizzForm.propTypes = {
  quizzFormData: PropTypes.object,
  setQuizzModale: PropTypes.func,
  setContactModale: PropTypes.func,
};

export default QuizzForm;
