import React from "react";
import Link from "next/link";
import Wrapper from 'components/Wrapper';
import PageWrapper from 'components/common/PageWrapper';
import TextBlock from 'components/common/TextBlock';

import BlockNav from 'components/common/BlockNav';
import NavRow from 'components/common/BlockNav/NavRow';
import MessBlock from "components/common/MessBlock";

import ProfitsBlockSlider from "components/common/ProfitsBlockSlider";
import dopy from "data/dopraboty";

import FormOrder from "components/common/forms/Big/Order";
import FormEstimate from "components/common/forms/Big/Estimate";

import InfoBlock from "components/common/InfoBlock";
import infoBlockConfig from "data/infoBlock/diplom";

import CurrentOffer from "components/content/offers/CurrentOffer";

import reviewBlockConfig from "data/reviewBlockConfig";
import ReviewBlockSlider from "components/common/ReviewBlockSlider";

import LinksBlock from "components/common/LinksBlock";
import links from "data/linksBlock/diplom";

import Video from "components/common/VideoBlock";
import ImageBlock from "components/common/ImageBlock";
import QualityBlock from "components/common/QualityBlock/index.js"

import MatZashGirl from "components/common/ServiceBlock/ready-made/MatZashGirl"
import Diplom from "components/common/ServiceBlock/ready-made/Diplom"
import ItemScope from "components/common/schema.org/ItemScope"
import ItemListElement from "components/common/schema.org/ItemListElement"
import Breadcrumbs from "components/common/Breadcrumbs";


const page = () => (
    <Wrapper
        title="Диплом на заказ – срочно заказать дипломную работу в Москве, помощь в написании диплома и сопровождение до защиты"
        description="Написание диплома на заказ! Быстрая, недорогая и профессиональная помощь в подготовке дипломной работы – компания BeSmarter. Звоните: +7 (495) 772-40-90 или +7 (495) 772-90-40."
    >
        <PageWrapper className="wrapper bg bg-c2 bg-img bg-img3">



            <Breadcrumbs links={[
                {url:'/', text:'Главная'},
                {url:'#', text:'Дипломная работа'},
            ]}/>

            <ItemScope type="http://schema.org/BreadcrumbList">
                <ItemListElement url="https://besmarter.ru/" name="Главная" position="1" />
                <ItemListElement url="https://besmarter.ru/diplom-na-zakaz" name="Дипломная работа" position="2" />
            </ItemScope>




            <BlockNav>
                <NavRow
                    url="#form"
                    scroll={false}
                    title="Заказать работу"
                    description="Узнай цену твоей работы"
                />
            </BlockNav>
 <MessBlock/>

            <Diplom/>

            <MatZashGirl/>

            <TextBlock>
                <h1>Написание диплома на заказ</h1>
                <p className="par">
                    Вам срочно нужен грамотный и толковый специалист, у которого можно
                    заказать написание дипломной работы? Компания BeSmarter! предлагает
                    свои услуги по подготовке диплома за короткое время под ключ. Наши авторы
                    – действующие преподаватели ведущих ВУЗов России, поэтому мы (а значит, и вы!)
                    на «отлично» справимся даже с самой сложной темой – гуманитарной, узкотехнической
                    или любой другой.
                </p>
                <p className="par">
                    Помощь в написании диплома на заказ – это лишь половина дела.
                    Проект нужно еще защитить, к тому же дотошные научные руководители
                    часто требуют внести в него исправления. Мы не просто напишем вашу
                    дипломную работу, но и будем сопровождать вас до момента защиты,
                    внося правки и корректируя текст в случае необходимости, разработаем
                    раздаточные и другие материалы для защиты.
                </p>
            </TextBlock>

            <FormEstimate/>
            <div style={{ width: "100%", maxWidth: "62em", margin: "1.56em auto 0" }}>
                <QualityBlock 
                text="Мы делаем работы отличного качества по множеству специальностей. Как нам это удается?
                Секрет прост: по каждой из них мы после проверки отобрали лучших из лучших специалистов. В современном мире требования к работам всё выше и выше, объем специальной
                литературы растет с каждым днем. Мы учитываем все тонкости и нюансы в каждой тематике. Мы в курсе всех новостей и изменений по вашей специальности.
                Именно большое количество менеджеров и экспертов, работающих в нашей команде, позволяет быть настоящим профессионалом в узкой сфере знаний.
                Мы помогли тысячам студентов. Поможем и вам! Звоните и приходите к нам!
                Делаем работы по самым трудным специальностям, которые вы видите на этой странице, и по многим другим.
                Не нашли свою специальность, &mdash; просто звоните нам, и все будет хорошо!"   
                />

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <QualityBlock 
                        text= {
                        <div>
                            <p className="up_string" align="left" style={{ paddingTop: "10px", display: "flex", justifyContent:"space-between",paddingBottom: "10px" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                            <p>● Управление: проектами; персоналом; качеством; производством и поставками</p>
                            <p>● Финансовый, стратегический, антикризисный, инновационный, бренд- и риск- менеджмент</p>
                            <p>● Маркетинг. Маркетинговые исследования и анализ. PR, социальные сети</p>
                            <p>● Управление эффективностью бизнеса. Практика менеджмента</p>
                            <p>● Менеджмент предприятия на примере реальной организации</p>
                            <p>● Расчеты, статистика, аналитика, рекомендации</p> 
                        </div>
                        }
                        title="Менеджмент и маркетинг"
                        path="/diplom-na-zakaz/menedjment"
                        imageBlock = {<img src="/static/images/QualityBlock/presentation.svg" style={{ width: "25%", height: "25%" }}/>}
                        Class="w50"
                    />

                    <QualityBlock 
                        text= {
                        <div>
                            <p className="up_string" align="left" style={{ paddingTop: "10px", display: "flex", justifyContent:"space-between",paddingBottom: "10px" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                            <p>● Теория и практика. Прикладная экономика. Экономика предприятия</p>
                            <p>● Микро- и макроэкономика. Экономика РФ и зарубежных стран</p>
                            <p>● Финансы и инвестиции. Ценные бумаги. Налоги и налогообложение</p>
                            <p>● Экономический анализ. Математические методы в экономике</p>
                            <p>● Финансовые ресурсы предприятия. Бизнес-план</p>
                            <p>● Экономические расчеты на примере реальной организации</p>
                            <p>● Статистика, аналитика, рекомендации</p>
                        </div>
                        }
                        title="Экономика"
                        path="/diplom-na-zakaz/ekonomika"
                        imageBlock = {<img src="/static/images/QualityBlock/benefits.svg" style={{ width: "25%", height: "25%" }}/>}
                        Class="w50"
                    />
                    </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <QualityBlock 
                        text= {
                        <div>
                            <p className="up_string" align="left" style={{ paddingTop: "10px", display: "flex", justifyContent:"space-between",paddingBottom: "10px" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                            <p>● Теория информатики, статистика, модели</p>
                            <p>● Разработка ПО. Сети. Системный анализ. Базы данных</p>
                            <p>● Решение прикладных задач. 1С. CRM. СУБД</p>
                            <p>● Веб-программирование. Создание сайтов. Веб-дизайн</p>
                            <p>● Блокчейн. ИИ</p>
                            <p>● Проектирование, тестирование и отладка программ</p>
                            <p>● Все языки программирования</p>
                        </div>
                        }
                        title="Программирование"
                        path="/diplom-na-zakaz/programmirovanie"
                        imageBlock = {<img src="/static/images/QualityBlock/worker.svg" style={{ width: "25%", height: "25%" }}/>}
                        Class="w50"
                    />

                    <QualityBlock 
                        text= {
                        <div>
                            <p className="up_string" align="left" style={{ paddingTop: "10px", display: "flex", justifyContent:"space-between",paddingBottom: "10px" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                            <p>● Гражданское, уголовное, административное право</p>
                            <p>● Конституционное и международное право</p>
                            <p>● Актуальное правоприменение</p>
                            <p>● Действующие нормативные акты и законы</p>
                            <p>● Реальные примеры из судебной практики</p>
                        </div>
                        }
                        title="Юриспруденция"
                        path="/diplom-na-zakaz/yurisprudenciya-pravo"
                        imageBlock = {<img src="/static/images/QualityBlock/meeting.svg" style={{ width: "25%", height: "25%" }}/>}
                        Class="w50"
                    />
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <QualityBlock 
                        text= {
                        <div>
                            <p className="up_string" align="left" style={{ paddingTop: "10px", display: "flex", justifyContent:"space-between",paddingBottom: "10px" }}> <div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                            <p>● Общая, прикладная, клиническая, возрастная, криминальная</p>
                            <p>● Общеизвестные и авторские методики, все школы</p>
                            <p>● Обработка экспериментальных данных. Корреляционный анализ</p>
                            <p>● Любые возрастные и численные группы</p>
                            <p>● Реальные экспериментальные данные</p>
                        </div>
                        }
                        title="Психология"
                        path="/diplom-na-zakaz/psihologiya"
                        imageBlock = {<img src="/static/images/QualityBlock/idea.svg" style={{ width: "25%", height: "25%" }}/>}
                        Class="w50"
                    />

                    <QualityBlock 
                        text= {
                        <div>
                            <p className="up_string"  style={{ paddingTop: "10px", display: "flex", justifyContent:"space-between", width: "100%",paddingBottom: "10px" }}><div>от 2 часов</div> <div>от 16 000 рублей</div></p>
                            <p>● Бухгалтерский учет, налоги и налогообложение</p>
                            <p>● Анализ и аудит</p>
                            <p>● Бюджетирование и управленческий учет</p>
                            <p>● Актуальная нормативно-законодательная база</p>
                            <p>● Расчеты и балансы реальной организации</p>
                        </div>
                        }
                        title="Бухгалтерский учет"
                        path="/diplom-na-zakaz/buhgalterskij-uchet"
                        imageBlock = {<img src="/static/images/QualityBlock/planning.svg" style={{ width: "25%", height: "25%" }}/>}
                        Class="w50"
                    />
                </div>
            </div>  
            <ImageBlock imageSrc={require("static/images/block/dip-na-zakaz.jpg")} altText="Диплом на заказ"/>

            <TextBlock>
                <h2 className="title">
                    5 причин для заказа дипломной работы в BeSmarter!
                </h2>
                <ul>
                    <li>
                        <b>Компетентность.</b> В BeSmarter! вы можете заказать подготовку диплома
                        преподавателем московского или другого российского ВУЗа, имеющего степень кандидата наук.
                    </li>
                    <li>
                        <b>Оперативность.</b> Возможна срочная помощь в написании диплома (от 1 дня).
                        Такая оперативность достигается благодаря использованию фирменного подхода,
                        созданного в нашей компании. Вы можете не тратить время на сбор материалов, разработку плана и написание дипломной работы, а сделать заказ и спокойно заниматься своими делами.
                    </li>
                    <li>
                        <b>Универсальность.</b> Мы на одинаково высоком уровне пишем проекты по любым специальностям – экономическим, техническим, юридическим и т. д. Сложность темы диплома на заказ не играет роли – проблематика будет выявлена, глубоко раскрыта и проработана.
                    </li>
                    <li>
                        <b>Профессионализм.</b> Мы полностью раскроем тему, подготовим грамотный
                        текст и оформим работу в строгом соответствии ГОСТ.
                    </li>
                    <li>
                        <b>Доступная цена.</b> Команда BeSmarter! понимает сложность жизненных ситуаций
                        наших клиентов, поэтому стоимость заказа диплома у нас невысока.
                        Однако срочная помощь в написании от наших авторов стоит немного дороже.
                    </li>
                </ul>
            </TextBlock>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer/>

            <TextBlock>
                <h2 className="title">
                    Хотите сэкономить при заказе диплома? Учитывайте несколько факторов:
                </h2>
                <ul>
                    <li>
                        <b>Дисциплину.</b> Диплом по гуманитарному предмету можно заказать дешевле, чем по технической специальности.
                    </li>
                    <li>
                        <b>Тематику.</b> Цена труда авторов напрямую зависит от сложности выбранной темы.
                    </li>
                    <li>
                        <b>Требования.</b> Стоимость заказа дипломной работы уменьшается при отсутствии
                        специфических особенностей, например: 100% уникальность текста, необходимость
                        подготовки графических материалов (чертежей, графиков, диаграмм) и выступления для защиты и т. п.
                    </li>
                    <li>
                        <b>Сроки.</b> Срочное написание диплома оплачивается дополнительно. Стандартное время
                        работы авторов – около месяца. В этом случае и у вас будет время как следует подготовиться к защите с нашей помощью.
                    </li>
                    <li>
                        <b>Специальные предложения и акции.</b> Ищите информацию о скидках на нашем сайте!
                    </li>
                </ul>
            </TextBlock>

            <Video>
                <iframe src="https://www.youtube.com/embed/aOWtDx1wAHY" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Video>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <Video>
                <iframe src="https://www.youtube.com/embed/KM6vU-TKPoE" frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </Video>

            <TextBlock>
                <h2 className="title">
                    Как и где заказать дипломную работу в Москве?
                </h2>
                <ol className="fitted">
                    <li>
                        Получить помощь при написании диплома можно онлайн – просто {" "}
                        <b>
                            <a href="#form">заполните заявку</a>
                        </b>{" "}
                        на сайте.
                    </li>
                    <li>
                        Связаться с нашими менеджерами по телефону <br/>8 (495) 772-40-90.
                    </li>
                    <li>
                        Заказать диплом в Москве у нас в{" "}
                        <Link href="/contacts">
                            <b>
                                <a>офисе</a>
                            </b>
                        </Link>{" "}
                        (пер. Большой Кисловский, дом 1 стр. 2, офис 211).
                    </li>
                </ol>
                <p className="par">
                    Общение с нашими менеджерами вызовет у вас только приятные эмоции! Обращайтесь, BeSmarter! – это грамотная дипломная работа на заказ в Москве на самых выгодных условиях.
                </p>
            </TextBlock>

            <Video>
                <iframe
                    src="//drive.google.com/file/d/0ByS0VqTi2Rm7R2liV1NPYkN5MVk/preview"
                    frameBorder="0"
                    allowfullscreen
                />
            </Video>

            <a name="form" id="form"/>
            <FormOrder/>

            <LinksBlock links={links}/>
        </PageWrapper>
    </Wrapper>
);

export default page;
