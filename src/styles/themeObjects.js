import darkCounter from "./darkMode/counter.module.scss"
import darkLayout from "./darkMode/layout.module.scss"
import darkMain from "./darkMode/main.module.scss"
import darkNavbar from "./darkMode/navbar.module.scss"

import lightCounter from "./lightMode/counter.module.scss"
import lightLayout from "./lightMode/layout.module.scss"
import lightMain from "./lightMode/main.module.scss"
import lightNavbar from "./lightMode/navbar.module.scss"

export const darkTheme = {
  boolean: false,
  counter: darkCounter,
  layout: darkLayout,
  main: darkMain,
  navBar: darkNavbar,
}

export const lightTheme = {
  boolean: true,
  counter: lightCounter,
  layout: lightLayout,
  main: lightMain,
  navBar: lightNavbar,
}
