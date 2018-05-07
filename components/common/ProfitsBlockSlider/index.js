
import React, {Component } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import { isMobile } from 'react-device-detect';

import '../slick.scss'

const Block = (props)=>{

        const { imageSrc, title, description } = props;

        return(
  
                <div className="block-slider__slide">
               
                        <a className="block-profits__item">
                            <img src={imageSrc} alt="profit" style={{objectFit: 'contain'}}/>
                            <h3 className="block-profits__title">{title}</h3>
                            <p className="block-profits__par">
                                {description}   
                            </p>
                        </a>
                 
                </div>


        )
}


const renderBlocks = (profitBlockConfig) => {

    return profitBlockConfig.map((item, index) => (
        <Block 
               key={index} 
               imageSrc={item.imageSrc} 
               title={item.title}
               description={item.description}
               blocksCount={profitBlockConfig.length} />
    ))
}


class ProfitSlider extends Component{


    render(){
        const { profitBlockConfig } = this.props
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: profitBlockConfig.length - 1,
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
                        slidesToShow: profitBlockConfig.length - 3,
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: profitBlockConfig.length - 2,
                    }
                },
               
            ]
        };
        return(
            <section className="block-slider" style={{ maxWidth: profitBlockConfig.length < 5 ? '60%' : '100%'}}>        
                <div className="slick3">
                    <Slider {...settings}>           
                        {renderBlocks(profitBlockConfig)}
                    </Slider>
                </div>
            </section>
        )
    }
}

export default ProfitSlider;