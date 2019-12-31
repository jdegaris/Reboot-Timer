import React, { Fragment, useState, useLayoutEffect } from 'react';

const Card = () => {
    const [initTime, setInitTime] = useState()
    const [returnTime, setReturnTime] = useState()
    const [resultTime, setResultTime] = useState()

    
    useLayoutEffect(() => {
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
                setResultTime(calcTime.toFixed(2))
                localStorage.setItem('resultTime', calcTime.toFixed(2))
            }
        } 
    }, [])

    const startTimerHandler = () => {
        var d = new Date();
        localStorage.setItem('initTime', d.getTime())
    }

    return (
        <article className="card">
            <div className="card-container">
            { !returnTime && !resultTime && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 1: </h2>
                    <span>Restarting Your Computer</span>
                </div>
                <ol className="actions">
                    <li>Click the button below</li>
                    <li>Close your browser window</li>
                    <li>Restart your computer.</li>
                    <li>Reopen this browser as soon<br /> as your computer powers back on</li>
                </ol>
                <button id="timer" onClick={startTimerHandler}>Start Timer</button>
                </Fragment>
            )} 
            { initTime && resultTime &&(
                <Fragment>   
                <div className="step-title">
                    <h2><strike>Step 1: </strike></h2>
                    <span><strike>Restarting Your Computer</strike></span>
                </div>
                {resultTime > .99 &&  <h2>Your Restart Time is: { resultTime } Minutes</h2>}
                {resultTime <= .99 &&  <h2>Your Restart Time is: { resultTime } Seconds</h2>}
                </Fragment>
            )} 

            { resultTime && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 2: </h2>
                    <span>Test Your Internet Connection</span>
                </div>
                <ol className="actions">
                    <li>Click the button below to be directed to Speedtest by Ookla</li>
                    <li>Once the page opens, click Go to begin your internet speed test</li>
                    <li>Click back on this tab and enter your Download and Upload internet speed</li>
                    <li>Click "Complete Step" once the data has been entered</li>
                </ol>
                <div className="speed-form">
                    Download Speed
                    <input className="speed" type="text" name="download" maxLength="3" />
                    Upload Speed
                    <input className="speed" type="text" name="upload" maxLength="3"/>
                </div>
                <button>Complete Step</button>
                </Fragment>
            )}

            </div>
        </article>
    )
}

export default Card