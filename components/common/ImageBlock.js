import React from 'react';
import styled from 'styled-components'

const BlockImg = styled.section`
  font-size: 2em;
  width: 30.94em;
  max-width: 100%;
  margin: 1.56em auto 0;
  position: relative;
  z-index: 1;
  @media (max-width: 900px) {
    width: 100%;
  }
  img {
    display: block;
    width: 100%;
  }
`;

const ImageBlock = ({imageSrc, altText}) => (
    <BlockImg className="block-img">
        <img src={imageSrc} alt={altText}/>
    </BlockImg>
);

export default ImageBlock