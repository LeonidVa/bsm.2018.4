# Страница

Все страницы состоят из блоков, описание которых есть в папке [/manual/blocks](/manual/blocks).
Из этих блоков можно собрать любую необходимую страницу.
Другого подхода к созданию дизайна страниц тут не предусмотрено.

![Изображение страницы](./page.png)

## Расположение

Страницы размещены в папке `/pages`, где имя файла и путь к нему соответствуют
адресу, по которому он будет доступен. Например, страница `/about` будет 
находиться в файле `/pages/about.js`. Также можно использовать папки. 

## Код
Код страницы требует подклчения используемых компонентов, а также
требует определённых контейнеров для нормального отображения.

```jsx
import Wrapper from 'components/Wrapper';
import Title from 'components/common/Title';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessagersBlock';
import InfoBlock from 'components/common/InfoBlock';
import ImageBlock from 'components/common/ImageBlock';
import infoBlockConfig from 'data/infoBlock/diplom'

const page = () => (
    <Wrapper title=":тут title который в head:">
        <div className="wrapper bg bg-c2 bg-img bg-img4">
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/pricing">
                        <a>Услуги</a>
                    </Link>
                    <span> / </span>
                    <Link href="/course">
                        <a>Курсовая работа</a>
                    </Link>
                </div>
            </section>

            <section className="main-title">
                <div className="inner">
                    <h1>Заголовок страницы</h1>
                </div>
            </section>

            <BlockNav>
                <NavRow title="Оценить работу" description="Узнайте сроки и цену вашей работы" url='#'/>
                <NavRow title="Почесать репу" description="Почеши сейчас совершенно бесплатно" url='/'/>
            </BlockNav>
 <MessBlock/>
            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ImageBlock imageSrc={require('static/images/block/a.jpg')}/>
```

## Элементы
### Wrapper
Делает всякую важную логику, плюс параметр `title` позволяет задать тег `<title` который пойдёт в шапку.
Следующий после него элемент, должен быть `<div>` с классом `wrapper`
и крайне желательно с классом `bg`.

#### Head, Header и Footer, и код страницы 
Wrapper содержит следующий код
```jsx
<Head>
    <title>{this.props.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta name="description" content={this.props.description}/>
    <link rel="icon" href={require('static/favicon.ico')} type="image/x-icon"/>
</Head>
<Header/>
{this.props.children}
<Footer/>
```
Где `<Head>` область, которая пойдет в тег `<head>` итоговой страницы,
`<Header>` и `<Footer>` соотв. верхняя и нижнаяя часть шаблона,
а `{this.props.children}` непосредственно весь код страницы из файла страницы.

#### Гамбургер и меню
Гамбургер и меню, которое он вызывает живут в компонентах MenuMob и MenuWide.
Они открываются на мобильной и на широкой версиях соотв. в зависимости от
обнаруженного типа устройства на момент загрузки страницы.

Их стили и код живут в `/components/Header/components`.

В случае с широким меню, элемент `<div.menu-desk__lists>` может содержать
один или несколько списков.

![Изображение MenuWide](./MenuWide.png)


#### Картинка бэкграунда
Дополнительно можно классами задать цвет верхней плашки и картинку на ней.
Плашка рисуется псевдоэлементом `::before`, поэтому напрямую задать цвет и бэкграунд
не получится.
 
Доступные классы для задания цвета подложки: `bg-c1`, `bg-c2` и `bg-c3`.

Для задания картинки нужно установить класс `bg-img` и один из классов с картинками
с `bg-img1` по `bg-img5`.



### Breadcrumbs
Хлебные крошки идут над заголовком.
```jsx
<section className="breadcrumbs">
    <div className="inner">
        <Link href="/pricing">
            <a>Услуги</a>
        </Link>
        <span> / </span>
        <Link href="/course">
            <a>Курсовая работа</a>
        </Link>
    </div>
</section>
```

### Заголовок
Заголовок идёт после breadcumbs, если они есть.
```jsx
<section className="main-title">
    <div className="inner">
        <h1>Заголовок страницы</h1>
    </div>
</section>
```


