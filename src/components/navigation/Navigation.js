import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { toggleActiveClass } from "./navigation.functions";

const Navigation = ({ data, positionScrollY, sectionsHeight }) => {
  return (
    <nav className="header_navigation">
      <ul className="navigation_navLinks">
        {data.map((item) => (
          <li key={item.name + item.position}>
            <Link
              to={item.linkTo}
              smooth={true}
              duration={400}
              className={
                sectionsHeight
                  ? toggleActiveClass(
                      item.linkTo,
                      positionScrollY,
                      sectionsHeight
                    )
                  : null
              }
              // className="navLink"
              // activeClass="navLink--active"
              // spy={true}
              // isDynamic={true}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  data: PropTypes.array,
  positionScrollY: PropTypes.number,
};

export default Navigation;
