
import React from 'react';
import PokeList from './components/PokeList';
import './App.css';
import { pokemonArr } from './utils/data';

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Mi lista de pokemon</h1>
      <PokeList pokemonArr={pokemonArr} />
    </div>
  );
}

export default App;
