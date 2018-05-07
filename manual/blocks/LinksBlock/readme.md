# LinksBlock


Список ссылок в конце страницы для тех, кто не нашел нужную информацию.

## Пример
![LinksBlock image](./LinksBlock.png)

## Параметры
### links
Массив ссылок
```jsx harmony
[
    { url: "#", text: "Где можно заказать дипломную работу" },
    { url: "#", text: "Помощь в написании диплома" },
    { url: "#", text: "Выполнение дипломных работ" },
]
```

### Пример использования
```jsx harmony
import links from 'components/config/linksBlockConfig';
<LinksBlock links={links}/>
```