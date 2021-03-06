import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/diplom";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        url="#form"
        image={require('static/images/block/j.jpg')}
        gradient="rgba(199, 212, 229, 0.95), rgba(199, 212, 229, 0.7)"
        title="Доработка дипломной работы"
        text={<div>
            <p>Быстро и качественно!</p>
            <p>С нами твоя защита пройдет легко!</p>
            <p>От 14 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Дипломный проект"],
                servicecards["Магистерская диссертация"],
                servicecards["Диплом MBA"],
            ],
        ]}
    />
);