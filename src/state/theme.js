import { darkTheme, lightTheme } from "../styles/themeObjects"

//UTILITY FUNCTION
const setCurrentTheme = boolean => {
  console.log(boolean)
  if (boolean) {
    return darkTheme
  } else {
    return lightTheme
  }
}

//INITIAL STATE
const initialState = darkTheme

//ACTION TYPE
const TOGGLE_THEME = "TOGGLE_THEME"

//ACTION CREATOR
export const toggleTheme = boolean => ({
  type: TOGGLE_THEME,
  theme: setCurrentTheme(boolean),
})

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return action.theme
    default:
      return state
  }
}
