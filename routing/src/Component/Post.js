import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">Post Page</div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h3>About Post</h3>
                    <p>home by Nilkamal, Furniture, Decor, Home decor. ... COD on Furniture exclusively by @home! Buy furniture worth Up to 10,000/- and avail COD option within ...</p>                
                </div>
                <h3>Java</h3>
                <Link to="/post/Java">Details</Link>
                <h3>Ruby</h3>
                <Link to="/post/Ruby">Details</Link>
                <h3>Rails</h3>
                <Link to="/post/Rails">Details</Link>
                <h3>Java Script</h3>
                <Link to="/post/Javascript">Details</Link>
                <h3>React</h3>
                <Link to="/post/React">Details</Link>
                <h3>Node</h3>
                <Link to="/post/Node">Details</Link>
            </div>
        </div>
    )
}

export default Post;