import React, {Component} from 'react';
import Header from './Header';
import NewsListDisply from './NewListDisply'
import NewsList from '../list.json';

class Home extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Recat Data Load',
            news: NewsList,
            filterd: NewsList
        }
    }

    filterNews(keyword){
       const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })

       this.setState({filterd:output})
    }

    render(){
        const mystyle={
            header:{
                color:'tomato'
            },
            background:{
                backgroundColor: '#ffff',
                textAlign: 'center',
                color: 'tomato'
            }
        }
        return(
            <React.Fragment>
                <Header userText={(userInput) => {this.filterNews(userInput)}}/>
                <h1 style={mystyle.header}>{this.state.name}</h1>
                <h1 className="title">class Names</h1>
                <NewsListDisply datalist={this.state.filterd}/>
            </React.Fragment>
        )
    }
}

export default Home;