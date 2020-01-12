import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <nav>
                <div id="logo">Reb <i className="fas fa-power-off"></i><i className="far fa-smile"></i>t <span></span>Timer <i className="fas fa-hourglass-end"></i></div>
                <div id="about">
                    <ul className="links">
                        <li><a target="_blank" href="http://www.ccleaner.com" rel="noopener noreferrer" >ccleaner</a></li>
                        <li><a target="_blank" href="http://www.malwarebytes.com" rel="noopener noreferrer" >malwarebytes</a></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header