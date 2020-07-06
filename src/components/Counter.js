import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addOne, subOne } from "../state/count"

export default () => {
  const count = useSelector(state => state.count)
  const countStyle = useSelector(state => state.theme.counter)
  const dispatch = useDispatch()
  return (
    <div className={countStyle.counterContainer}>
      <button onClick={() => dispatch(subOne())} className={countStyle.button}>
        -
      </button>
      <div className={countStyle.margin}>{count}</div>
      <button onClick={() => dispatch(addOne())} className={countStyle.button}>
        +
      </button>
    </div>
  )
}
