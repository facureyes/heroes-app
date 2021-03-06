import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById';
import { getHeroeImageById } from '../../helpers/heroesImage';
// import batman from '../../assets/heroes/dc-batman.jpg' //estatico

const HeroeScreen = ({history}) => {
  
  const { heroeId } = useParams();
  const {id, 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters } = useMemo(() => getHeroesById(heroeId) || {}, [heroeId]);
  if(!id){
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if(history.length <= 2){
      history.push('/')
    } else {
      history.goBack()
    }
  }


  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img 
          // src={`../assets/heroes/${heroeId}.jpg`} //desde public/assets
          // src={ batman } //usando import
          src={ getHeroeImageById(heroeId) }
          alt={ superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-4">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
          <li className="list-group-item"><b>First Appearance: </b> {first_appearance}</li>
        </ul>

        <h5>Characters</h5>
        <p>{ characters }</p>

        <button 
          className="btn btn-outline-dark"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  )
}

export default HeroeScreen
