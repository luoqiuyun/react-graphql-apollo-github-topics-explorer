import React, { useState } from "react"

import { DevDiv } from '../styledComponents/div'
import SearchResult from './SearchResult'
import SearchBar from './SearchBar'
import Topic from './Topic'

const GithubTopicSearch = (props) => {

  const [search, setSearch] = useState('react')

  return (
    <div>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
      />
      <DevDiv>
        <Topic search={search} />
        <SearchResult
          key={search}
          value={search}
          onSearchChange={setSearch} 
        />
      </DevDiv>
    </div>
  )
}

export default GithubTopicSearch