import React, { Fragment, useEffect } from 'react';

const Card = (props) => {

    const {setInitTime, setReturnTime, setResultTime, setResultMins, setResultSecs,
        setIsValid, setInputs,  
        initTime, returnTime, resultTime, resultMins, resultSecs, isValid, validGrades, inputs } = props


    useEffect(() => {
        if (localStorage.getItem('initTime') !== null) {
            setInitTime(localStorage.getItem('initTime'))    
            if (!localStorage.getItem('returnTime')) {
                var d = new Date();
                localStorage.setItem('returnTime', d.getTime())
            } else {
                setReturnTime(localStorage.getItem('returnTime'))
            }
            if (localStorage.getItem('returnTime') !== null) {
                let calcTime = (localStorage.getItem('returnTime') - localStorage.getItem('initTime')) / 1000 / 60
                let rem = (60  * (calcTime % 1)) / 100;
                let whole = Number(calcTime.toString().split('.')[0])
                calcTime = whole + rem
                setResultMins(whole)
                setResultSecs(rem)
                setResultTime(calcTime.toFixed(2))
                localStorage.setItem('resultTime', calcTime.toFixed(2))
                localStorage.setItem('whole', whole)
                localStorage.setItem('rem', rem)
            }
        } 
    }, [setInitTime, setResultMins, setResultSecs, setResultTime, setReturnTime])


    const startTimerHandler = () => {
        var d = new Date();
        localStorage.setItem('initTime', d.getTime())
    }

    const onChange = e => { 
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs.ram)
    }
    const inputsHandler = (e) => {
        e.preventDefault()
        if (inputs.download > 0 && inputs.upload > 0) {
            setInputs(inputs.download)
            setInputs(inputs.upload)
            localStorage.setItem('dl', inputs.download)
            localStorage.setItem('ul', inputs.upload)
        } else if (inputs.ram > 0) {
            setInputs(inputs.ram)
            localStorage.setItem('ram', inputs.ram)
        } else if (inputs.memory > 0) {
            setInputs(inputs.memory)
            localStorage.setItem('memory', inputs.memory)
        } else {
            setIsValid(false)
        }
    }

    return (
        <article className="card">
            <div className="card-container" >
            { !returnTime && !resultTime && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 1: </h2>
                    <span>Restarting Your Computer</span>
                </div>
                <ol className="actions">
                    <li>Click the button below and immediately close the browser window</li>
                    <li>Restart your computer.</li>
                    <li>Reopen the browser and return to this site as soon<br /> as your computer powers back on</li>
                </ol>
                <button id="timer" onClick={startTimerHandler}>Start Timer</button>
                </Fragment>
            )} 
            { localStorage.getItem('resultTime') && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 1: <i className="fas fa-check completed"></i></h2>
                    <span><strike>Rebooting Your Computer</strike></span>
                </div>
            {resultTime > .99 &&  <h2 className="result">Your Restart Time is: { resultMins } {resultMins === 1 ? "Minute" : "Minutes"} and {resultSecs.toFixed(2) * 100} Seconds</h2>}
                {resultTime <= .99 &&  <h2 className="result">Your Restart Time is: { resultTime * 100 } Seconds</h2>}
                </Fragment>
            )} 
            </div>

        {initTime && resultTime && (
            <div className="card-container" >
            { initTime && resultTime && !localStorage.getItem('dl') && !localStorage.getItem('ul') && ( 
            
                <Fragment>   
                <div className="step-title">
                    <h2>Step 2: </h2>
                    <span>Test Your Internet Connection</span>
                </div>
                <ol className="actions">
                    <li>
                        Click the link below to be directed to Google's Speed Test <br />
                        <a 
                            href="https://www.google.com/search?q=speed+test&oq=speed+t&aqs=chrome.0.0j69i57j0l3j69i60l3.3632j0j7&sourceid=chrome&ie=UTF-8" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >Google Speed Test</a>
                    </li>
                    <li>Once the page opens, click "Run Speed Test" to begin the internet speed test</li>
                    <li>Once the test is completed, click back on this tab and enter your Download and Upload speeds</li>
                    <li>Click "Complete Step" once the data has been entered</li>
                </ol>
                
                <form className="speed-form">
                    Download Speed
                    <input className="speed" type="number" name="download" onChange={onChange} maxLength="3" required />
                    Upload Speed
                    <input className="speed" type="number" name="upload" onChange={onChange} maxLength="3" required />
                    <button type="submit" onClick={inputsHandler} >Submit Speeds</button>
                </form>
                {isValid === false && <p className="error">This is invalid</p>}
                </Fragment>
            )}
            { localStorage.getItem('dl') && localStorage.getItem('ul') && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 2: <i className="fas fa-check completed"></i></h2>
                    <span><strike>Test Your Internet Connection</strike></span>
                </div>
                
                {<h2 className="result">Your Download Speed is: { localStorage.getItem('dl') } Mbps</h2>}
                {<h2 className="result">Your Upload Speed is: { localStorage.getItem('ul') } Mbps</h2>}
                </Fragment>
            )} 
        </div> 
        )}
        
        {initTime && resultTime && localStorage.getItem('dl') && localStorage.getItem('ul') && (
            <div className="card-container" >
            { !localStorage.getItem('ram') && ( 
                <Fragment>
                <div className="step-title">
                    <h2>Step 3: </h2>
                    <span>Get System Hardware</span>
                </div>

                <ol className="actions">
                    <li>Open the Start Menu and begin typing Control Panel.</li>
                    <li>Select Control Panel once it appears.</li>
                    <li>Select System. Note: Some users will need to select "System and Security, and the System.</li>
                    <li>Under system, find the Installed Memory (RAM) and enter the value below</li>
                </ol>
                
                <form className="speed-form">
                Installed Memory (RAM)
                    <input className="speed" type="number" name="ram" onChange={onChange} maxLength="2" required />    
                </form>
                <button type="submit" onClick={inputsHandler} >Submit Amount</button>
                {isValid === false && <p className="error">This is invalid</p>}
                </Fragment> 
            )}
                { localStorage.getItem('ram') && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 3: <i className="fas fa-check completed"></i></h2>
                    <span><strike>Get System Hardware</strike></span>
                </div>
                
                {<h2 className="result">You have { localStorage.getItem('ram') }GB of RAM </h2>}
                </Fragment>
            )}
        </div> 
        )}

        {initTime && resultTime && localStorage.getItem('dl') && localStorage.getItem('ul') && localStorage.getItem('ram') && (
            <div className="card-container" >
            { !localStorage.getItem('memory') && ( 
                <Fragment>
                <div className="step-title">
                    <h2>Step 4: </h2>
                    <span>Get System Usage</span>
                </div>

                <ol className="actions">
                    <li>This may not be an exact or steady number. Record the number that appears to be the closest in average.</li>
                    <li>Open the Start Menu and type Task Manager.</li>
                    <li>Select Task Manager. Once open, you may have to click "More Details".</li>
                    <li>Click on the Processes tab if it is not already open.</li>
                    <li>Enter the percentage of Memory Usage below</li>
                </ol>
                
                <form className="speed-form">
                    Memory %
                    <input className="speed" type="number" name="memory" onChange={onChange} maxLength="3" required />
                    <button type="submit" onClick={inputsHandler} >Enter Score</button>
                </form>
                </Fragment> 
            )}
                { localStorage.getItem('memory') && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 4: <i className="fas fa-check completed"></i></h2>
                    <span><strike>Get System Usage</strike></span>
                </div>
                
                {<h2 className="result">You are currently using { localStorage.getItem('memory') }% of Memory </h2>}
                
                <button type="submit" onClick={!validGrades} >Submit Percent</button>
                </Fragment>
            )}
        </div> 
        )}

            
        </article>
    )
}

export default Card