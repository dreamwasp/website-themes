import React from "react"
import { useSelector } from "react-redux"
import Switch from "./Switch.js"

export default () => {
  const navBar = useSelector(state => state.theme.navBar)
  return (
    <div className={navBar.bar}>
      <div className={navBar.header}>this is the header</div>
      <Switch />
    </div>
  )
}
