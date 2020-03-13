import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
    return(
        <Fragment>
            <header className='header'>
                <Link to="/"><h1>MyApp</h1></Link>
            </header>
        </Fragment>
    )
}

export default Header;