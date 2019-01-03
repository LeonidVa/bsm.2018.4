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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: space-around;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-around;
  -ms-flex-pack: justify;
  align-items: flex-start;
  -webkit-box-align: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: flex-start;
`;

const BlockProfitsItem = styled.div`
  width: 8.59em;
  padding: 1em;
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

const Block = (props) => {

    const {imageSrc, title, description, url} = props;

    return (
        <BlockSliderSlide className="block-slider__slide">
            <BlockProfitsItem className="block-profits__item">
                <Img src={imageSrc} alt="profit" style={{objectFit: 'contain'}}/>
                <span className="block-profits__title">{title}</span>
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
