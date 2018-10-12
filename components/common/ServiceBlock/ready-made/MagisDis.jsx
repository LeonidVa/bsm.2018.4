import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/magisDis";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        image={require('static/images/block/k.jpg')}
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