import React from "react";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import ContactMail from "../contactMail/ContactMail";
import Navigation from "../navigation/Navigation";
import SocialMedias from "../socialMedias/SocialMedias";

const PageHeader = ({
  data,
  positionScrollY,
  setContactModale,
  sectionsHeight,
}) => {
  return (
    <header>
      <div className="header_logo">
        <figure>
          <img
            src={logo}
            alt="logo"
            className="headerLogo_img"
            onClick={() => window.location.reload(false)}
          ></img>
          <figcaption>
            <h1 className="headerLogo_title">
              DAHISLAND
              <span> DEVELOPMENT </span>
            </h1>
          </figcaption>
        </figure>
      </div>

      <div className="header_navContacts">
        <Navigation
          data={data}
          positionScrollY={positionScrollY}
          sectionsHeight={sectionsHeight}
        />
        <div className="header_contact">
          <ContactMail setContactModale={setContactModale} />
          <SocialMedias />
        </div>
        <p className="header_copyright">©2023 Myriam Mornet</p>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  data: PropTypes.array,
  positionScrollY: PropTypes.number,
  setContactModale: PropTypes.func,
};

export default PageHeader;
