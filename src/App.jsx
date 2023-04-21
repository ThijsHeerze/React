import React from "react";
import { Route, Routes } from 'react-router-dom';
import PokemonOverview from './PokemonOverview';
import PokemonDetails from './PokemonDetails';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonOverview />} />
        <Route path="/about" element={<div>About Pokedex!</div>} />
        <Route path="/pokemon/*" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default App;