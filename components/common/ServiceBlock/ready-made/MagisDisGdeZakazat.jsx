import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/magisDisGdeZakazat";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        url="#form"
        image={require('static/images/block/k.jpg')}
        gradient="rgba(251, 201, 1, 0.95), rgba(251, 201, 1, 0.7)"
        title="Магистерская диссертация"
        text={<div>
            <p>Быстро и качественно!</p>
            <p>С нами твоя защита пройдет легко!</p>
            <p>От 23 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Диссертация под ключ"],
                servicecards["Консультация автора"],
                servicecards["Сопровождение до защиты"],
            ],
        ]}
    />
);