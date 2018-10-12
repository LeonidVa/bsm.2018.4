import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/doctorskayaDis";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        image={require('static/images/block/doctorskaya.jpg')}
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