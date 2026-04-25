import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"} role="banner">
        <a href="/" className="logo" title="Sunny Keshri - Portfolio Home">
          <span className="grey-color" aria-hidden="true">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color" aria-hidden="true">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" aria-label="Toggle navigation menu" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label="Menu"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <nav>
          <ul className={isDark ? "dark-menu menu" : "menu"} role="navigation">
            {viewSkills && (
              <li>
                <a href="#skills" title="View my technical skills">Skills</a>
              </li>
            )}
            {viewExperience && (
              <li>
                <a href="#experience" title="View my work experience">Work Experiences</a>
              </li>
            )}
            {viewOpenSource && (
              <li>
                <a href="#opensource" title="View my open source projects">Open Source</a>
              </li>
            )}
            {viewAchievement && (
              <li>
                <a href="#achievements" title="View my achievements">Achievements</a>
              </li>
            )}
            {viewBlog && (
              <li>
                <a href="#blogs" title="Read my blog posts">Blogs</a>
              </li>
            )}
            {viewTalks && (
              <li>
                <a href="#talks" title="View my talks and presentations">Talks</a>
              </li>
            )}
            {viewResume && (
              <li>
                <a href="#resume" title="View my resume">Resume</a>
              </li>
            )}
            <li>
              <a href="#contact" title="Contact me">Contact Me</a>
            </li>
            <li>
              <button 
                aria-label="Toggle dark mode"
                className="theme-toggle-btn"
              >
                <ToggleSwitch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
