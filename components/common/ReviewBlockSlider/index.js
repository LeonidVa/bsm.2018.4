import React, { Component } from 'react';
import Slider from 'react-slick';
import {
  BlockSliderReviewsItem,
  ReviewBlock,
  ReviwsAuthor,
  ImgBlock,
  ReviewsAuthorData,
  ReviewsName,
  ReviewsJob,
  BlockSliderSlideReview,
  BlockSliderReview,
  BlockSliderReviwsBlock
} from './style.js';

const Review = ({ faceImg, reviewText, bottom, name, prof }) => (
  <BlockSliderReviewsItem className="block-slider__reviews-item">
    <ReviewBlock className={`review ${bottom ? 'review-bottom': ''}`}
    bottomreview = {bottom ? true : false}
    >
        {reviewText}
    </ReviewBlock>
    <ReviwsAuthor className="reviews-author">
        <ImgBlock src={faceImg} alt={prof + ' ' + name} />
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
      <BlockSliderReviwsBlock className="block-slider__reviews-block">
        <Review faceImg={client.avatar}
          reviewText={client.text}
          name={client.name}
          prof={client.prof}
          bottom={false}
        />
        <Review faceImg={manager.avatar}
          reviewText={manager.text}
          name={manager.name}
          prof={manager.prof}
          bottom={true}
        />
      </BlockSliderReviwsBlock>
    </BlockSliderSlideReview>
  )
}

const renderBlocks = (reviewBlockConfig) =>{
  return reviewBlockConfig.map((item, index)=>(
    <Block  
      key={index}
      client={item.client}
      manager={item.manager}
      blocksCount={reviewBlockConfig.length}
    />
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
          }
        ]
      };

      return (
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