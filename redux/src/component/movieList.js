import React from 'react';

const MovieList = (props) => {
    console.log(`props : ${props.mydata}`);
    const movies = ({mydata}) => {
       if(mydata){
            return mydata.map((item) => {
                return(
                    <div key={item.id}>{item.name}</div>
                )
                })
            
       }
    }
    return(
        <div>
            {movies(props)}
        </div>
    )
}

export default MovieList;