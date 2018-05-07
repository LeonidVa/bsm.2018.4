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
```jsx harmony
import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer';

<section className="block-form-timer" style={{backgroundImage: "url("+require('img/block/h.jpg')+")"}}>
    <h2 className="block-form-timer__title">Воспользуйся пока не поздно</h2>
    <CallMeFormWithTimer timerDuration={75000} timerSize={1.6}>
        <p>Написание диссертаций специализированными докторами наук</p>
    </CallMeFormWithTimer>
</section>
```