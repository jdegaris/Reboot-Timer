import React, { Fragment } from 'react';

const Instructions = () => {
    return (
        <Fragment>
            <p><span className="bang">Before beginning please make sure to:</span></p>
            <ol id="instructions">
                <li>Close any other tabs that may be open in your browser</li>
                <li>Save all work and close any other open programs on your computer</li>
                <li>Read each step entirely before taking action.</li>
            </ol>
        </Fragment>
    )
}

export default Instructions