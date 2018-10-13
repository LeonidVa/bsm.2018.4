import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceBlock/matzash";


export default () => (
    <ServiceBlock
        color="#f5f5f5"
        image={require('static/images/block/l.jpg')}
        title="Материалы для успешной защиты"
        text={<div>
            <p>Не парься сам – доверься нам!</p>
            <p>Легко разберёшься, точно сдашь!</p>
            <p>Доступные цены</p>
            <p>Срочно от 2 часов</p>
        </div>}
        cards={[
            [
                servicecards["Пакет «Успешная Защита»"],
                servicecards["Доклад"],
                servicecards["Оригинальность текста"],
                servicecards["Ответы к защите"],
            ],
            [
                servicecards["Аннотация Отзыв Рецензия"],
                servicecards["Мини-диплом Раскладка"],
                servicecards["Получение по главам"],
                servicecards["Слайды"],
                servicecards["Распечатка Переплеты"],
            ],
        ]}
    />
);