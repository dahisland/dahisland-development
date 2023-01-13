import React from "react";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import ContactMail from "../contactMail/ContactMail";
import Navigation from "../navigation/Navigation";
import SocialMedias from "../socialMedias/SocialMedias";

const PageHeader = ({
  data,
  positionScrollY,
  windowHeight,
  setContactModale,
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

      <Navigation
        data={data}
        positionScrollY={positionScrollY}
        windowHeight={windowHeight}
      />

      <div className="header_contact">
        <ContactMail setContactModale={setContactModale} />
        <SocialMedias />
      </div>

      <p className="header_copyright">©2022 Myriam Mornet</p>
    </header>
  );
};

PageHeader.propTypes = {
  data: PropTypes.array,
  positionScrollY: PropTypes.number,
  windowHeight: PropTypes.number,
  setContactModale: PropTypes.func,
};

export default PageHeader;
