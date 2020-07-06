import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import Counter from "../components/Counter"

export default () => {
  const main = useSelector(state => state.theme.main)

  return (
    <Layout>
      <div className={main.text}>
        <Counter />
      </div>
    </Layout>
  )
}
