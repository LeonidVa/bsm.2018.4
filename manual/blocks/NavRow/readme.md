# NavRow

Это элемент блока с крупными ссылками. Используется только внутри `<section className="block-nav">`

## Пример
![NavRow image](./NavRow.png)

## Параметры
**title** *строка*

Крупный текст, основной текст ссылки.

**description** *строка*

Пояснение к ссылке.

**url** *строка*

куда ведёт ссылка.

### Пример использования
```jsx
import NavRow from 'components/common/NavRow';

<section className="block-nav">
    <NavRow title="Оценить работу" description="Узнайте сроки и цену вашей работы" url='#'/>
    <NavRow title="Почесать репу" description="Почеши сейчас совершенно бесплатно" url='/'/>
</section>
```