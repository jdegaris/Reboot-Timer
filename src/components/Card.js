import React, { Fragment, useState, useLayoutEffect } from 'react';

const Card = () => {
    const [initTime, setInitTime] = useState()
    const [returnTime, setReturnTime] = useState()
    const [resultTime, setResultTime] = useState()
    const [speed, setSpeed] = useState({
        download: null,
        upload: null
    })

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

    const onChange = e => { 
        setSpeed({ ...speed, [e.target.name]: e.target.value });
    }

    const speedHandler = (e) => {
        e.preventDefault()
        setSpeed(speed.download)
        setSpeed(speed.upload)
        localStorage.setItem('dl', speed.download)
        localStorage.setItem('ul', speed.upload)
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
                    <li>Click the button below</li>
                    <li>Close your browser window</li>
                    <li>Restart your computer.</li>
                    <li>Reopen this browser and return to this site as soon<br /> as your computer powers back on</li>
                </ol>
                <button id="timer" onClick={startTimerHandler}>Start Timer</button>
                </Fragment>
            )} 
            { initTime && resultTime && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 1: <i class="fas fa-check completed"></i></h2>
                    <span><strike>Rebooting Your Computer</strike></span>
                </div>
                {resultTime > .99 &&  <h2 className="result">Your Restart Time is: { resultTime } Minutes</h2>}
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
                    <li>Click the button below to be directed to Speedtest by Ookla</li>
                    <li>Once the page opens, click Go to begin your internet speed test</li>
                    <li>Click back on this tab and enter your Download and Upload internet speed</li>
                    <li>Click "Complete Step" once the data has been entered</li>
                </ol>
                <form className="speed-form">
                    Download Speed
                    <input className="speed" type="number" name="download" onChange={onChange} maxLength="3" required />
                    Upload Speed
                    <input className="speed" type="number" name="upload" onChange={onChange} maxLength="3" required />
                    <button type="submit" onSubmit={speedHandler} >Complete Step</button>
                </form>
                
                </Fragment>
            )}
            { localStorage.getItem('dl') && localStorage.getItem('ul') && (
                <Fragment>   
                <div className="step-title">
                    <h2>Step 2: <i class="fas fa-check completed"></i></h2>
                    <span><strike>Test Your Internet Connection</strike></span>
                </div>
                {<h2 className="result">Your Download Speed is: { localStorage.getItem('dl') } Mbps</h2>}
                {<h2 className="result">Your Upload Speed is: { localStorage.getItem('ul') } Mbps</h2>}
                </Fragment>
            )} 
        </div> 
        )}
        
            
        </article>
    )
}

export default Card