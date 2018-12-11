import React from 'react';
import './index.scss';

const renderInfoItems = (infoBlockConfig)=>(
    infoBlockConfig.map((item, index)=>(
      <div className="block-info__item" key={index}>
        <img src={item.icon} alt="" />
            <div className="block-info__text">
              <span className="block-info__title">{item.title}</span>
              <span className="block-info__par">{item.desc}</span>
            </div>
        </div>
    ))
)

const InfoBlock = ({infoBlockConfig})=> (
    	<section className="block-info">
			{renderInfoItems(infoBlockConfig)}
		</section>
)

export default InfoBlock;