import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/disserRaboty";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        url="/dissertaciya-na-zakaz"
        image={require('static/images/block/3.jpg')}
        gradient="rgba(167, 172, 176, 0.75)"
        title="Диссертационные работы"
        text={<div>
            <p>Написание и оформление</p>
            <p>Публикации</p>
            <p>Строго конфиденциально</p>
            <p>Индивидуально</p>
        </div>}
        cards={[
            [
                servicecards["Аспирантские работы"],
                servicecards["Статьи"],
                servicecards["Кандидатская диссертация"],
                servicecards["Докторская диссертация"],
            ],
        ]}
    />
);