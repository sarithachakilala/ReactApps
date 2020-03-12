import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { moviesList } from '../action';
import MovieList from '../component/movieList';


class App extends React.Component{
    componentDidMount(){
        this.props.moviesList()
    }
    render(){
        console.log(this.props.mydata);
        return(
            <Fragment>
                <MovieList mydata={this.props.mydata}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        mydata: state.movies
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({moviesList}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App)