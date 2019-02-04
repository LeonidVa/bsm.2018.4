import Link from 'next/link';
import React, {Component} from 'react';
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper/index.js';
import TextBlock from 'components/common/TextBlock/index.js';
import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import ImageBlock from 'components/common/ImageBlock/index.js'
import Accordion from 'components/common/Accordion'
import FormOrder from 'components/common/forms/Big/Order';
import LinksBlock from 'components/common/LinksBlock'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider/index.js'
import reviewBlockConfig from 'data/reviewBlockConfig';
import links from 'data/linksBlockConfig';
import MetaTags from 'react-meta-tags';
import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider/index.js';
import dopy from 'data/dopraboty'
import MagisDisPricePage from "components/common/ServiceBlock/ready-made/MagisDisPricePage";
import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl";
import Title from "components/common/Title/index.js";
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs/index.js";


const page = () => (
    <Wrapper title="Услуги и цены" description="На этой странице представлены цены на дипломные, курсовые работы и многие другие услуги компании.">
        <PageWrapper className="bg bg-c2 bg-img bg-img2">
            <Title><span className="black">Стоимость услуг</span></Title>


            <Breadcrumbs links={[
                {url:'/', text:'Главная'},
                {url:'#', text:'Услуги и цены'},
            ]}/>



            <ItemScope type="http://schema.org/BreadcrumbList">
                <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
                <ItemListElement url="https://besmarter.ru/price" name="Услуги и цены" position="2" />
            </ItemScope>






            <TextBlock>
                <span className="title__h2">Цена вашей работы</span>
                <p className="par">
                    Ваша работа индивидуальна, она пишется преподавателем только для вас!
                </p>
                <p className="par">
                    Поэтому здесь мы показываем стоимость работы ориентировочно.
                </p>
                <p className="par">
                    Точно определит цену вашей работы менеджер, когда вы уточните все ваши требования и пожелания. При необходимости, менеджер срочно переговорит с преподавателем.
                </p>
                <p className="par">
                    Обращайтесь к нам сразу, как только вы получили темы работ. Мы подберем самый выгодный вариант!
                </p>
                <p className="par">
                    Чтобы узнать точную стоимость вашего заказа, свяжитесь с нами по телефону &nbsp;+7 495 772 40 90, а лучше приезжайте с заданием к нам в офис в центре Москвы (пер. Большой Кисловский, дом 1, стр. 2, оф.211).
                </p>
            </TextBlock>


            <Accordion
                title="Дипломная работа"
                button={true}
                buttonLabel="Оформить заказ"
                buttonURL="#form"
                rows={[
                    [<span className="strint">Поздравляем!<br/>Вам осталось только получить дипломную работу и успешно защититься.</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    [<Link href="/diplom-na-zakaz"><a>Дипломная работа</a></Link>, ""],
                    ["Стандартный ВУЗ", "12 000"],
                    ["ВУЗ с повышенными требованиями", "15 000"],
                    ["Европейский ВУЗ", "35 000"],
                    ["Колледж", "8 900"],
                    [<Link href="/razrabotka-diplomnogo-proekta"><a>Дипломный проект</a></Link>, "21 000"],
                    [<Link href="/dorabotka-diplomnoj-raboty"><a>Доработка дипломной работы</a></Link>, "по оценке"],
                    ["", ""],
                    ["", ""],
                    [<span className="strint">Какой бы сложной ни была дипломная работа, мы поможем вам прекрасно защититься!</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    ["Техническая специальность", "19 000"],
                    ["Иностранный язык", "20 000"],
                    ["", ""],
                    [<span className="strint">Вот что вам нужно для уверенной защиты:</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    ["Сдача по главам", "по оценке"],
                    ["Оформление по ГОСТ", "по оценке"],
                    ["Консультация с автором", "1 500"],
                    ["Доклад", "2 000"],
                    ["Раздаток", "2 000"],
                    ["Слайды", "350 р/шт"],
                    ["Ответы к защите и консультации", "200 р/шт"],
                    ["Распечатка", "20 р/шт"],
                ]}
            />

            <Accordion
                title="Магистерская диссертация"
                button={true}
                buttonLabel="Оформить заказ"
                buttonURL="#form"
                rows={[
                    [<span className="strint">Поздравляем!<br/>Вы без пяти минут магистр!<br/>Вам осталось только получить магистерскую диссертацию  и успешно защититься.</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    [<Link href="/dissertaciya-na-zakaz/magisterskaya"><a>Магистерская диссертация</a></Link>, ""],
                    ["Стандартный вуз", "21 000"],
                    ["ВУЗ с повышенными требованиями", "23 000"],
                    ["Европейский вуз", "35 000"],
                    ["", ""],
                    [<span className="strint">Какой бы сложной ни была магистерская диссертация, мы поможем вам прекрасно защититься!</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    ["Иностранный язык", "27 000"],
                    ["Техническая специальность", "37 000"],
                    [<Link href="/dissertaciya-na-zakaz/magisterskaya/ekonomika"><a>Экономика</a></Link>, "23 000"],
                    [<Link href="/dissertaciya-na-zakaz/magisterskaya/menedzhment"><a>Менеджмент</a></Link>, "22 000"],
                    [<Link href="/dissertaciya-na-zakaz/magisterskaya/psihologiya"><a>Психология</a></Link>, "21 000"],
                    [<Link href="/dissertaciya-na-zakaz/magisterskaya/yurisprudenciya-pravo"><a>Юриспруденция</a></Link>, "21 000"],
                    ["",""],
                    [<span className="strint">Вот что вам нужно для уверенной защиты:</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    ["Сдача по главам", "по оценке"],
                    ["Оформление по ГОСТ", "по оценке"],
                    ["Консультация с автором", "1 500"],
                    ["Доклад", "2 000"],
                    ["Раздаток", "2 000"],
                    ["Слайды", "350 р/шт"],
                    ["Ответы к защите и консультации", "200 р/шт"],
                    ["Распечатка", "20 р/шт"],
                ]}
            />

            <Accordion
                title="MBA"
                button={true}
                buttonLabel="Оформить заказ"
                buttonURL="#form"
                rows={[
                    [<span className="strint">Поздравляем!<br/>Вы решили продолжить успешную карьеру, и Вам осталось только получить кейсы и дипломную работу МВА.</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    [<Link href="/diplom-mba-na-zakaz"><a>Дипломнпя работа МВА</a></Link>, "25 000"],
                    ["Кейс МВА", "5 000"],
                    ["Эссе МВА", "3 500"],
                    ["",""],
                    [<span className="strint">Вот что вам нужно для уверенной защиты:</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    ["Сдача по главам", "по оценке"],
                    ["Оформление по ГОСТ", "по оценке"],
                    ["Консультация с автором", "1 500"],
                    ["Доклад", "2 000"],
                    ["Раздаток", "2 000"],
                    ["Слайды", "350 р/шт"],
                    ["Ответы к защите и консультации", "200 р/шт"],
                    ["Распечатка", "20 р/шт"],
                ]}
            />

            <Accordion
                title="Курсовая работа"
                button={true}
                buttonLabel="Оформить заказ"
                buttonURL="#form"
                rows={[
                    [<span className="strint">Поздравляем!<br/>Вам осталось только получить курсовую работу и успешно ее защитить.</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    [<Link href="/kursovaya-rabota-na-zakaz"><a>Курсовая работа</a></Link>, ""],
                    ["Теоретическая", "2 500"],
                    ["С практикой", "3 500"],
                    [<Link href="/kursovaya-rabota-na-zakaz/arhitektura"><a>По архитектуре</a></Link>, "6 000"],
                    [<Link href="/kursovaya-rabota-na-zakaz/buhgalterskiy-uchet"><a>По бухгалтерскому учету</a></Link>, "3 500"],
                    [<Link href="/kursovoj-proekt-na-zakaz/po-detalyam-mashin"><a>По деталям машин</a></Link>, "7 000"],
                    [<Link href="/kursovaya-rabota-na-zakaz/pedagogika"><a>По педагогике</a></Link>, "3 000"],
                    [<Link href="/kursovaya-rabota-na-zakaz/psihologiya"><a>По психологии</a></Link>, "3 000"],
                    [<Link href="/kursovaya-rabota-na-zakaz/ekonomika"><a>По экономике</a></Link>, "3 500"],
                    [<Link href="/kursovaya-rabota-na-zakaz/yurisprudenciya-pravo"><a>По юриспруденции</a></Link>, "3 000"],
                    [<Link href="/kursovoj-proekt-na-zakaz"><a>Курсовой проект</a></Link>, "5 000"],
                    ["", ""],
                    ["", ""],
                    [<span className="strint">Вот что вам нужно для уверенной защиты:</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    ["Сдача по главам", "по оценке"],
                    ["Оформление по ГОСТ", "по оценке"],
                    ["Консультация с автором", "1 500"],
                    ["Доклад", "2 000"],
                    ["Раздаток", "2 000"],
                    ["Слайды", "350 р/шт"],
                    ["Ответы к защите и консультации", "200 р/шт"],
                    ["Распечатка", "20 р/шт"],
                ]}
            />

            <Accordion
                title="Аспирантура и диссертации"
                button={true}
                buttonLabel="Оформить заказ"
                buttonURL="#form"
                rows={[
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    ["Докторская", "450 000"],
                    ["Кандидатская", "180 000"],
                    ["Магистерская", "24 000"],
                    ["Реферат для поступления в аспирантуру", "1 500"],
                    ["Аспирантский реферат", "1 500"],
                    ["На иностранном языке", "35 000"],
                    ["Автореферат", "15 000"],
                    ["Монография", ""],
                    ["Статьи СМИ и ВАК", ""],
                    ["Публикация статьи СМИ и ВАК", ""],
                    ["", ""],
                    [<span className="strint">Подготовка к консультации и защите</span>],
                    ["", ""],
                    ["Консультация с автором"],
                    ["Сдача по главам"],
                    ["Ответы к защите и консультации"],
                    ["Оформление по ГОСТам"],
                    ["Повышение оригинальности"],
                    ["Доклад"],
                    ["Слайды"],
                ]}
            />

            <Accordion
                title="Другие работы"
                button={true}
                buttonLabel="Оформить заказ"
                buttonURL="#form"
                rows={[
                    [<span className="strint">Поздравляем!<br/>Вы - студент и учитесь в институте. Вам предстоит получить несколько разных работ и сдать их.</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    [<Link href="/referat-na-zakaz"><a>Реферат</a></Link>, "1 500"],
                    [<Link href="/zakazat-esse"><a>Эссе</a></Link>,"2 000"],
                    ["Бизнес-план","10 000"],
                    [<Link href="/kontrolnaya-na-zakaz"><a>Контрольная работа</a></Link>,"1 500"],
                    ["Лабороторная работа", "2 500"],
                    ["Решение задач", "500"],
                    ["Тесты и онлайн-тесты", "2 500"],
                    ["Дистанционный экзамен", "3 500"],
                    ["Чертежи", "3 000"],
                    [<Link href="/zakazat-otchet-po-praktike"><a>Отчет по практике</a></Link>, ""],
                    [<Link href="/zakazat-otchet-po-praktike/preddiplomnoj"><a>Преддипломной</a></Link>, "3 500"],
                    [<Link href="/zakazat-otchet-po-praktike/proizvodstvennoj"><a>Производственной</a></Link>, "3 000"],
                    [<Link href="/zakazat-otchet-po-praktike/uchebnoj"><a>Учебной</a></Link>, "3 000"],
                    [<Link href="/zakazat-otchet-po-praktike/pedagogicheskoj"><a>Педагогической</a></Link>, "3 000"],
                    ["", ""],
                    [<span className="strint">Вот что вам нужно для уверенной защиты:</span>],
                    ["", "Стоимость"],
                    ["", "от, рублей"],
                    ["Оформление по ГОСТ", "по оценке"],
                    ["Консультация с автором", "1 500"],
                    ["Доклад", "2 000"],
                    ["Раздаток", "2 000"],
                    ["Слайды", "350 р/шт"],
                    ["Ответы к защите и консультации", "200 р/шт"],
                    ["Распечатка", "20 р/шт"],
                ]}
            />

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <ImageBlock imageSrc={require('static/images/block/g.jpg')} altText="Цена вашей работы"/>

            <FormOrder/>

            <TextBlock>
                <span className="title__h2">У разных работ – разная стоимость</span>
                <p className="par">
                    Стоимость заказа зависит от нескольких объективных факторов:
                </p>
                <ul>
                    <li>
                        специальность:<br/>
                        работы по технической дисциплине немного дороже гуманитарных и
                        естественнонаучных работ из-за расчетов, чертежей и большей трудоемкости

                    </li>
                    <li>
                        сложность темы<br/>
                        даже в рамках одной специальности написание работы зависит от выбранной темы:
                        чем шире тема, тем меньше стоимость

                    </li>
                    <li>
                        требования вуза<br/>
                        у каждого вуза свои методички и свои требования, сюда относится объем текста, язык его написания, особенности оформления
                    </li>
                    <li>
                        уникальность текста<br/>
                        различные программы проверки уникальности текста требуют разного подхода
                    </li>
                    <li>
                        срочность<br/>
                        чем больше вы нам даете времени на написание, тем дешевле будет заказ.
                    </li>
                </ul>
                <p className="par center"><b>
                    Экономьте ваши деньги – <Link href="#form"><a>заказывайте</a></Link> прямо сейчас!</b>
                </p>
            </TextBlock>

            <MatZashGirl/>




            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <LinksBlock links={links}/>

        </PageWrapper>
    </Wrapper>
);

export default page

