import React from "react"
import checkboxSwitch from "../styles/switch.module.scss"

export default ({ isOn, handleToggle }) => {
  return (
    <div className={checkboxSwitch.container}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={checkboxSwitch.checkbox}
        id={`checkboxSwitch`}
        type="checkbox"
      />
      <label className={checkboxSwitch.background} htmlFor={`checkboxSwitch`}>
        <div className={checkboxSwitch.button}></div>
      </label>
    </div>
  )
}
