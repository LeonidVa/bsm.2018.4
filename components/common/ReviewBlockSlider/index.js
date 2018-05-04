import React, { Component } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import { isMobile } from 'react-device-detect';

import '../slick.scss'

const Review = ({ faceImg, reviewText, bottom, name, prof }) => (

        <div className="block-slider__reviews-item">
            <p className={`review ${bottom ? 'review-bottom': ''}`}>
                {reviewText}
            </p>
            <div className="reviews-author">
                <img src={faceImg} alt="" />
                <div className="reviews-author__data">
                    <span className="reviews-name">{name}</span>
                    <span className="reviews-job job-orange">{prof}</span>
                </div>
            </div>
        </div>

)


const Block = (props)=> {
  
        const { faceImg, reviewText, name, prof, faceImgBot, reviewTextBot, nameBot, profBot } = props;
        return (
                <div className="block-slider__slide review">
                    
                        <div className="block-slider__reviews-block">
                            <Review faceImg={faceImg} 
                                    reviewText={reviewText} 
                                    name={name} 
                                    prof={prof} 
                                    bottom={false}/>
                            <Review faceImg={faceImgBot} 
                                    reviewText={reviewTextBot} 
                                    name={nameBot} 
                                    prof={profBot} 
                                    bottom={true}/>     
                        </div>
                </div>
            )
    
}


const renderBlocks = (reviewBlockConfig) =>{

    return reviewBlockConfig.map((item, index)=>(
            <Block  
                    key={index}
                    faceImg={item.faceImg}
                    faceImgBot={item.faceImgBot}
                    reviewText={item.reviewText}
                    reviewTextBot={item.reviewTextBot}
                    name={item.name}
                    nameBot={item.nameBot}
                    prof={item.prof}
                    profBot={item.profBot}
                    blocksCount={reviewBlockConfig.length} />
    ))
}


class ReviewSlider extends Component{
   

    render(){
        const { reviewBlockConfig } = this.props;
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: reviewBlockConfig.length - 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            arrows: !isMobile,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: reviewBlockConfig.length - 3,
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: reviewBlockConfig.length - 2,
                    }
                },

            ]
        };
        
        return(
            <section className="block-slider review">
                <div className="slick">
                        <Slider {...settings}> 
                            {renderBlocks(reviewBlockConfig)}
                        </Slider>
                </div>
            </section>
        )
    }
}

export default ReviewSlider;

