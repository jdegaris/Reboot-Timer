import React, { Fragment, useState } from 'react';
import GradeCard from './GradeCard'

const Grades = () => {
    const [gradeCard, setGradeCard] = useState('reboot')
    return (
    <Fragment>
        <div id="final-results">
                {gradeCard !== 'recs' &&
                    <h2>Final Grades</h2>
                }
            
            <div className="grades-container">
                {gradeCard === 'reboot' &&
                    <GradeCard type={gradeCard} whole={Number(localStorage.getItem('whole'))} rem={localStorage.getItem('rem')} setGradeCard={setGradeCard} />
                }
                {gradeCard === 'speed' &&
                    <GradeCard type={gradeCard} dl={localStorage.getItem('dl')} ul={localStorage.getItem('ul')} setGradeCard={setGradeCard} />
                }
                {gradeCard === 'ram' &&
                    <GradeCard type={gradeCard} ram={localStorage.getItem('ram')} setGradeCard={setGradeCard} />
                }
                {gradeCard === 'usage' &&
                    <GradeCard type={gradeCard} memory={localStorage.getItem('memory')} setGradeCard={setGradeCard} />
                }
                {gradeCard === 'recs' &&
                    <GradeCard type={gradeCard}  />
                }
                
            </div>
        </div>
    </Fragment>
    )
}

export default Grades