import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/dipProekt";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        url="#form"
        image={require('static/images/block/1.jpg')}
        gradient="rgba(140, 189, 1, 0.95), rgba(140, 189, 1, 0.7)"
        title="Дипломный проект"
        text={<div>
            <p>Быстро и качественно!</p>
            <p>С нами твоя защита пройдет легко</p>
            <p>От 21 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Дипломная работа"],
                servicecards["Магистерская диссертация"],
                servicecards["Диплом MBA"],
            ],
        ]}
    />
);