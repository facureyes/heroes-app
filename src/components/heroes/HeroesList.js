import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroeCard from './HeroeCard';

const HeroesList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row">
      {
        heroes.map( heroe => (
          <div key={heroe.id} className="col-lg-3 col-md-4 col-sm-6">
          <HeroeCard 
            
            { ...heroe }
          />
          </div>
        ))
      }
    </div>
  )
}

export default HeroesList
