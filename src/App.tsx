import React from 'react';
import Pokedex from './Pokedex/Pokedex';
import { Region } from './Helper/regions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pokedex/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='pokemon'>
            <Route path='kanto' element={<Pokedex region={Region.Kanto}/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
