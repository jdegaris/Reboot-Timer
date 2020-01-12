import React, { Fragment, useState } from 'react';
import './App.css';

import Header from './components/Header'
import Instructions from './components/Instructions'
import Card from './components/Card'
import Grades from './components/Grades'

function App() {
  const [initTime, setInitTime] = useState()
  const [returnTime, setReturnTime] = useState()
  const [resultTime, setResultTime] = useState()
  const [resultMins, setResultMins] = useState()
  const [resultSecs, setResultSecs] = useState()
  const [inputs, setInputs] = useState({
    download: null,
    upload: null,
    ram: null,
    cpu: null,
    memory: null
})
  const [isValid, setIsValid] = useState()
  const [validGrades, setValidGrades] = useState(false)

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
              <Card 
                setInitTime={setInitTime}
                setReturnTime={setReturnTime}
                setResultTime={setResultTime}
                setResultMins={setResultMins}
                setResultSecs={setResultSecs}
                setIsValid={setIsValid}
                setValidGrades={setValidGrades}
                setInputs={setInputs}
                initTime={initTime}
                returnTime={returnTime}
                resultTime={resultTime}
                resultMins={resultMins}
                resultSecs={resultSecs}
                isValid={isValid}
                validGrades={validGrades}
                inputs={inputs}
              />
           </Fragment>
          }
            
          
          
        </main>
        
      </div>
      
    </div>
  );
}

export default App;
