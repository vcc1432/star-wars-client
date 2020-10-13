import React , { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState({
    query: '',
    orderBy: 'asc',
  });
  
  const handleSearchInputChanges = (e) => {
    setSearchValue({...searchValue, query: e.target.value});
  }

  const handleSelectChanges = (e) => {
    setSearchValue({...searchValue, orderBy: e.target.value});
  }

  const resetForm = () => {
    setSearchValue({ query: "", orderBy: 'asc' });
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
      {/* <div className="select">
        <select value={searchValue.orderBy} onChange={ handleSelectChanges }>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div> */}
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
   );
}
 
export default Search;