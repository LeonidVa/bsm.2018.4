# Форма с таймером

Форма с таймером ограничена всего одним полем и одной кнопкой, призвана получить телефон посетителя на порыве в обмен на ограниенное предложение.

## Пример
![timer form image](./timerform.png)

## Параметры
**timerSize** *float*

Размер шрифта таймера. Использовать не обязательно вовсе.

**timerDuration** *integer*

Длительность таймера. В данный момент не работает.


### Пример использования
```js
import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer'

<section className="block-form3">
    <h2 className="block-form3__title">Воспользуйся пока не поздно</h2>
    <CallMeFormWithTimer timerSize={1.6} timerDuration={10000}>
        <p>Написание диссертаций специализированными докторами наук</p>
    </CallMeFormWithTimer>
</section>
```