import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/dipProekt";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        image={require('static/images/block/1.jpg')}
        title="Дипломный проект"
        text={<div>
            <p>Быстро и качественно!</p>
            <p>Ваши и наши данные</p>
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