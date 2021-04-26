import React from "react"
import StarCount from '../common/StarCount'
import { RelatedTopicsDiv } from '../styledComponents/div'

const RelatedTopics = ({nodes, changeTopic, topicSelected}) => {

  const buttonClicked = (node) => {
    changeTopic(node.topic.name)
    topicSelected(node.topic.name)
  };

  return (
    <RelatedTopicsDiv>
      Related Topics:
      { nodes.map((node, j) => (
        <button key={j} type="button"
          onClick={() => {buttonClicked(node)}}
          className="btn btn-outline-info btn-sm mx-1 my-1">
          {node.topic.name}&nbsp;
          <StarCount count={node.topic.stargazerCount} />
        </button>
      ))}
    </RelatedTopicsDiv>
  )
}

export default RelatedTopics