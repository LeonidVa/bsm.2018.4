import Link from 'next/link';
import React from 'react';

import './index.scss';
import foxLogo from 'static/images/fox-circle.svg'
import BottomHelper from 'components/common/CallAsk'

export const SiteMapBlock = ({
  isSiteMapShown,
}) => (
  <div>
    {isSiteMapShown && <span><Link href="/map">Карта сайта</Link></span>}
  </div>
);

export default (props) => {
  const navButtonsDefault = (
    <ul>
      <li>
        <Link href="/contacts"><a>Контакты</a></Link>
      </li>
      <li>
        <Link href="/about"><a>О нас</a></Link>
      </li>
      <li>
        <Link href="/price"><a>Услуги и Цены</a></Link>
      </li>
      <li>
        <Link href="/avtoram"><a>Авторам</a></Link>
      </li>
      <li>
        <Link href="/garantii"><a>Гарантии</a></Link>
      </li>
      <li>
        <Link href="/stati"><a>Статьи</a></Link>
      </li>
    </ul>
  );
  const { navButtons = navButtonsDefault, isSiteMapShown } = props;
  return (
    <div>
      <BottomHelper />
      <div className="footer">
        <div className="inner">
          <div className="footer__logo">
            <img src={foxLogo} alt="Лого BeSmarter!" />
          </div>
          <div className="footer__center">
            <nav className="nav">
              {navButtons}
            </nav>
          </div>
        </div>
        <p className="copyright">
          <span>
            119019, Москва Большой Кисловский переулок, д. 1 стр. 2, офис 211
          </span>
          <span>
            м.&nbsp;Арбатская, м.&nbsp;Александровский&nbsp;сад,
            м.&nbsp;Библиотека&nbsp;
            им.&nbsp;Ленина, м.&nbsp;Боровицкая
          </span>
          <br />
          <span>Уважаемые клиенты!</span>
          <span>
            Компания «БиСмартер», строго выполняя требования законодательства РФ,
            не продаёт дипломы, курсовые и другие готовые работы.
          </span>
          <span>
            Зато мы отлично подберём нужный свежий материал,
            структурируем его по определённому Вами плану.
          </span>
          <span>Мы подготовим Вас к успешной спокойной защите любой сложности!</span>
          <br />
          <span>ИНН 7725765120 ОГРН 1127746632276</span>
          <span>
            © 2004-{1900 + new Date().getYear()}
          </span>
          <br />
          <SiteMapBlock isSiteMapShown={isSiteMapShown} />
        </p>
      </div>
    </div>
  );
};
