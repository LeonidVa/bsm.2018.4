import React, {Component} from 'react';
import Slider from "react-slick";
import {isMobile} from 'react-device-detect';
import "./index.scss"
import '../slick.scss'
import styled from "styled-components"

const BlockSlider = styled.section `
  margin: 1.56em auto 0;
  font-size: 2em;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    justify-content: space-around;
    margin: 0.5em auto;
  }
`;

const BlockSliderSlide = styled.div`
  font-size: 1em;
  margin: 0 auto;
  padding: 0 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const BlockProfitsItem = styled.div`
  display: block;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 1em;
  width: 9.59em;
  padding: 1.562em;
  background-color: #ffffff;
  &:nth-child(1) img,
  &:nth-child(3) img {
    width: 3.125em;
  }
  &:nth-child(2) img {
    width: 2.28em;
  }
  @media (max-width: 960px) {
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
  display: block;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 1em;
  width: 9.59em;
  padding: 1.562em;
  background-color: #ffffff;
  img {
    display: block;
    margin: 0 auto .625em;
    height: 3.125em;
  }
  &:nth-child(1) img,
  &:nth-child(3) img {
    width: 3.125em;
  }
  &:nth-child(2) img {
    width: 2.28em;
  }
  @media (max-width: 660px) {
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

const Img = styled.img`
  display: block;
  margin: 0 auto .625em;
  height: 3.125em;
`;

const BlockProfitsPar = styled.p`
  font-size: .5em;
  line-height: 1.5em;
  transition: all .4s;
`; 

const BlockProfitsTitle = styled.span`
  font-weight: 500;
  font-size: .625em;
  color: #4a4a4a;
  margin-bottom: .5em;
  position: relative;
  transition: all .4s;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 1px;
    background-color: #f4511e;
    top: 100%;
    left: 50%;
    transition: all .4s;
  }
`;

const Block = (props) => {

    const {imageSrc, title, description, url} = props;

    return (
        <BlockSliderSlide className="block-slider__slide">
            <BlockProfitsItem className="block-profits__item">
                <Img src={imageSrc} alt="profit" style={{objectFit: 'contain'}}/>
                <BlockProfitsTitle className="block-profits__title">{title}</BlockProfitsTitle>
                <BlockProfitsPar className="block-profits__par">
                    {description}
                </BlockProfitsPar>
            </BlockProfitsItem>
        </BlockSliderSlide>
    )
}


const renderBlocks = (profitBlockConfig) => {
    if (profitBlockConfig === undefined) {
        return ""
    }
    return profitBlockConfig.map((item, index) => (
        <Block
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            url={item.url}
            blocksCount={profitBlockConfig.length}/>
    ))
}


class ProfitSlider extends Component {


    render() {
        const {profitBlockConfig} = this.props;
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            arrows: true,
            easing: 'ease',
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
                        slidesToShow: 2,
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
        return (
            <BlockSlider className="block-slider" style={{maxWidth: (profitBlockConfig !== undefined && profitBlockConfig.length) < 5 ? '60%' : '100%'}}>
                <div className="slick">
                    <Slider {...settings}>
                        {renderBlocks(profitBlockConfig)}
                    </Slider>
                </div>
            </BlockSlider>
        )
    }
}

export default ProfitSlider;
