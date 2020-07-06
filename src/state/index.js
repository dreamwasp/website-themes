import { createStore as reduxCreateStore, combineReducers } from "redux"

import countReducer from "./count"
import themeReducer from "./theme"

const reducer = combineReducers({
  count: countReducer,
  theme: themeReducer,
})

const createStore = () => reduxCreateStore(reducer)

export default createStore
