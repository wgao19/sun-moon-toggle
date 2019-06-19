import React, { useEffect } from "react";
import { useTheme } from "./useTheme";
import s from "./s.module.scss";

const THEMES = ["sun", "moon"];
const getNewTheme = currentTheme =>
  THEMES.indexOf(currentTheme) >= 0
    ? THEMES[1 - THEMES.indexOf(currentTheme)]
    : THEMES[0];

const TYPE = {
  DEFAULT: "default",
  HIPSTER: "hipster"
};

const SunMoonToggle = ({ backgroundColor, type = TYPE.DEFAULT, toggleClassName, blenderClassName }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <React.Fragment>
      <div
        className={`${s.toggle} ${s[theme]} ${toggleClassName}`}
        onClick={toggleTheme.bind(null, theme)}
      />
      <div
        className={`${s.blender} ${
          type === TYPE.DEFAULT ? s.opacity : s.expansion
        } ${s[theme]}` ${blenderClassName}}
        style={{ backgroundColor }}
      />
    </React.Fragment>
  );
};

export default SunMoonToggle;
