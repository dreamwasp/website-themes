import React from "react"
import { useSelector } from "react-redux"

import Navbar from "./Navbar"

export default ({ children }) => {
  const layout = useSelector(state => state.theme.layout)

  return (
    <div className={layout.site}>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}
