import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import Post from './Post';
import Profile from './Profile';
import Postdetail from './Postdetail';
import LifeCycle from './LifeCycle'

// import './index.css';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link to="#" className="navbar-brand">Cognizant</Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/post">Post</Link></li>
                                <li> <Link to="/profile">Profile</Link></li>
                                <li><Link to="/lifecycle">LifeCycle</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <Route exact path="/" component={Home} />
                <Route exact path="/post" component={Post} />
                <Route path="/post/:course" component={Postdetail} />
                <Route path="/profile" component={Profile} />
                <Route path="/lifecycle" component={LifeCycle} />
            </div> 
        </BrowserRouter>
    )
}

export default Routing;