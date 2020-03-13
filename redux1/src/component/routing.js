import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react'
import Home from '../container/home'
import Header from '../component/header'
import Footer from './Footer';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home} />
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing