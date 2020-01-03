import React, { Fragment } from 'react';
import './App.css';

import Header from './components/Header'
import Instructions from './components/Instructions'
import Card from './components/Card'
import Grades from './components/Grades'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
        {
           localStorage.getItem('resultTime') && 
           localStorage.getItem('dl') && 
           localStorage.getItem('ul') && 
           localStorage.getItem('ram') && 
           localStorage.getItem('cpu') && 
           localStorage.getItem('memory') ? 
           <Grades /> :
           <Fragment>
              <Instructions />
              <Card />
           </Fragment>
          }
            
          
          
        </main>
        
      </div>
      
    </div>
  );
}

export default App;
