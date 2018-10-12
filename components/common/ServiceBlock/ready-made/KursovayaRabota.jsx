import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/kursovayaRabota";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        image={require('static/images/block/kurs-rab.jpg')}
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