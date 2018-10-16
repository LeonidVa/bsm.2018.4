import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/referat";
import React from "react";


export default () => (
    <ServiceBlock
        color="#000000"
        url="#form"
        image={require('static/images/block/ref1.jpg')}
        gradient="rgba(131,187,148,0.75)"
        title="Реферат"
        text={<div>
            <p>Не парься сам – доверься нам!</p>
            <p>Легко разберёшься, точно сдашь!</p>
            <p>От 1 500 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Отчет по практике"],
                servicecards["Курсовая работа"],
                servicecards["Эссе Контрольная"],
                servicecards["Экзамены Тесты"],
                servicecards["Курсовой проект"],
            ],
        ]}
    />
);