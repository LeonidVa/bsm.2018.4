import React from 'react';
import {BlockImg} from './style.js'

const ImageBlock = ({imageSrc, altText}) => (
    <BlockImg className="block-img">
        <img src={imageSrc} alt={altText}/>
    </BlockImg>
);

export default ImageBlock