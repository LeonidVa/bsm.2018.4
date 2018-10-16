import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/esse";
import React from "react";


export default () => (
    <ServiceBlock
        color="#ffffff"
        url="#form"
        image={require('static/images/block/i.jpg')}
        gradient="rgba(180, 61, 101, 0.95), rgba(180, 61, 101, 0.7)"
        title="Эссе"
        text={<div>
            <p>Не парься сам – доверься нам!</p>
            <p>Легко разберёшься, точно сдашь!</p>
            <p>От 1 500 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Отчет по практике"],
                servicecards["Реферат"],
                servicecards["Курсовая работа"],
                servicecards["Экзамены Тесты"],
                servicecards["Курсовой проект"],
            ],
        ]}
    />
);