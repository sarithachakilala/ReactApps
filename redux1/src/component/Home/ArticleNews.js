import React from 'react';


const ArticleNews = (props) => {
    const getArticles = ({articleData}) => {
        if(articleData) {
            return articleData.map((item)=>{
                return (
                    <span key={item.id}>{item.title}</span>
                )
            })
        }
    }

    return(
        <div className='title-div'>
            {getArticles(props)}
        </div>
    )
}

export default ArticleNews;