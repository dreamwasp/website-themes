//INITIAL STATE
const initialState = 0

//ACTION TYPES
const ADD_ONE = "ADD_ONE"
const SUB_ONE = "SUB_ONE"

//ACTION CREATORS
export const addOne = count => ({
  type: ADD_ONE,
  count,
})

export const subOne = count => ({
  type: SUB_ONE,
  count,
})

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return state + 1
    case SUB_ONE:
      return state - 1
    default:
      return state
  }
}
