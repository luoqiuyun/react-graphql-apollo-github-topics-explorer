import React from "react"
import Developer from './components/common/Developer'
import GithubTopicSearch from './components/githubTopicSearch'

const App = (props) => {
  return (
    <div>
      <GithubTopicSearch />
      <Developer name={'Qiu Yun Luo'} />
    </div>
  )
}

export default App