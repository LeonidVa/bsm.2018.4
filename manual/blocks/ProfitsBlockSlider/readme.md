# ProfitsBlockSlider

Слайдер с карточками предложений

### Пример
![ProfitsBlockSlider image](./ProfitsBlockSlider.png)

### Параметры
###profitBlockConfig
infoBlockConfig это массив объектов с полями imageSrc для икноки, title для главного текста и description для дополнительного.

Формат простой:
```js
[
    {
        imageSrc: slideProfit_1,
        title: "Высокое качество",
        description: "Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!"
    },
    {
        imageSrc: slideProfit_2,
        title: "Уникальность",
        description: "Ваша курсовая легко пройдет строгие проверки текста в АП, АП.вуз, Etxt, Advego до нужного процента! "
    },
    {
        imageSrc: slideProfit_3,
        title: "Высокое качество",
        description: "Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!"
    },
    {
        imageSrc: slideProfit_4,
        title: "Уникальность",
        description: "Ваша курсовая легко пройдет строгие проверки текста в АП, АП.вуз, Etxt, Advego до нужного процента! "
    },
]
```

### Пример использования
```js
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import profitBlockConfigLong from 'components/config/profitBlockConfig';

<ProfitsBlockSlider profitBlockConfig={profitBlockConfigLong}/>
```