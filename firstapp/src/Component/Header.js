import React from 'react'
import './Header.css'

// Functional Component
class Header extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            text: 'User Text Here'
        }
    }

   searchInput(event){
        this.setState({text:event.target.value ? event.target.value : "User text here" })
        this.props.userText(event.target.value)
   }

    render(){
        return(
            <header>
                <h1>My First React App</h1>
                <input placeholder="Your Text Here" onChange={this.searchInput.bind(this)}
                /><br/>
                <span className='title'>{this.state.text}</span>
            </header>
        )
    }

}
// const Header = (props) => {
//     return(
//         <header>
//             <h1>My First React App</h1>
//             <input placeholder="Your Text Here"/>
//         </header>
//     )
// }

export default Header;