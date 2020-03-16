import React, { Fragment } from 'react';

const listing = (props) => {
    const itrA = ({listData}) =>{
        if(listData){
            return listData.map((item)=>{
                return(
                    <div className="container" key={item.id}>
                        <div style={{background:`url(images/articles/${item.img})`, height:'200px'}}>
                            <div className="title-div">
                                <span>{item.category}</span>
                                <p className='title'>{item.title}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return(
        <Fragment>
            {itrA(props)}
        </Fragment>
    )
}

export default listing;