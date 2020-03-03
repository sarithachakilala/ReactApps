import React from 'react';

const NewlistDisplay = (props) => {
    console.log(`Newslist ${props.datalist}`)
    return(
            props.datalist.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.feed}</p>
                </div>
                    
            ))
    )
}

export default NewlistDisplay;