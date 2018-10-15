import React, {Component} from 'react';
import Slider from "react-slick";
import {isMobile} from 'react-device-detect';
import "./index.scss"
import '../slick.scss'

const Block = (props) => {

    const {imageSrc, title, description, url} = props;

    return (

        <div className="block-slider__slide">
            <div className="block-profits__item">
                <img src={imageSrc} alt="profit" style={{objectFit: 'contain'}}/>
                <span className="block-profits__title">{title}</span>
                <p className="block-profits__par">
                    {description}
                </p>
            </div>
        </div>


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
            <section className="block-slider" style={{maxWidth: (profitBlockConfig !== undefined && profitBlockConfig.length) < 5 ? '60%' : '100%'}}>
                <div className="slick">
                    <Slider {...settings}>
                        {renderBlocks(profitBlockConfig)}
                    </Slider>
                </div>
            </section>
        )
    }
}

export default ProfitSlider;
