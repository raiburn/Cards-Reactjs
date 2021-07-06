import { useState } from 'react';
import './App.scss';
import Deck from './components/Deck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Playing Texas</h1>
        <Deck title="Table" path="table/" flipped="2"/>
        <Deck title="Hand" path="deck/2" flipped="2">
        </Deck>
      </header>
    </div>
  );
}

export default App;
