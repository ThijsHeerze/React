import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Pokemon({ name, url, add }) {
  var [pokemon, setPokemon] = useState({});
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      });
  }, [url]);

  const capitalizeLetterFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (loading) {
    return (
      <div className="pokemon">
        Loading...
      </div>
    )
  }

  return (
    <div className="pokemon">
      <div className='pokemon-details'>
      <Link state={{data: pokemon}} to={'/pokemon/' + pokemon.name}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </Link>
        <div>
          <h2>{capitalizeLetterFirst(pokemon.name)}</h2>
          <div>
            <ol>
              <li>{pokemon.weight / 10}kg</li>
              <li>{pokemon.height / 10}m</li>
            </ol>
          </div>
        </div>
        <button className='button' onClick={() => add(pokemon.name)}>Add to Favorites</button>
      </div>
    </div>
  );
}

export default Pokemon;
