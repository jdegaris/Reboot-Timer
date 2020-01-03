import React, { Fragment } from 'react';

const GradeCard = (props) => {
    
    return (
    <Fragment>
    { props.type === 'reboot' &&
        <div className="grade-card">      
            <h2>Return Time:</h2>
            <p>You rebooted and returned in {Number(props.whole) > 0 && `${props.whole} minutes and `} {Number(props.rem).toFixed(2)} seconds.</p>
            {/* IF COMPUTER TIME IS GOOD */}
            <p>This is a good time.</p>
            {/* IF COMPUTER TIME IS AVERAGE */}
            {/* IF COMPUTER TIME IS POOR */}
            <p>Return time is used to measure overall computer and internet performance</p>
        </div>   
    }    
    { props.type === 'speed' &&
        <div className="grade-card">      
            <h2>Internet Speed:</h2>
            <p>You registered a download speed of {props.dl}Mbps and upload speed of {props.ul}Mbps</p>
            {props.dl < 50 && props.dl > 20 ?
            <p>We consider this a great connection</p> :
            props.dl > 50 ? 
            <p>We consider this a good connection.</p> :
            props.dl < 50 && props.dl > 20 ?
            <p>We consider this an average connection.</p> :
            <p>We consider this a poor connection.</p>
            }
            <p>Return time is used to measure overall computer and internet performance</p>
        </div>   
    }    
    { props.type === 'ram' &&
        <div className="grade-card">      
            <h2>Random Access Memory:</h2>
            <p>You registered that your computer has {props.ram}GB of RAM</p>
            {props.ram > 9 ? 
            <p>We consider this more than adequate</p> :
            props.ram < 9 && props.ram > 6 ?
            <p>We consider this an adequate amount of RAM.</p> :
            <p>We recommend upgrading the amount of random access memory(RAM).</p>
            }
            <p>Random Access Memory(RAM) is hardware that stores the information that is actively being used. The amount of RAM that is installed can have a significant impact on the computers performance</p>
        </div>   
    }    
    { props.type === 'usage' &&
        <div className="grade-card">      
            <h2>CPU and Memory Usage:</h2>
            <p>You a CPU usage of {props.cpu}? and memory usage of {props.memory}%</p>
            {/* IF COMPUTER TIME IS GOOD */}
            <p>This is a good time.</p>
            {/* IF COMPUTER TIME IS AVERAGE */}
            {/* IF COMPUTER TIME IS POOR */}
            <p>Return time is used to measure overall computer and internet performance</p>
        </div>   
    }    
    </Fragment>
    )
}

export default GradeCard