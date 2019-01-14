import Link from 'next/link';
import './index.scss';
import foxLogo from 'static/images/fox-circle.svg'
import BottomHelper from 'components/common/CallAsk'
import  {
  AFooter,
  AFooterCopyright,
  DivFooter,
  DivFooterCenter,
  DivFooterLogo,
  DivFooterNav,
  DivInner,
  LiFooter,
  PFooterCopyright,
  SpanFooter,
  UlFooter,
} from './style';

export default (props) => {
  const navButtonsDefault = 
    <UlFooter>
      <LiFooter>
        <Link href="/contacts">
          <AFooter>Контакты</AFooter>
        </Link>
      </LiFooter>
      <LiFooter>
        <Link href="/about">
          <AFooter>О нас</AFooter>
        </Link>
      </LiFooter>
      <LiFooter>
        <Link href="/price">
          <AFooter>Услуги и Цены</AFooter>
        </Link>
      </LiFooter>
      <LiFooter>
        <Link href="/avtoram">
          <AFooter>Авторам</AFooter>
        </Link>
      </LiFooter>
      <LiFooter>
        <Link href="/garantii">
          <AFooter>Гарантии</AFooter>
        </Link>
      </LiFooter>
      <LiFooter>
        <Link href="/stati">
          <AFooter>Статьи</AFooter>
        </Link>
      </LiFooter>
    </UlFooter>;
  const {navButtons = navButtonsDefault} = props;
  return (    <div>
      <BottomHelper/>

      <DivFooter className="footer">
        <DivInner className="inner">
          <DivFooterLogo className="footer__logo">
            <img src={foxLogo} alt="Лого BeSmarter!"/>
          </DivFooterLogo>

          <DivFooterCenter className="footer__center">
            <DivFooterNav className="nav">{navButtons}</DivFooterNav>
          </DivFooterCenter>
          
        </DivInner>
        <PFooterCopyright className="copyright">

          <SpanFooter>119019, Москва Большой Кисловский переулок, д. 1 стр. 2, офис 211</SpanFooter>
          <SpanFooter>м.&nbsp;Арбатская, м.&nbsp;Александровский&nbsp;сад, м.&nbsp;Библиотека&nbsp;им.&nbsp;Ленина, м.&nbsp;Боровицкая</SpanFooter>
          <br/>
          <SpanFooter>Уважаемые клиенты!</SpanFooter>
          <SpanFooter>Компания «БиСмартер», строго выполняя требования законодательства РФ, не продаёт дипломы, курсовые и другие готовые работы.</SpanFooter>
          <SpanFooter>Зато мы отлично подберём нужный свежий материал, структурируем его по определённому Вами плану.</SpanFooter>
          <SpanFooter>Мы подготовим Вас к успешной спокойной защите любой сложности!</SpanFooter>
          <br/>
          <SpanFooter>ИНН 7725765120 ОГРН 1127746632276</SpanFooter>
          <SpanFooter>© 2004-{1900 + new Date().getYear()}</SpanFooter>
          <br/>
          <SpanFooter><Link href="/map"><AFooterCopyright>Карта сайта</AFooterCopyright></Link></SpanFooter>

        </PFooterCopyright>
      </DivFooter>
    </div>
  );
}

