import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Component/Home';

//functional Component

const App = () => {
    return(
        <React.Fragment>
        <Home/>
        {/* inline styling */}
         <h1 style={{color: 'red'}}>React!!</h1>
         <h1>This is from test</h1>
         </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
