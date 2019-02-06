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
import QualityBlock from "components/common/QualityBlock/index.js"

<QualityBlock 
  img="/static/images/slide-profits/6.svg"
  text="100 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!"
  title="Высокое качество"
/>
<QualityBlock 
  img="/static/images/slide-profits/6.svg"
  text="100 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!"
  title="Высокое качество"
  Class="w33"
/>
<QualityBlock 
  img="/static/images/slide-profits/6.svg"
  text="100 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!"
  title="Высокое качество"
  Class="w66"
/>
<QualityBlock 
  img="/static/images/slide-profits/6.svg"
  text="100 Вы получите отлично написанную и правильно оформленную работу. Закажите доклад и пару слайдов. Вы уверены в своей курсовой!"
  title="Высокое качество"
  Class="w50"
/>
```