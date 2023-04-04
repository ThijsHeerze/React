import './App.css';
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

function App({}) {
  var [counter, setCounter] = useState(1);
  var [pokemons, setPokemons] = useState([]);
  var [loading, setLoading] = useState(true);
  var [favoPokemons, setFavoPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="pokemon">
        Loading...
      </div>
    )
  }

  const getNextResults = () => {
    setLoading(true);
    fetch(pokemons.next)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      })
  };

  const getPreviousResults = () => {
    setLoading(true);
    fetch(pokemons.previous)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      })
  };

  const addFavoPokemon = (pokemon) => {
    setFavoPokemons([...favoPokemons, pokemon]);
  }

  const previousDisabled = pokemons.previous == null;
  const nextDisabled = pokemons.next == null;

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div>
        <h2>Favoriete Pokemon</h2>
        <div>
          <ul>
            {favoPokemons.map(favoPokemons => {
              return (
                <li>
                  {favoPokemons}
                </li>)
            })}
          </ul>
        </div>
        <div>
          <button onClick={getPreviousResults} disabled={previousDisabled}>Vorige</button>
          <button onClick={getNextResults} disabled={nextDisabled}>Volgende</button>
        </div>
      </div>
      <div className='pokemon-list'>
        {pokemons.results.map(pokemon => {
          return (
            <Pokemon
              name={pokemon.name}
              url={pokemon.url}
              add={addFavoPokemon}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;