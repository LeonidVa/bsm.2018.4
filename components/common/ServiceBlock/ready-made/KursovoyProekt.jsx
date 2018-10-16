import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/kursovoyProekt";
import React from "react";


export default () => (
    <ServiceBlock
        color="#ffffff"
        url="#form"
        image={require('static/images/block/kurs-proekt1.jpg')}
        gradient="rgba(70, 111, 131, 0.95), rgba(70, 111, 131, 0.7)"
        title="Курсовой проект"
        text={<div>
            <p>Не парься сам – доверься нам!</p>
            <p>Легко разберёшься, точно сдашь!</p>
            <p>От 8 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Отчет по практике"],
                servicecards["Реферат"],
                servicecards["Эссе Контрольная"],
                servicecards["Экзамены Тесты"],
                servicecards["Курсовая работа"],
            ],
        ]}
    />
);