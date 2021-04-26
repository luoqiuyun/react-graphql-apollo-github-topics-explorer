import React, { useState } from "react"

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
      <div className="luoqiuyun">
        <Topic search={search} />
        <SearchResult
          key={search}
          value={search}
          onSearchChange={setSearch} 
        />
      </div>
    </div>
  )
}

export default GithubTopicSearch