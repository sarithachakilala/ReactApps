import React, {Component} from 'react';

class LifeCycle extends Component {
    //1, Get Initaial state
    constructor(props) {
        super()
        console.log("Inside Constructore");
        //2, set initial state
        this.state = {
            title: 'Life Cycle Methods'
        }
    }

    //3 before getting created -- it will execute before component created (or) before render method
    // TO maintain state -- deprecated
    componentWillMount(){
        console.log("COMPONENT WILL MOUNT");
    }

    // componentWillUpdate - It will excute before updating the state -- deprecated
    componentWillUpdate(){
        console.log("comonentWillUpdate");
    }

    // Componnet did update will execute after state change
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    // It will excute when the state value gets changes
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextState.title === this.state.title){
    //         return false
    //     }else{
    //         return true
    //     }
    // }
    //4, render
     render(){
        console.log("RENDER");
        return(
            <div>
                <h1> {this.state.title}</h1>
                <button onClick={()=>{this.setState({title: 'Title'})}} className="btn btn-primary">StateChange</button>
            </div>
        )
    }

    //5 after getting created -- it will execute after component created (or) after render method -- this method use in api calling because after the dom is ready
    componentDidMount(){
        console.log("COMPONENT DID MOUNT");
    }

    //excutes when we go out of component
    componentWillUnmount(){
        alert("Your Leaving Lifecycle Page..")
    }
}

export default LifeCycle;