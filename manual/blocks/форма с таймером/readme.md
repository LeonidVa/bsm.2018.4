# Форма с таймером

Форма с таймером ограничена всего одним полем и одной кнопкой, призвана получить телефон посетителя на порыве в обмен на ограниенное предложение.

## Пример
![timer form image](./timerform.png)

## Элементы
### Картинка
Картинка устанавливается через `style` контейнера. См. пример.

## Параметры
**timerDuration** *integer*

Длительность таймера.

**timerSize** *float*

Размер шрифта таймера. Использовать не обязательно вовсе.



### Пример использования
```jsx
import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

<section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
    <h2 className="block-form-timer__title">
        <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
        Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
    </h2>
    <CallMeFormWithTimer timerDuration={155555} buttonText="Получить скидку">
        <p>при одновременном заказе вместе с работой</p>
    </CallMeFormWithTimer>
</section>
```