import React from "react";

const CardPopInfo = ({ color, title, cost, days, description = [] }) => {
  return (
    <div className="b-item">
      <div className="b-item__content">
        <div className="block-service__list-title">{title}</div>
        <p>{cost}</p>
        <p>{days}</p>
      </div>
      <div className="b-item__hovered" style={{backgroundColor: color}}>
        {description.map(item => (
          <div className="b-item__hovered-text">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default CardPopInfo;
