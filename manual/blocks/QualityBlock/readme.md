#QualityBlock

см. картинку

классы w33, w66 и w50 задают ширину элемента в процентах. см картинку и пример

## Пример
Широкий на десктопе
![QualityBlock image](./QualityBlockWide.png)

Узкий на планшете и телефоне
![QualityBlock image](./QualityBlockNarrow.png)

## Параметры
нет


### Пример использования
```jsx
<section className="block-quality">
    <ul className="quality-list">
        <li className="quality-list__item">
            <div className="quality-list__inner">
                <div className="quality-list__title-block">
                    <img src="/static/images/slide-profits/6.svg" alt="" />
                    <span className="quality-list__title">Высокое качество</span>
                </div>
                <p className="quality-list__description">
                    100 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
                </p>
            </div>
        </li>
        <li className="quality-list__item w50">
            <div className="quality-list__inner">
                <div className="quality-list__title-block">
                    <img src="/static/images/slide-profits/6.svg" alt="" />
                    <span className="quality-list__title">Высокое качество</span>
                </div>
                <p className="quality-list__description">
                   50 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
                </p>
            </div>
        </li>
        <li className="quality-list__item w50">
            <div className="quality-list__inner">
                <div className="quality-list__title-block">
                    <img src="/static/images/slide-profits/6.svg" alt="" />
                    <span className="quality-list__title">Высокое качество</span>
                </div>
                <p className="quality-list__description">
                   50 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
                </p>
            </div>
        </li>
        <li className="quality-list__item w33">
            <a className="quality-list__inner" href="ya.ru">
                <div className="quality-list__title-block">
                    <img src="/static/images/slide-profits/6.svg" alt="" />
                    <span className="quality-list__title">Высокое качество</span>
                </div>
                <p className="quality-list__description">
                   33 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
                </p>
            </a>
        </li>
        <li className="quality-list__item w66">
            <div className="quality-list__inner">
                <div className="quality-list__title-block">
                    <img src="/static/images/slide-profits/6.svg" alt="" />
                    <span className="quality-list__title">Высокое качество</span>
                </div>
                <p className="quality-list__description">
                   66 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!
                </p>
            </div>
        </li>
    </ul>
</section>
```