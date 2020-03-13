import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {latestNews} from '../action'
import Listing from '../component/Listing'

class Home extends Component{

    componentDidMount(){
        this.props.latestNews()
    }

    render(){
        return(
            <Listing listData={this.props.articles.latestdata}/>
        )
    }
}

function mapStateToProps(state){
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)