import React, { Component } from 'react';
import Slider from "react-slick";
import { isMobile } from 'react-device-detect';
import "./index.scss"
import styles from 'styled-components'

const BlockSliderReviewsItem = styles.div`
    padding: .38em;
`; 

const Review = styles.p`
    font-size: .5em;
    color: #4a4a4a;
    line-height: 1.5;
    margin-bottom: .31em;
    &-bottom {
        font-weight: 700;
    }
`;

const ReviwsAuthor = styles.div`
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: flex-start;
    -webkit-box-pack: justify;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: justify;
    align-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    padding-top: 0.5rem;
`;

const Img = styles.img`
        margin: 0;
        font-size: 1em;
        width: 1.72em;
        height: 1.72em;
`;

const ReviewsAuthorData = styles.div`
padding-left: 0.5rem;
`;

const ReviewsName = styles.span`
        display: block;
        font-size: .59em;
        color: #191919;
        line-height: normal;
`;

const ReviewsJob = styles.span`
display: block;
        font-size: .5em;
        color: #c0c0c0;
        line-height: normal;
        &.job-orange {
            color: #f4511e;
        }
`;




const BlockSliderSlideReview = styles.div`
max-width: 100% !important;
// position: relative ;
// z-index:3  ;
`;


const BlockSliderReview = styles.section `
max-width: 100%;
`;


const Review = ({ faceImg, reviewText, bottom, name, prof }) => (

        <BlockSliderReviewsItem className="block-slider__reviews-item">
            <Review className={`review ${bottom ? 'review-bottom': ''}`}>
                {reviewText}
            </Review>
            <ReviwsAuthor className="reviews-author">
                <Img src={faceImg} alt={"Студент " + name} />
                <ReviewsAuthorData className="reviews-author__data">
                    <ReviewsName className="reviews-name">{name}</ReviewsName>
                    <ReviewsJob className={`reviews-job ${bottom ? 'job-orange': ''}`}>{prof}</ReviewsJob>
                </ReviewsAuthorData>
            </ReviwsAuthor>
        </BlockSliderReviewsItem>

)


const Block = (props)=> {
  
        const { client, manager } = props;
        return (
                <BlockSliderSlideReview className="block-slider__slide review">
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
                </BlockSliderSlideReview>
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
            <BlockSliderReview className="block-slider review">
                <div className="slick">
                        <Slider {...settings}> 
                            {renderBlocks(reviewBlockConfig)}
                        </Slider>
                </div>
            </BlockSliderReview>
        )
    }
}

export default ReviewSlider;

