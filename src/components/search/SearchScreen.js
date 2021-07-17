import React, { useMemo, useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import HeroeCard from '../heroes/HeroeCard'
import { getHeroesByName } from '../../selectors/getHeroesByName'

const SearchScreen = ({history}) => {
  const location = useLocation();
  const { q = ''} =queryString.parse(location.search);
  const [search, setSearch] = useState(q);
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
  


  const handleSubmit = event => {
    event.preventDefault(); 
    if(search !== ''){
      console.log(heroesFiltered)
      history.push(`?q=${search}`);
    } else {
      history.push('/search');
    }
  }
  
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              name="searchText"
              autoComplete="off"
              placeholder="Find your hero"
              className="form-control"
              onChange={(e)=>setSearch(e.target.value)}
              value={search}
            />
            <button
              type="submit"
              className="btn mt-2 btn-block btn-outline-dark"
            >
              Search
            </button>
          </form>

        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q==='' && 
          <div className="alert alert-info">
            Search a Hero.
          </div>}
          
          {(heroesFiltered.length < 1 && q !== '') && 
          <div className="alert alert-danger">
            There is no hero with "{q}".
          </div>}

          {
            heroesFiltered.map(heroe => 
              <HeroeCard 
                key={heroe.id} 
                {...heroe} 
              />
            )
          }
        </div>

      </div>
    </div>
  )
}

export default SearchScreen
