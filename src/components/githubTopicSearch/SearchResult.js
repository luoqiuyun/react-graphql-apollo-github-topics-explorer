import React, { useState, useEffect } from "react"
import { useQuery } from '@apollo/client'

import Loading from '../common/Loading'
import ResourcePath from './ResourcePath'
import RelatedTopics from './RelatedTopics'
import { GET_TOPICS } from './config/get-topics'

function SearchResult(props) {
  const [topic, setTopic] = useState(props.value)
  const [topics, setTopics] = useState([])

  const search = `${topic} stars:>10000`
  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(GET_TOPICS, { variables: {search} })

  useEffect (() => {
    const relatedTopics = (data && data.search &&  data.search.edges) || []
    setTopics(relatedTopics)
    return () => setTopics(null)
  }, [data])

  if (loading) return <Loading search={search} />
  if (error) return (
    <React.Fragment>
      <p>Oops, error!</p> 
      <button onClick={() => refetch()}>Please try again!</button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ul className="list-group">
        {topics.map((edge, index) => (
          <li className="list-group-item" key={index}>
            <ResourcePath node={edge.node} />
            <RelatedTopics
              nodes={edge.node.repositoryTopics.nodes}
              changeTopic={setTopic}
              topicSelected={props.onSearchChange}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default SearchResult