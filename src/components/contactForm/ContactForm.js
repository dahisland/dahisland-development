import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const ContactForm = ({ contactFormData }) => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [messageOnSubmit, setMessageOnSubmit] = useState(["", "", ""]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio_contact_serv",
        "portfolio_template",
        form.current,
        "hKsFEzZK52j-U3vSr"
      )
      .then(
        (result) => {
          setMessageOnSubmit([contactFormData.submitSuccess, "", ""]);
          setSubmitted(true);
          console.log(result);
          e.target.reset();
        },
        (error) => {
          setMessageOnSubmit([
            contactFormData.submitError,
            `Erreur : ${error.text}`,
            "error",
          ]);
          setSubmitted(true);
          console.log(error.text);
        }
      );
  };

  return submitted === false ? (
    <form className="contact_form" ref={form} onSubmit={sendEmail}>
      {contactFormData.inputs.map((item) => (
        <div className="contactForm_block" key={item.name}>
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            id={item.name}
            required
          />
        </div>
      ))}

      <div className="contactForm_block">
        <label htmlFor={contactFormData.textarea.name}>
          {contactFormData.textarea.label}
        </label>
        <textarea
          type={contactFormData.textarea.type}
          placeholder={contactFormData.textarea.placeholder}
          name={contactFormData.textarea.name}
          id={contactFormData.textarea.name}
          maxLength={contactFormData.textarea.maxlength}
        ></textarea>
      </div>
      <input type="submit" value="Submit" id="input-submit" />
    </form>
  ) : (
    <div
      className={
        messageOnSubmit[2] === "error"
          ? "contactForm_submitted--error"
          : "contactForm_submitted"
      }
    >
      <p>
        {messageOnSubmit[0]}
        <br />
        <span>{messageOnSubmit[1]}</span>
      </p>
      <button onClick={() => setSubmitted(false)}>
        {contactFormData.previousBtn}
      </button>
    </div>
  );
};

ContactForm.propTypes = {
  contactFormData: PropTypes.object,
};

export default ContactForm;
