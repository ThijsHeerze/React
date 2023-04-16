import { useEffect, useState } from 'react';

function Pokemon({ name, url, add }) {
  var [pokemons, setPokemon] = useState({});
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
        <img src={pokemons.sprites.front_default} alt={pokemons.name} />
        <div>
          <h2>{capitalizeLetterFirst(pokemons.name)}</h2>
          <div>
            <ol>
              <li>{pokemons.weight / 10}kg</li>
              <li>{pokemons.height / 10}m</li>
            </ol>
          </div>
        </div>
        <button onClick={() => add(pokemons.name)}>Add to Favorites</button>
      </div>
    </div>
  );
}

export default Pokemon;
