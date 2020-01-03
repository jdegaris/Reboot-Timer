import React, { Fragment } from 'react';
import GradeCard from './GradeCard'

const Grades = () => {
    return (
    <Fragment>
        <div id="final-results">
            <h2>Final Grades</h2>
            <div className="grades-container">
                {localStorage.getItem('resultTime') &&
                    <GradeCard type={'reboot'} whole={localStorage.getItem('whole')} rem={localStorage.getItem('rem')} />
                }
                {localStorage.getItem('dl') && localStorage.getItem('ul') &&
                    <GradeCard type={'speed'} dl={localStorage.getItem('dl')} ul={localStorage.getItem('ul')} />
                }
                {localStorage.getItem('ram') &&
                    <GradeCard type={'ram'} ram={localStorage.getItem('ram')}/>
                }
                {localStorage.getItem('cpu') && localStorage.getItem('memory') &&
                    <GradeCard type={'usage'} cpu={localStorage.getItem('cpu')} memory={localStorage.getItem('memory') } />
                }
                
            </div>
        </div>
    </Fragment>
    )
}

export default Grades