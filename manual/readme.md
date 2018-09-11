
## Редиректы
Редиректы задаются в `/utils/redirect.js`.
Это просто список.

Формат простой: откуда и куда.
```js
    const list = {
        '/from': '/to',
        '/abc': '/def',
        '/ololo': '/ajaja',
    };
```

## Аналитика
Код, который дёргает счетчики живёт в `/utils/analytics.js`.
Использовать надо так:
```js
import triggerTarget from 'utils/analytics';
...
triggerTarget("какой-то таргет")
```

## Оповещения в телеграм
Живёт в `/utils/telega.js`. Использовать надо так:
```js
import telega from 'utils/telega';
...
telega('текст сообщения');
```