import React from 'react'
import {MdSearch} from "react-icons/md"
const Search = ({handleSearch}) => {
  return (
    <div className="search">
        <MdSearch className="search-icon" size="1.4em"/>
        <input type="text" placeholder="Search for your notes..." onChange={(event) =>handleSearch(event.target.value)}>

        </input>
    </div>
  )
}

export default Search