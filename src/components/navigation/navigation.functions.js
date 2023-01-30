// This function change class of an navigation element when section content is active.
// it use the scroll Y position, the section position in the page calculated with the height of each section
// To collect height of each section, a useState is updated in  the useEffect of component App.
export function toggleActiveClass(item, positionScrollY, sectionsHeight) {
  let classLink = "navLink";
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
