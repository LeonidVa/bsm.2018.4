import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/kandidatDis";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        image={require('static/images/block/kandidat.jpg')}
        title="Кандидатская диссертация"
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
                servicecards["Автореферат"],
                servicecards["Апробация"],
            ],
        ]}
    />
);