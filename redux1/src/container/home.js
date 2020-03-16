import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {latestNews, articleNews, gallery} from '../action'
import Listing from '../component/Home/latestNews'
import ArticleNews from '../component/Home/ArticleNews'
import GaaleryNews from '../component/Home/galleryNews'

class Home extends Component{

    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
        this.props.gallery()
    }

    render(){
        return(
            <Fragment>
                <Listing listData={this.props.articles.latestdata} />
                <ArticleNews articleData={this.props.articles.articledata} />    
                <GaaleryNews galleryData={this.props.gallaries.galleryData}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        articles: state.articles,
        gallaries: state.gallaries
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, articleNews, gallery}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)