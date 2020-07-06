import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../state/theme"

import Switch from "./Switch.js"

export default () => {
  const navBar = useSelector(state => state.theme.navBar)
  const boolean = useSelector(state => state.theme.boolean)
  const dispatch = useDispatch()

  return (
    <div className={navBar.bar}>
      <div className={navBar.header}>this is the header</div>
      <Switch
        isOn={boolean}
        handleToggle={() => {
          dispatch(toggleTheme(boolean))
        }}
      />
    </div>
  )
}
