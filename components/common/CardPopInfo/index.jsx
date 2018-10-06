import React from "react";
import Link from "next/link";
import {isMobile, isTablet} from 'react-device-detect';

const CardPopInfo = ({title = "", text = "", url = "", description = []}) => {
    const drawDesktop = () => {
        const el = (
            <div className="b-item">
                <div className="b-item__content">
                    <div className="block-service__list-title">{title}</div>
                    {text}
                </div>
                <div className="b-item__hovered">
                    <div className="b-item__hovered-text">{description}</div>
                </div>
            </div>
        );
        if (url === "") {
            return <div className="block-service__list-item b-list-item">{el}</div>;
        }
        return (
            <Link href={url}>
                <a className="block-service__list-item b-list-item">
                    {el}
                </a>
            </Link>
        );
    };
    const drawMobile = () => {
        return (
            <div className="block-service__list-item mobile">
                <div className="block-service__list-title">{title}</div>
                {text}
                <div className="block-service__m-description">
                    {description}
                    <Link href={url}>
                        <a className="block-service__m-description-button">
                            Press me!
                        </a>
                    </Link>
                </div>
            </div>)
    };

    if (isMobile) {
        return drawMobile();
    }
    return drawDesktop();


};

export default CardPopInfo;
