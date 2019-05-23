import React, { useEffect } from 'react'
import { useTheme } from './useTheme'
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
  const { theme, toggleTheme } = useTheme(
    typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null
  )
  useEffect(() => {
    typeof window !== 'undefined' && window.localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <React.Fragment>
      <div
        className={cx(s.toggle, s[theme])}
        onClick={toggleTheme.bind(null, theme)}
      />
      <div
        className={cx(
          s.blender,
          type === TYPE.DEFAULT ? s.opacity : s.expansion,
          s[theme]
        )}
        style={{ backgroundColor }}
      />
    </React.Fragment>
  )
}

export default SunMoonToggle
