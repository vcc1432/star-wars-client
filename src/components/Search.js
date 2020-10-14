import React , { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState({
    query: ''
  });
  
  const handleSearchInputChanges = (e) => {
    setSearchValue({...searchValue, query: e.target.value});
  }

  const resetForm = () => {
    setSearchValue({ query: "" });
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetForm();
  }

  return ( 
    <form className="flex-form">
      <input
        value={searchValue.query}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search movies by title..."
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
   );
}
 
export default Search;