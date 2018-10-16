import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/doctorskayaDis";
import React from "react";


export default () => (
    <ServiceBlock
        color="#fffaf4"
        url="#form"
        image={require('static/images/block/9.jpg')}
        gradient="rgba(25, 84, 184, 0.75)"
        title="Докторская диссертация"
        text={<div>
            <p>Актуальность и научная новизна</p>
            <p>Ваши и наши данные</p>
            <p>Строго конфиденциально</p>
            <p>Индивидуально</p>
        </div>}
        cards={[
            [
                servicecards["Прямая связь с автором"],
                servicecards["Публикации"],
                servicecards["Обзор литературы"],
            ],
        ]}
    />
);