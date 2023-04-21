import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';

function PokemonDetails() {
  let {state} = useLocation();
  return (
    <>
      <Link to={'/'}>
        <button className='button' onClick>Terug</button>
      </Link>
      <h2 className="pokemon">{state.data.name}</h2>
        
      <p className="pokemon">Ik heb de ability: <strong>{state.data.abilities[0].ability.name}</strong></p>
      <p className="pokemon">Ik weeg <strong>{state.data.weight}</strong>kg</p>
      <p className="pokemon">Ik ben <strong>{state.data.height}</strong>m lang</p>
      <div>
        <div>
          <img src={state.data.sprites.back_default} alt="back"/>
          <img src={state.data.sprites.front_default} alt="front"/>
        </div>
        <div>
          <img src={state.data.sprites.back_shiny} alt="back"/>
          <img src={state.data.sprites.front_shiny} alt="front"/>
        </div>
        <div>
          <img src={state.data.sprites.other.dream_world.front_default} alt="back"/>
        </div>
        
      </div>
    </>
  );

}

export default PokemonDetails;