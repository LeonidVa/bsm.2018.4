import Link from 'next/link';
import Wrapper from 'components/Wrapper';

import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';

import ProfitsBlockSlider from 'components/common/ProfitsBlockSlider';
import dopy from 'data/dopraboty'

import FormOrder from 'components/common/forms/Big/Order';
import FormEstimate from 'components/common/forms/Big/Estimate';
import fields from 'data/form/main'

import InfoBlock from 'components/common/InfoBlock';
import infoBlockConfig from 'data/infoBlock/diplom'

import CurrentOffer from 'components/content/offers/CurrentOffer';

import reviewBlockConfig from 'data/reviewBlockConfig'
import ReviewBlockSlider from 'components/common/ReviewBlockSlider';

import MetaTags from 'react-meta-tags';
import ImageBlock from "../../components/common/ImageBlock";
import CardPopInfo from "components/common/CardPopInfo";
import servicecards from "data/servicecards";
import links from "../../data/linksBlock/stati/idealniy";
import LinksBlock from "../../components/common/LinksBlock";


const page = () => (
    <Wrapper title="Идеальный студент и идеальный аспирант: как ими стать? | «BeSmarter!». Тел. +7 (495) 772-40-90."
             description="Чтобы закончить ВУЗ с красным дипломом, недостаточно быть наделенным природным умом, большинство необходимых личностных качеств нужно развивать в себе самостоятельно. Это упорный ежедневный труд, но результат того стоит.">
        <div className="wrapper bg bg-c2 bg-img bg-img1">

            <MetaTags>
                {/* <title></title> */}
                <meta name="keywords" content=""/>
            </MetaTags>

            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/">
                        <a>Главная</a>
                    </Link>
                    <span> / </span>
                    <Link href="/stati">
                        <a>Статьи</a>
                    </Link>
                    <span> / </span>
                    <Link href="/kursovaya-rabota-na-zakaz">
                        <a>Идеальный студент и идеальный аспирант: как ими стать?</a>
                    </Link>
                </div>
            </section>

            <section className="block-nav">
                <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
            </section>
            <MessBlock/>

            <section className="block-service">
                <Link href="/diplom-na-zakaz">
                    <a className="block-service__top" style={{backgroundImage: "url(" + require('static/images/block/j.jpg') + ")",}}>
                        <div className="block-service__text gradient-l-white">
                            <span className="block-service__title">Дипломная работа</span>
                            <p className="block-service__par">Быстро и качественно!</p>
                            <p className="block-service__par">С нами твоя защита пройдет легко!</p>
                            <p className="block-service__par">От 14 000 руб.</p>
                            <p className="block-service__par">Срочно от 2 часов</p>
                        </div>
                    </a>
                </Link>
                <div className="block-service__list list-3">
                    <CardPopInfo
                        url="/razrabotka-diplomnogo-proekta"
                        title="Дипломный проект"
                        text={[<p>от 21 000 руб.</p>]}
                    />

                    <CardPopInfo
                        url="/dissertaciya-na-zakaz/magisterskaya"
                        title="Магистерская диссертация"
                        text={[<p>от 23 000 руб.</p>]}
                    />

                    <CardPopInfo
                        url="/diplom-mba-na-zakaz"
                        title="Диплом MBA"
                        text={[<p>от 25 000 руб.</p>]}
                    />
                </div>
            </section>

            <section className="block-service__dis">
                <section className="block-service">
                    <Link href="/diplom-na-zakaz">
                        <a className="block-service__top color-ff" style={{backgroundImage: "url(" + require('static/images/block/l.jpg') + ")",}}>
                            <div className="block-service__text gradient-l-black">
                                <span className="block-service__title">Материалы для успешной защиты</span>
                                <p className="block-service__par">Не парься сам – доверься нам!</p>
                                <p className="block-service__par">Легко разберёшься, точно сдашь!</p>
                                <p className="block-service__par">Доступные цены</p>
                                <p className="block-service__par">Срочно от 2 часов</p>
                            </div>
                        </a>
                    </Link>
                    <div className="block-service__list list-4">
                        <CardPopInfo
                            title={servicecards["Пакет «Успешная Защита»"].title}
                            text={servicecards["Пакет «Успешная Защита»"].text}
                            description={servicecards["Пакет «Успешная Защита»"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Доклад"].title}
                            text={servicecards["Доклад"].text}
                            description={servicecards["Доклад"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Оригинальность текста"].title}
                            text={servicecards["Оригинальность текста"].text}
                            description={servicecards["Оригинальность текста"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Ответы к защите"].title}
                            text={servicecards["Ответы к защите"].text}
                            description={servicecards["Ответы к защите"].description}
                        />

                    </div>
                    <div className="block-service__list list-5">
                        <CardPopInfo
                            title={servicecards["Мини-диплом Раскладка"].title}
                            text={servicecards["Мини-диплом Раскладка"].text}
                            description={servicecards["Мини-диплом Раскладка"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Получение по главам"].title}
                            text={servicecards["Получение по главам"].text}
                            description={servicecards["Получение по главам"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Аннотация Отзыв Рецензия"].title}
                            text={servicecards["Аннотация Отзыв Рецензия"].text}
                            description={servicecards["Аннотация Отзыв Рецензия"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Слайды"].title}
                            text={servicecards["Слайды"].text}
                            description={servicecards["Слайды"].description}
                        />
                        <CardPopInfo
                            title={servicecards["Распечатка Переплеты"].title}
                            text={servicecards["Распечатка Переплеты"].text}
                            description={servicecards["Распечатка Переплеты"].description}
                        />

                    </div>
                </section>
            </section>

            <section className="block-text">
                <h1 className="block-text__title">
                    Идеальный студент и идеальный аспирант: как ими стать?
                </h1>
                <p className="block-text__par">
                    Чтобы закончить ВУЗ с красным дипломом, недостаточно быть наделенным природным умом, большинство необходимых личностных качеств нужно развивать в себе самостоятельно. Это упорный ежедневный труд, но результат того стоит.
                </p>
            </section>

            <FormEstimate/>

            <ImageBlock imageSrc={require('static/images/block/ideal-stud.jpg')}/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Каким должен быть студент?
                </h2>
                <p className="block-text__par">
                    Чтобы закончить ВУЗ с красным дипломом, недостаточно быть наделенным природным умом, большинство необходимых личностных качеств нужно развивать в себе самостоятельно. Это упорный ежедневный труд, но результат того стоит.
                </p>
                <p className="block-text__par">
                    Каким должен быть идеальный студент? Понятно, что идеальных людей в природе не встречается, но всегда есть некий образец, эталон, к которому нужно стремиться, если хочешь достигнуть поставленных целей. Так какая цель у студента? Ответ сам напрашивается – закончить ВУЗ и получить <b>диплом</b>, чтобы потом устроится на
                    хорошую, высокооплачиваемую работу. Это справедливо, но ведь кто-то поступает в ВУЗ только ради заветной корочки, а для кого-то выбор будущей профессии – абсолютно осознанный шаг, к которому он готовился, возможно, не один год. Как правило, такие студенты, не оставляют стены родного вуза после получения диплома, а решают
                    и дальше продолжать научную деятельность.
                </p>
                <p className="block-text__par">
                    Так какими же качествами должен обладать студент, который выбирает научную карьеру? Безусловно, это ответственность, обязательность, усердие, конечно, высокая трудоспособность и усидчивость. Необходимо постоянно работать над собой, ведь научный путь нелегок и тернист. Практика, которую проходит каждый студент, поможет
                    проявить учащемуся его деловые качества, это, своего рода, первая проба своих профессиональных навыков. А участие в разного рода мероприятиях, обозрение последних новостей в мире науки, проявление повышенного интереса к изучаемым дисциплинам, наверняка, не останется незамеченным со стороны преподавателей.
                </p>
                <p className="block-text__par">
                    После завершения практики каждый студент пишет отчёт, где он должен подробно осветить свою практическую научную деятельность. Если отчёт по практике написан хорошо, на основе его очень удобно писать <b>диплом</b>, а <b>диплом</b>, как известно, является главной работой студента, к написанию которой он шел все годы своего
                    обучения в вузе. После успешной защиты диплома, возможно, последует приглашение от кафедры поступить в аспирантуру и продолжить научный путь.
                </p>
            </section>

            <InfoBlock infoBlockConfig={infoBlockConfig}/>

            <ProfitsBlockSlider profitBlockConfig={dopy}/>

            <CurrentOffer/>

            <section className="block-text">
                <h2 className="block-text__title">
                    Кто такой аспирант?
                </h2>
                <p className="block-text__par">
                    Аспирант – это человек, который уже получил высшее профессиональное образование и готовится к защите кандидатской диссертации, чтобы, в результате, получить ученую степень кандидата наук. Если желающих получить высшее образование большинство, то в аспирантуру поступает значительно меньшее количество людей.
                </p>
                <p className="block-text__par">
                    Аспирант занимается научно-исследовательской работой, а кроме этого, в обязательном порядке, занимается педагогической деятельностью, читая лекции или проводя семинары студентам. Еще одно из обязательных требований к учащимся в аспирантуре: публикация статей в научных журналах.
                </p>
                <p className="block-text__par">
                    По сути, поступление в аспирантуру – это дверь в научную среду, ведь человек, поступающий туда, осознанно и окончательно решает связать свою жизнь именно с наукой.
                </p>
                <p className="block-text__par">
                    Аспирант в не меньшей степени, чем студент, должен быть трудолюбив, усерден, ответственен и, разумеется, усидчив, ведь ему приходится иметь дело с огромным количеством сложного материала, который необходимо изучить и усвоить. Кандидатская <b>диссертация</b> – это сложная научно-исследовательская работа, итогом которой
                    должно стать некое открытие, сделанное аспирантом в той научной области, которую он изучает.
                </p>
                <p className="block-text__par">
                    Развитие личностных качеств, которые необходимы студенту и аспиранту, - задача не из самых легких, но если Вы решили ступить на путь науки, то они, действительно, необходимы Вам. Радость от тех открытий и прорывов, которые Вы совершите в науке, сполна компенсируют все бессонные ночи, которые Вы провели за конспектами,
                    расчетами и научными трудами!
                </p>
            </section>

            <ReviewBlockSlider reviewBlockConfig={reviewBlockConfig}/>

            <a name="form" id="form"/>
            <FormOrder/>

            <LinksBlock links={links}/>

        </div>
    </Wrapper>
);


export default page
