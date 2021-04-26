import React from "react"
import { TopicH3 } from '../styledComponents/hx'

const Topic = (props) => {
  return (
    <TopicH3>
      TOPIC: <span className="badge badge-info">
      {props.search.toUpperCase()}</span>
    </TopicH3>
  )
}

export default Topic