import React from "react";
import { Route, Routes } from 'react-router-dom';
import PokemonOverview from './PokemonOverview';
import PokemonDetails from './PokemonDetails';

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



















/*Je hebt de volgende onderdelen gebruikt in je ReactJS app:

React routing met gebruik van Routes en Route componenten
Doorgeven van state via link met behulp van useLocation()
Detail weergave van item in PokemonDetails.jsx component
Meerdere componenten op verschillende routes
Gebruik van useEffect() hook in PokemonOverview.jsx en Pokemon.jsx componenten
Gebruik van useState() hook in PokemonOverview.jsx, Pokemon.jsx en App.jsx componenten
Gebruik van fetch api in PokemonOverview.jsx en Pokemon.jsx componenten
Gebruik van mapping in je views in PokemonOverview.jsx component
Gebruik van callbacks voor het favoriet maken van items in PokemonOverview.jsx en Pokemon.jsx componenten
Het volgende onderdeel is niet gebruikt:

Verschillende componenten (ieder component in eigen bestand) -> Dit onderdeel is wel gebruikt, alle componenten zijn in hun eigen bestand geïmplementeerd.
*/