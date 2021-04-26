import React from "react"
import StarCount from '../common/StarCount'
import { StarSpan } from '../styledComponents/span'

const ResourcePath = ({node}) => {
  return (
    <div className="d-flex justify-content-between">
      <h6>Path: {node.resourcePath}</h6>
      <StarSpan>
        <StarCount count={node.stargazers.totalCount} />
      </StarSpan>
    </div>
  )
}

export default ResourcePath