import React from 'react'
import './App.css';
import { useGlobalContext } from './Context';
function Search() {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <section className="search-section">
      <h2>Search Your Favourite Movie</h2>
      <form action="#" onSubmit={(e) => { e.preventDefault() }}>
        <input type="text" placeholder="Search here"
         value={query} onChange={(e) => setQuery(e.target.value)}></input>
      </form>


      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  )
}

export default Search
