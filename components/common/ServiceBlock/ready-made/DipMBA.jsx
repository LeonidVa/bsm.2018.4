import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/dipMBA";
import React from "react";


export default () => (
    <ServiceBlock
        color="#f5f5f5"
        url="#form"
        image={require('static/images/block/8.jpg')}
        gradient="rgba(106, 142, 172, 0.75)"
        title="Диплом MBA"
        text={<div>
            <p>Решаем кейсы любой сложности</p>
            <p>С нами твоя защита пройдет легко!</p>
            <p>От 25 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Дипломный проект"],
                servicecards["Магистерская диссертация"],
                servicecards["Дипломная работа"],
            ],
        ]}
    />
);