import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/otchPoPrak";
import React from "react";


export default () => (
    <ServiceBlock
        color="#333333"
        image={require('static/images/block/otch-prakrik1.jpg')}
        title="Магистерская диссертация"
        text={<div>
            <p>Не парься сам – доверься нам!</p>
            <p>Легко разберёшься, точно сдашь!</p>
            <p>От 3 000 руб.</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Курсовая работа"],
                servicecards["Реферат"],
                servicecards["Эссе Контрольная"],
                servicecards["Экзамены Тесты"],
                servicecards["Курсовой проект"],
            ],
        ]}
    />
);