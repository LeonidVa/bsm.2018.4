import React from "react";
import Link from "next/link";


const CardPopInfo = ({title = "", text = "", url = "", description = []}) => {
    let el = (
        <div className="b-item">
            <div className="b-item__content">
                <div className="block-service__list-title">{title}</div>
                {text}
            </div>
            <div className="b-item__hovered">
                {description.map(item => (
                    <div className="b-item__hovered-text">{item}</div>
                ))}
            </div>
        </div>);
    if (url !== "") {
        el = (
            <Link href="">
                <a className="block-service__list-item b-list-item">
                    {el}
                </a>
            </Link>);
    } else {
        el = <div className="block-service__list-item b-list-item">{el}</div>
    }
    return el;
};

export default CardPopInfo;
