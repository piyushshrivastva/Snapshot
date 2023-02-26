import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <>
        <input type="text" id="title" placeholder="Search"/>
        <label> <IoSearchSharp /> </label>
        <br></br>
        <nvabar>Mountain Beaches Birds Food</nvabar>
    </>
  )
}

export default Search;