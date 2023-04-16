import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Pokemon from './Pokemon';
import PokemonOverview from './PokemonOverview';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <>
      <Link to={{ pathname: '/new-path', state: { some: 'value' } }}>Link</Link>
      <Routes>
        <Route path="/" element={<PokemonOverview />} />
        <Route path="/about" element={<div>About Pokedex!</div>} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default App;