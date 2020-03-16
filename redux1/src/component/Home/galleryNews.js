import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const galleryNews = (props) => {
    const galleryItr = ({galleryData}) => {
        if(galleryData) {
            return (
                <Slider {...settings}>
                    {
                        galleryData.map((item)=>{
                            return(
                            
                                <div>
                                    <div className="image"
                                    style={{background:`url(/images/galleries/${item.images[0].img})`}}>
                                    </div>
                                 </div>
                            )
                        })
                    }
                </Slider>
            )
        }
    }
    return(
        <div className="home-gallery">
            <h1>Home Gallery</h1>
            {galleryItr(props)}
        </div>    
    )
}

export default galleryNews