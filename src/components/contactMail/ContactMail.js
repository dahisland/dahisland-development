import React from "react";
import PropTypes from "prop-types";

const ContactMail = ({ setContactModale }) => {
  return (
    <span className="contact_mail" onClick={() => setContactModale(true)}>
      <svg viewBox="0 0 464.01 297.96" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1645.28,1149.51h208.43c15.77,0,23.29,7.48,23.29,23.17q0,126,0,251.92c0,15.17-7.57,22.86-22.6,22.86H1435.54c-14.78,0-22.54-7.73-22.54-22.42q0-126.46,0-252.92c0-14.95,7.78-22.62,22.85-22.62h209.43Zm-219.39,12.78c-3.62,3-3.12,6.59-3.12,10q0,126,0,252c0,10.52,2.82,13.36,13.26,13.36H1696.5q79.49,0,159,0c8,0,11.72-3.34,11.72-10.87q0.06-128.24,0-256.48c0-2.24.16-4.6-2.17-6.76-3,9.24-10.33,14.69-16.61,21q-91.32,91.46-182.75,182.8c-13.4,13.4-27,13.38-40.42-.05L1438.6,1180.6C1433.31,1175.31,1427.46,1170.44,1425.9,1162.29Z"
          transform="translate(-1413 -1149.5)"
        />
      </svg>
      <span>@</span>
    </span>
  );
};

ContactMail.propTypes = {
  setContactModale: PropTypes.func,
};

export default ContactMail;
