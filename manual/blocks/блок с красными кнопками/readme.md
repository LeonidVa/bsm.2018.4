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
```jsx harmony
<Link href="/diplom">
    <div className="block-service__top" style={{backgroundImage: "url(" + require('img/services/presentation-bg.jpg') + ")"}}>
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
```jsx harmony
<Link href="/diplom">
    <div className="block-service__top" style={{color: "#FFFFFF", backgroundImage: "url(" + require('img/services/course-work-bg.jpg') + ")"}}>
        <style dangerouslySetInnerHTML={{__html: `.block-service__title.cc1::after { background-color: blue; }`}}/>
        <span className="block-service__title cc1" style={{color: "#FFFFFF"}}>Дипломная работа</span>
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
Картина подложки устанавливается через style элемента `div.block-service__top`,
а чтобы изменить цвет текста для лучшей читаемости поверх картинки, нужно задать color.
Цвет заголовка можно указать в блоке `span.block-service__title`.

Но чтобы изменить цвет подчеркивания, необходимо добавить элемент `style` со стилем для
`block-service__title` и **добавить кастомный класс** и в стиль и в блок, иначе цвет подчеркивания
распространится и на другие блоки на этой странице.
Назвать кастомный класс можно как угодно, в примере это `cc1`. 

В обычном случае не обязательно указывать все эти параметры.
 
### Кнопки внизу
#### Контейнер для кнопок
`<div className="block-service__list list-n">`,
где число `n` в классе `list-n` должно соответствовать числу кнопок.
Доступные значения `n` с 1 по 5.

#### Кнопка
```jsx harmony
<Link href="/">
    <div className="block-service__list-item">
        <span className="block-service__list-title">Курсовая</span>
        <p>от 4 500 ₽</p>
        <p>от 2 недель</p>
    </div>
</Link>
```

### Пример использования
```jsx harmony
<section className="block-service">
    <Link href="/diplom">
        <div className="block-service__top" style={{backgroundImage: "url(" + require('img/services/presentation-bg.jpg') + ")"}}>
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
```jsx harmony
<section className="block-service">
    {/* Блок с объявлением. */}
    <Link href="/diplom">
        <div className="block-service__top" style={{color: "#FFFFFF", backgroundImage: "url(" + require('img/services/course-work-bg.jpg') + ")"}}>
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