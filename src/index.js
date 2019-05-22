import React, { useState } from 'react'
import cx from 'classnames'
import s from './s.module.scss'

const THEMES = ['sun', 'moon']
const getNewTheme = currentTheme =>
  THEMES.indexOf(currentTheme) >= 0
    ? THEMES[1 - THEMES.indexOf(currentTheme)]
    : THEMES[0]

const TYPE = {
  DEFAULT: 'default',
  HIPSTER: 'hipster',
}

const SunMoonToggle = ({ backgroundColor, type = TYPE.DEFAULT }) => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? window.localStorage.getItem('theme')
      : THEMES[0]
  )
  const toggleTheme = currentTheme => {
    const newTheme = getNewTheme(currentTheme)
    typeof window !== 'undefined' &&
      window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }
  return (
    <React.Fragment>
      <div
        className={cx(s.toggle, theme === THEMES[1] ? null : s.hasZIndex)}
        onClick={toggleTheme.bind(null, theme)}
      />
      <div
        className={cx(
          s.blender,
          type === TYPE.DEFAULT ? s.opacity : s.expansion,
          theme === THEMES[1] ? s.moon : null
        )}
        style={{ backgroundColor }}
      />
    </React.Fragment>
  )
}

export default SunMoonToggle
