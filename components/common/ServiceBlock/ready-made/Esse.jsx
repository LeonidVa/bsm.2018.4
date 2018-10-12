import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/esse";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        image={require('static/images/block/esse1.jpg')}
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