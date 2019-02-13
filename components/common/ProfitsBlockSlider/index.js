import React, {Component} from 'react';
import Slider from "react-slick";
import {isMobile} from 'react-device-detect';

import {
    BlockSlider,
    BlockSliderSlide,
    BlockProfitsItem,
    Img,
    BlockProfitsPar,
    BlockProfitsTitle,
    DivSlick
} from "./style.js"

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
                <DivSlick className="slick">
                    <Slider {...settings}>
                        {renderBlocks(profitBlockConfig)}
                    </Slider>
                </DivSlick>
            </BlockSlider>
        )
    }
}

export default ProfitSlider;
