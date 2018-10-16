import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/kursovayaRabota";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        gradient="rgba(52, 192, 228, 0.75)"
        url="/kursovaya-rabota-na-zakaz"
        image={require('static/images/block/7.jpg')}
        title="Курсовая работа"
        text={<div>
            <p>Не парься сам – доверься нам!</p>
            <p>Легко разберёшься, точно сдашь!</p>
            <p>От 4 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Отчет по практике"],
                servicecards["Реферат"],
                servicecards["Эссе Контрольная"],
                servicecards["Экзамены Тесты"],
                servicecards["Курсовой проект"],
            ],
        ]}
    />
);