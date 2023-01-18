export function toggleActiveClass(item, positionScrollY, sectionsHeight) {
  let classLink = "navLink";
  console.log(positionScrollY);
  console.log(sectionsHeight);

  switch (item) {
    case "sectionAbout":
      if (
        positionScrollY >= 0 &&
        positionScrollY < sectionsHeight.aboutSection
      ) {
        classLink = "navLink--active";
      } else {
        classLink = "navLink";
      }
      break;
    case "sectionProjects":
      if (
        positionScrollY >= sectionsHeight.aboutSection &&
        positionScrollY <
          sectionsHeight.aboutSection + sectionsHeight.projectsSection
      ) {
        classLink = "navLink--active";
      } else {
        classLink = "navLink";
      }
      break;
    case "sectionSkills":
      if (
        positionScrollY >=
          sectionsHeight.aboutSection + sectionsHeight.projectsSection &&
        positionScrollY <
          sectionsHeight.aboutSection +
            sectionsHeight.projectsSection +
            sectionsHeight.skillsSection
      ) {
        classLink = "navLink--active";
      } else {
        classLink = "navLink";
      }
      break;
    case "sectionCareer":
      if (
        positionScrollY >=
          sectionsHeight.aboutSection +
            sectionsHeight.projectsSection +
            sectionsHeight.skillsSection &&
        positionScrollY <
          sectionsHeight.aboutSection +
            sectionsHeight.projectsSection +
            sectionsHeight.skillsSection +
            sectionsHeight.careerSection
      ) {
        classLink = "navLink--active";
      } else {
        classLink = "navLink";
      }
      break;
    default:
      classLink = "navLink";
  }
  return classLink;
}

// export const toggleActiveClass = (item) =>
//   positionScrollY + item.position >=
//     windowHeight * item.position - windowHeight &&
//   positionScrollY + item.position < windowHeight * item.position
//     ? "navLink--active"
//     : "navLink";
