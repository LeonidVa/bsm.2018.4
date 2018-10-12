import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/kontrolnaya";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        image={require('static/images/block/kontr-ekz.jpg')}
        title="Контрольная работа"
        text={<div>
            <p>Не парься сам – доверься нам!</p>
            <p>Легко разберёшься, точно сдашь!</p>
            <p>От 2 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Отчет по практике"],
                servicecards["Реферат"],
                servicecards["Эссе"],
                servicecards["Экзамены Тесты"],
                servicecards["Курсовой проект"],
            ],
        ]}
    />
);