import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/referat";
import React from "react";


export default () => (
    <ServiceBlock
        color="#000000"
        url="/diplom-na-zakaz"
        image={require('static/images/block/g.jpg')}
        gradient="rgba(131, 187, 148, 0.95), rgba(131, 187, 148, 0.7)"
        title="Удобный офис"
        text={<div>
            <p>Всегда на связи 8:00 – 22:00</p>
            <p>Работаем в выходные и праздники</p>
            <p>Уютный офис в Центре</p>
            <p>4 линии метро</p>
            <p>Всего 5 минут пешком от метро</p>
        </div>}
    />
);