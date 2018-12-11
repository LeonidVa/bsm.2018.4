import Link from 'next/link';
import Wrapper from 'components/Wrapper/indexH2';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';
import FormOrder from 'components/common/forms/Big/Order';
import MetaTags from 'react-meta-tags';


const page = () => (
  <Wrapper title="Карта сайта" description="Карта сайта BeSmarter!">
    <div className="wrapper bg bg-c2 bg-img bg-img4">


      <section className="breadcrumbs">
        <div className="inner">
          <Link href="/">
            <a>Главная</a>
          </Link>
          <span> / </span>
          <Link href="#">
            <a>Карта сайта</a>
          </Link>
        </div>
      </section>

        <span visibility = "hidden" height = "0" weidht = "0" itemScope itemType = "http://schema.org/BreadcrumbList">
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href = "https://besmarter.ru/">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Главная</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "1"/>
            </span>
            <span visibility = "hidden" height = "0" width = "0" itemProp = "itemListElement" itemScope
                  itemType = "http://schema.org/ListItem">
                <a visibility = "hidden" height = "0" width = "0" itemProp = "item" href= "https://besmarter.ru/map">
                    <span visibility = "hidden" height = "0" width = "0" itemProp = "name">Карта сайта</span></a>
                <meta visibility = "hidden" height = "0" width = "0" itemProp = "position" content = "2"/>
            </span>
        </span>

      <section className="block-nav">
        <NavRow url='#form' scroll={false} title="Заказать работу" description="Узнай цену твоей работы"/>
      </section>
      <MessBlock/>

      <section className="block-text">
        <h1 className="block-text__title center">
          Карта сайта
        </h1>
        <ul className="style-none">
          <li>
            <Link href="/contacts">
              <a>Контакты</a>
            </Link>
          </li>
          {/*<li>
                         <Link href="/faq">
                            <a>FAQ</a>
                        </Link>
                    </li> */}
          <li>
            <Link href="/about">
              <a>О нас</a>
            </Link>
          </li>
          <li>
            <Link href="/avtoram">
              <a>Авторам</a>
            </Link>
          </li>
          <li>
            <Link href="/garantii">
              <a>Гарантии</a>
            </Link>
          </li>
          {/* <li>
                        <Link href="/akcii">
                            <a>Акции</a>
                        </Link>
                    </li> */}
          <li>
            <Link href="/price">
              <a>Услуги и цены</a>
            </Link><br/>
            <ul>
              <li>
                <Link href="/diplom-na-zakaz">
                  <a>Дипломная работа на заказ</a>
                </Link>
                <ul>
                  <li>
                    <Link href="/diplom-na-zakaz/gde-zakazat-diplomnuyu-rabotu">
                      <a>Где заказать дипломную работу</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplom-na-zakaz/skolko-stoit-diplomnaya-rabota">
                      <a>Сколько стоит дипломная работа</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplom-na-zakaz/buhgalterskij-uchet">
                      <a>Дипломная работа по бухгалтерскому учету</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplom-na-zakaz/yurisprudenciya-pravo">
                      <a>Дипломная работа по юриспруденции</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplom-na-zakaz/ekonomika">
                      <a>Дипломная работа по экономике</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplom-na-zakaz/psihologiya">
                      <a>Дипломная работа по психологии</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplom-na-zakaz/menedjment">
                      <a>Дипломная работа по менеджменту</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplom-na-zakaz/pedagogika">
                      <a>Дипломная работа по педагогике</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dorabotka-diplomnoj-raboty">
                      <a>Доработка дипломной работы</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/razrabotka-diplomnogo-proekta">
                  <a>Дипломный проект на заказ</a>
                </Link>
              </li>
              <li>
                <Link href="/kursovaya-rabota-na-zakaz">
                  <a>Курсовая работа на заказ</a>
                </Link>
                <ul>
                  <li>
                    <Link href="/kursovaya-rabota-na-zakaz/sait-kursovyh-rabot">
                      <a>Сайт курсовых работ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kursovaya-rabota-na-zakaz/skolko-stoit">
                      <a>Сколько стоит курсовая работа</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kursovaya-rabota-na-zakaz/psihologiya">
                      <a>Курсовая работа по психологии</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kursovaya-rabota-na-zakaz/ekonomika">
                      <a>Курсовая работа по экономике</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kursovaya-rabota-na-zakaz/buhgalterskiy-uchet">
                      <a>Курсовая работа бухгалтерскому учету</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kursovaya-rabota-na-zakaz/yurisprudenciya-pravo">
                      <a>Курсовая работа по праву</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kursovaya-rabota-na-zakaz/pedagogika">
                      <a>Курсовая работа по педагогике</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kursovaya-rabota-na-zakaz/arhitektura">
                      <a>Курсовая работа по архитектуре</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/kursovoj-proekt-na-zakaz">
                  <a>Курсовой проект на заказ</a>
                </Link>
                <ul>
                  <li>
                    <Link href="/kursovoj-proekt-na-zakaz/po-detalyam-mashin">
                      <a>Курсовая работа по деталям машин</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/dissertaciya-na-zakaz">
                  <a>Диссертация на заказ</a>
                </Link>
                <ul>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/doktorskaya">
                      <a>Докторская диссертация на заказ</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/doktorskaya/medicina">
                          <a>Докторская диссертация по медицине</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/doktorskaya/pedagogika">
                          <a>Докторская диссертация по педагогике</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/kandidatskaya">
                      <a>Кандидатская диссертация на заказ</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/kandidatskaya/skolko-stoit">
                          <a>Сколько стоит кандидатская диссертация</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/kandidatskaya/yurisprudenciya-pravo">
                          <a>Кандидатская диссертация по юриспруденции</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/magisterskaya">
                      <a>Магистерская диссертация на заказ</a>
                    </Link>
                    <ul>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/magisterskaya/skolko-stoit">
                          <a>Сколько стоит магистерская диссертация</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/magisterskaya/gde-zakazat">
                          <a>Где заказать магистерскую диссертацию</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/magisterskaya/yurisprudenciya-pravo">
                          <a>Магистерская диссертация по юриспруденции</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/magisterskaya/psihologiya">
                          <a>Магистерская диссертация по психологии</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/magisterskaya/ekonomika">
                          <a>Магистерская диссертация по экономике</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dissertaciya-na-zakaz/magisterskaya/menedzhment">
                          <a>Магистерская диссертация по менеджменту</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/soiskatelstvo">
                      <a>Соискательство</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/aspirantura">
                      <a>Аспирантура</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/steps">
                      <a>Как защитить диссертацию</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/gde-zakazat-dissertaciyu">
                      <a>Где заказать диссертацию</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/skolko-stoit-napisat">
                      <a>Сколько стоит написать диссертацию</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/medicina">
                      <a>Заказать диссертацию по медицине</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/ekonomika">
                      <a>Заказать диссертацию по экономике</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/yurisprudenciya-pravo">
                      <a>Заказать диссертацию по юриспруденции</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dissertaciya-na-zakaz/redaktirovanie">
                      <a>Сколько стоит редактирование диссертации</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/diplom-mba-na-zakaz">
                  <a>Диплом MBA на заказ</a>
                </Link>
              </li>
              <li>
                <Link href="/zakazat-otchet-po-praktike">
                  <a>Отчет по практике на заказ</a>
                </Link>
                <ul>
                  <li>
                    <Link href="/zakazat-otchet-po-praktike/proizvodstvennoj">
                      <a>Отчет по производственной практике</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/zakazat-otchet-po-praktike/preddiplomnoj">
                      <a>Купить преддипломную практику</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/zakazat-otchet-po-praktike/uchebnoj">
                      <a>Заказать отчет по учебной практике</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/zakazat-otchet-po-praktike/pedagogicheskoj">
                      <a>Заказать отчет по педагогической практике</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/zakazat-esse">
                  <a>Эссе на заказ</a>
                </Link>
              </li>
              <li>
                <Link href="/kontrolnaya-na-zakaz">
                  <a>Контрольная работа на заказ</a>
                </Link>
              </li>
              <li>
                <Link href="/referat-na-zakaz">
                  <a>Реферат на заказ</a>
                </Link>
                <ul>
                  <li>
                    <Link href="/referat-na-zakaz/skolko-stoit-referat">
                      <a>Сколько стоит реферат</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/referat-na-zakaz/filosofiya">
                      <a>Реферат по философии</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/stati">
              <a>Статьи</a>
            </Link>
            <ul>
              <li>
                <Link href="/stati/skoraya-pomoshch-studentu">
                  <a>Скорая помощь студенту!</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/idealnyj-student-i-idealnyj-aspirant-kak-imi-stat">
                  <a>Идеальный студент и идеальный аспирант. Как ими стать?</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/kak-naladit-otnosheniya-s-nauchnym-rukovoditelem">
                  <a>Как наладить отношения с научным руководителем</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/kak-podgotovitsya-i-postupit-v-aspiranturu">
                  <a>Как подготовиться и поступить в аспирантуру</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/kak-podgotovitsya-k-ekzamenu">
                  <a>Как подготовиться к экзаменам</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/kak-pravilno-zakazat-diplom">
                  <a>Как правильно заказать диплом</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/kak-uspeshno-zashhitit-diplomnuyu-rabotu">
                  <a>Как успешно защитить дипломную работу</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/napisanie-diploma">
                  <a>Написание диплома</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/napisanie-kursovyh-rabot">
                  <a>Написание курсовых работ</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/napisanie-referatov">
                  <a>Написание рефератов</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/neskolko-pravil-uspeshnoj-zashhity">
                  <a>Несколько правил успешной защиты</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/pochemu-studenty-vybirayut-uslugu-diplom-na-zakaz">
                  <a>Почему студенты выбирают услуги диплом на заказ</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/samodisciplina-zalog-otlichnoj-ucheby">
                  <a>Самодисциплина - залог отличной учебы</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/sovmestit-rabotu-i-uchebu-realno">
                  <a>Совместить работу и учебу реально!</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/stan-luchshim-studentom-v-vuze">
                  <a>Стань лучшим студентом в ВУЗе!</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/vybiraem-vuz-svoej-mechty">
                  <a>Выбираем вуз своей мечты</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/kak-sostavit-plan-diplomnoj-raboty">
                  <a>Как составить план дипломной работы</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/zakluchenie-k-diplomnoj-rabote">
                  <a>Как написать заключение к дипломной работе (образец)</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/gipoteza-v-diplomnoj-rabote">
                  <a>Гипотеза в дипломной работе</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/recenziya-na-diplomnuyu-rabotu">
                  <a>Рецензия на дипломную работу</a>
                </Link>
              </li>
              <li>
                <Link href="/stati/rech-k-diplomnoj-rabote">
                  <a>Речь к дипломной работе</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <a name="form" id="form"/>
      <FormOrder/>

    </div>
  </Wrapper>
);


export default page
