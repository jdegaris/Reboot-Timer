import React, { Fragment, useEffect, useState } from 'react';

const GradeCard = (props) => {
    const { type, whole, rem, dl, ul, ram, memory, setGradeCard } = props
    let secs = Number(rem * 100)
    const [rebootColor, setRebootColor] = useState()
    const [speedColor, setSpeedColor] = useState()
    const resultTime = Number(localStorage.getItem('resultTime'))
    useEffect(() => {
        if (whole === 1) {
            setRebootColor('green')
        } else if (whole === 0 && secs < 60 ) {
            setRebootColor('yellow')
        } else if (resultTime <= 2 ) {
            setRebootColor('yellow')
        } else {
            setRebootColor('red')
        }
        if (dl > 100 ) {
            setSpeedColor('green')
        } else if(dl > 20 && dl < 100 ) {
            setSpeedColor('yellow')
        } else {
            setSpeedColor('red')
        }
    }, [])

    const nextGradeHandler = () => {
        if (type === 'reboot') {
            setGradeCard('speed')
        }
        if (type === 'speed') {
            setGradeCard('ram')
        }
        if (type === 'ram') {
            setGradeCard('usage')
        }
        if (type === 'usage') {
            localStorage.removeItem('returnTime')
            localStorage.removeItem('ram')
            localStorage.removeItem('rem')
            localStorage.removeItem('resultTime')
            localStorage.removeItem('initTime')
            localStorage.removeItem('memory')
            localStorage.removeItem('dl')
            localStorage.removeItem('ul')
            localStorage.removeItem('whole')
            setGradeCard('recs')
        }
    }
    const prevGradeHandler = () => {
        if (type === 'speed') {
            setGradeCard('reboot')
        }
        if (type === 'ram') {
            setGradeCard('speed')
        }
        if (type === 'usage') {
            setGradeCard('ram')
        }
    }

    return (
    <Fragment>
    { type === 'reboot' &&
        <div className={(whole <= 1 && secs <= 30) || (whole === 0 && secs<=60) ? 'grade-card green' : whole <= 2 && whole >= 1 && secs >30 ? 'grade-card yellow' : 'grade-card red'} >      
            <h2>Return Time:</h2>
            <p>You returned to the site in {whole > 0 && `${whole} minutes and `} {Number(secs.toFixed(0))} seconds.</p>
            { (whole <= 1 && secs <= 30) || (whole === 0 && secs <= 60) ? 
            <p>This is a good time.</p> :
            whole <= 2 && whole >= 1 && secs >30 ?
            <p>This is an average time.</p> :
            <p>This is a bad time.</p> 
            }

            <p>
                Return time is used to measure overall computer and internet performance. 
                This test is meant to replicate how the user operates when powering the computer on.
                User ability can dramatically impact this test.
            </p>
            <button type='submit' onClick={nextGradeHandler}>Next Grade</button>
        </div>   
    }    
    { type === 'speed' &&
        <div className={(dl > 50) ? 'grade-card green' : dl < 50 && dl > 20 ? 'grade-card yellow' : 'grade-card red' } >      
            <h2>Internet Speed:</h2>
            <p>You entered a download speed of {dl}Mbps and upload speed of {ul}Mbps</p>
            {dl > 100 ?
            <p>We consider this a great connection</p> :
            dl > 50 && dl < 100 ? 
            <p>We consider this a good connection.</p> :
            dl < 50 && dl > 20 ?
            <p>We consider this an average connection.</p> :
            <p>We consider this a poor connection.</p>
            }
            <p>
                Internet Speed measures the speed at which data is transferred through the internet to your computer.
                This controls how fast web pages will open and the time it takes to download a file. 

            </p>
            <button type='submit' onClick={prevGradeHandler}>Prev Grade</button>
            <button type='submit' onClick={nextGradeHandler}>Next Grade</button>
        </div>   
    }    
    { type === 'ram' &&
        <div className={ram >= 9 ? 'grade-card green' : ram < 9 && ram >= 6 ? 'grade-card yellow' : 'grade-card red' } >      
            <h2>Random Access Memory:</h2>
            <p>You entered that your computer has {ram}GB of RAM</p>
            {ram > 9 ? 
            <p>We consider this amount of RAM to be more than adequate.</p> :
            ram < 9 && ram > 5 ?
            <p>We consider this an adequate amount of RAM.</p> :
            <p>We recommend upgrading the amount of random access memory(RAM) that is installed on this computer.</p>
            }
            <p>
                Random Access Memory(RAM) is hardware that stores the information that is actively being used. 
                The amount of RAM that is installed can have a significant impact on the computers performance.
            </p>
            <button type='submit' onClick={prevGradeHandler}>Prev Grade</button>
            <button type='submit' onClick={nextGradeHandler}>Next Grade</button>
        </div>   
    }    
    { type === 'usage' &&
        <div className={memory <= 40 ? 'grade-card green' : memory < 85 && memory > 40 ? 'grade-card yellow' : 'grade-card red' } >      
            <h2>Virtual Memory Usage:</h2>
            <p>You entered a memory usage of {memory}%</p>
            {memory <= 30 ? 
                <p>We consider this a low percentage of usage.</p> : 
            memory <= 75 ?
                <p>We consider this a moderate percentage of usage.</p> :
                <p>
                    We consider this a high percentage of usage.
                </p>
            }
            
            {/* IF COMPUTER TIME IS AVERAGE */}
            {/* IF COMPUTER TIME IS POOR */}
                <p>
                    Memory is a representation of data that displays how much of your computers memory is being used.  
                </p>
            <button type='submit' onClick={prevGradeHandler}>Prev Grade</button>
            <button type='submit' onClick={nextGradeHandler}>Get Our Recommendations</button>
        </div>   
    }    
    { type === 'recs' &&
        <Fragment>
        <h2>Our Recommendations:</h2>
        <div id='recommendations'>      
            <div className="recommendation">
                <h3>We recommend purchasing:</h3>
            <img 
                src="https://cdn.freelogovectors.net/wp-content/uploads/2019/03/ccleanerlogo.png"
                alt="ccleaner"
            />
            <p>
                CCleaner is the number-one tool for cleaning your PC.
                It protects your privacy and makes your computer faster and more secure!
            </p>
                <a target="_blank" href="http://www.ccleaner.com" rel="noopener noreferrer" ><button>Purchase</button></a>
            </div>
            <div className="recommendation">
                <h3>We recommend purchasing:</h3>
                <img 
                    src="https://blog.malwarebytes.com/wp-content/uploads/2016/08/MB_LOGO_BLUE.png"
                    alt="malwarebytes"
                />
                <p>
                    Multiple layers of malware-crushing tech, including virus protection. 
                    Thorough malware and spyware removal. 
                    Specialized ransomware protection.
                </p>
                <a target="_blank" href="http://www.malwarebytes.com" rel="noopener noreferrer" ><button>Purchase</button></a>
            </div>
        </div>   
        </Fragment>
    }    
    </Fragment>
    )
}

export default GradeCard