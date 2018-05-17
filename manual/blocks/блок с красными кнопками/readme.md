# Блок с красными кнопками
Блок с картинкой, текстом и красными кнопками под ним.
Особенности:

* весь кликабельный
* текст от левого края
* картинка от правого края выстраивается сама
* автоматическая высота
* число кнопок от 1 до 5

## Пример
![блок с красными кнопками и белым текстом image](./redbtnblock1.png)

![блок с красными кнопками и серым текстом image](./redbtnblock2.png)

## Параметры
Нет

## Элементы
### Контейнер
`<section className="block-service">`
### Блок с объявлением
Пример с дефолтными настройками
```jsx
<Link href="/diplom">
    <div className="block-service__top" style={{backgroundImage: "url(" + require('static/images/services/presentation-bg.jpg') + ")"}}>
        <span className="block-service__title">Дипломная работа</span>
        <p className="block-service__par">
            Поможем написать дипломную работу на заказ
        </p>
        <p className="block-service__par">
            от 10 500 ₽<br/>
            от 10 дня
        </p>
    </div>
</Link>
```

Подробный пример полного кода со всеми настройками 
```jsx
<Link href="/diplom-na-zakaz">
    <div className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
        <div className="block-service__text gradient-l-black">
            <style dangerouslySetInnerHTML={{__html: `.block-service__title.cc1::after { background-color: blue; }`}}/>
            <span className="block-service__title cc1" style={{color: "#FFFFFF"}}>Дипломная работа</span>
            <p className="block-service__par">Не парься сам – доверься нам!</p>
            <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
            <p className="block-service__par">От 4 000 руб.</p>
            <p className="block-service__par">Срочно от 2 часов</p>
        </div>
    </div>
</Link>
```
Картина подложки устанавливается через style элемента `div.block-service__top`,
а чтобы изменить цвет текста для лучшей читаемости поверх картинки, нужно задать color.
Цвет заголовка можно указать в блоке `span.block-service__title`.

Но чтобы изменить цвет подчеркивания, необходимо добавить элемент `style` со стилем для
`block-service__title` и **добавить кастомный класс** и в стиль и в блок, иначе цвет подчеркивания
распространится и на другие блоки на этой странице.
Назвать кастомный класс можно как угодно, в примере это `cc1`.

На мобильной версии текст наползает на картику и это затрудняет его прочтение.
Для повышения читаемости  используется градиент, который задается классом
`gradient-l-black` в элементе `<div className="block-service__text gradient-l-black">`.
На текущий момент поддерживаются два градиента:
```scss
&.gradient-l-white { background-image: linear-gradient(to right, rgba(255, 255, 255, 0.66), rgba(255, 255, 255, 0.5), transparent); }
&.gradient-l-black { background-image: linear-gradient(to right, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.5), transparent); }
```
 
### Кнопки внизу
#### Контейнер для кнопок
`<div className="block-service__list list-n">`,
где число `n` в классе `list-n` должно соответствовать числу кнопок.
Доступные значения `n` с 1 по 5.

#### Кнопка
```jsx
<Link href="/">
    <div className="block-service__list-item">
        <span className="block-service__list-title">Курсовая</span>
        <p>от 4 500 ₽</p>
        <p>от 2 недель</p>
    </div>
</Link>
```

### Пример использования
```jsx
<section className="block-service">
    <Link href="/diplom">
        <div className="block-service__top" style={{backgroundImage: "url(" + require('static/images/services/presentation-bg.jpg') + ")"}}>
            <span className="block-service__title">Дипломная работа</span>
            <p className="block-service__par">
                Поможем написать дипломную работу на заказ
            </p>
            <p className="block-service__par">
                от 10 500 ₽<br/>
                от 10 дня
            </p>
        </div>
    </Link>
    <div className="block-service__list list-1">
        <Link href="/">
            <div className="block-service__list-item">
                <span className="block-service__list-title">Курсовая</span>
                <p>от 4 500 ₽</p>
                <p>от 2 недель</p>
            </div>
        </Link>
    </div>
</section>
```
### Подробный пример

```jsx
<section className="block-service">
    {/* Блок с объявлением. */}
    <Link href="/diplom">
        <div className="block-service__top" style={{color: "#FFFFFF", backgroundImage: "url(" + require('static/images/services/course-work-bg.jpg') + ")"}}>
            <style dangerouslySetInnerHTML={{__html: `.block-service__title::after { background-color: blue; }`}}/>
            <span className="block-service__title" style={{color: "#FFFFFF"}}>Дипломная работа</span>
            <p className="block-service__par">
                Поможем написать дипломную работу на заказ
            </p>
            <p className="block-service__par">
                от 10 500 ₽<br/>
                от 10 дня
            </p>
        </div>
    </Link>
    {/* Блок с кнопками. В классе "list-n" n доложно соответствовать числу кнопок. */}
    <div className="block-service__list list-3">
        <Link href="/">
            <div className="block-service__list-item">
                <span className="block-service__list-title">Курсовая</span>
                <p>от 4 500 ₽</p>
                <p>от 2 недель</p>
            </div>
        </Link>
        <Link href="/">
            <div className="block-service__list-item">
                <span className="block-service__list-title">Курсовая</span>
                <p>от 4 500 ₽</p>
                <p>от 2 недель</p>
            </div>
        </Link>
        <Link href="/">
            <div className="block-service__list-item">
                <span className="block-service__list-title">Курсовая</span>
                <p>от 4 500 ₽</p>
                <p>от 2 недель</p>
            </div>
        </Link>
    </div>
</section>
```