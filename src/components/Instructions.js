import React, { Fragment } from 'react';

const Instructions = () => {
    return (
        <Fragment>
            <p><span className="bang">Before beginning please make sure to:</span></p>
            <ol id="instructions">
                <li>Close all other tabs that may be open</li>
                <li>Save all work and close all other open programs</li>
                <li>Read each step entirely before taking action.</li>
            </ol>
        </Fragment>
    )
}

export default Instructions