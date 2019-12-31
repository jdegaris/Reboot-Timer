import React from 'react';
import './App.css';

import Header from './components/Header'
import Instructions from './components/Instructions'
import Card from './components/Card'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Instructions />
          <Card />
        </main>
        
      </div>
      
    </div>
  );
}

export default App;
