import React, { Component } from 'react';
import Slider from "react-slick";
import { isMobile } from 'react-device-detect';
import "./index.scss"


const Review = ({ faceImg, reviewText, bottom, name, prof }) => (

        <div className="block-slider__reviews-item">
            <p className={`review ${bottom ? 'review-bottom': ''}`}>
                {reviewText}
            </p>
            <div className="reviews-author">
                <img src={faceImg} alt="" />
                <div className="reviews-author__data">
                    <span className="reviews-name">{name}</span>
                    <span className={`reviews-job ${bottom ? 'job-orange': ''}`}>{prof}</span>
                </div>
            </div>
        </div>

)


const Block = (props)=> {
  
        const { client, manager } = props;
        return (
                <div className="block-slider__slide review">
                        <div className="block-slider__reviews-block">
                            <Review faceImg={client.avatar}
                                    reviewText={client.text}
                                    name={client.name}
                                    prof={client.prof}
                                    bottom={false}/>
                            <Review faceImg={manager.avatar}
                                    reviewText={manager.text}
                                    name={manager.name}
                                    prof={manager.prof}
                                    bottom={true}/>     
                        </div>
                </div>
            )
    
}


const renderBlocks = (reviewBlockConfig) =>{

    return reviewBlockConfig.map((item, index)=>(
            <Block  
                    key={index}
                    client={item.client}
                    manager={item.manager}
                    blocksCount={reviewBlockConfig.length} />
    ))
}


class ReviewSlider extends Component{
   

    render(){
        const { reviewBlockConfig } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
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

