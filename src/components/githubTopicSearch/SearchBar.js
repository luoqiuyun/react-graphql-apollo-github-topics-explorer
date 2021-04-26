import React, { useState, useEffect } from "react"

const SearchBar = (props) => {

  const [searchTerm, setSearchTerm] = useState(props.search)

  useEffect(() => {
    setSearchTerm(props.search);
  }, [props.search])

  const updateSearch = (e) => {
    let search = e.target.value
    setSearchTerm(search)
    props.onSearchChange(search)
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
        Search for Github Topics
      </div>
      <div className="form-inline">
      <input  
        value={searchTerm}
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        spellCheck="false"
        onChange={ updateSearch } />
      </div>
    </nav>
  )
}

export default SearchBar