import Link from 'next/link';

import './index.scss';
import foxLogo from '../../../img/fox-logo.svg'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

import NotFind from '../common/NotFind'

const { faTwitter, faFacebookF, faTumblr } = brands

export default (props) => (
  <div>
    <NotFind />

    <div className="footer">
        <div className="inner">
            <div className="footer__logo">
                <img src={foxLogo} alt="" />
			</div>

                <div className="footer__center">
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link href="/contacts"> 
                                    <a>Контакты</a>
                                </Link> 
                            </li>
                            <li>
                                <Link href="/about">
                                    <a href="about">О нас</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing">
                                    <a>Цены</a>
                                </Link>
                            </li>
                            <li><a href="#">Авторам</a></li>
                            <li>
                                <Link href="/guarantees">
                                    <a>Гарантии</a>
                                </Link>
                            </li>
                            <li><a href="#">Оплата</a></li>
                        </ul>
                    </nav>
                </div>

                {/* <div className="footer__socials">
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </Link>
                    <Link href="#"> 
                        <a>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </Link>
                    <Link href="#">
                        <a>
                            <FontAwesomeIcon icon={faTumblr} />
                        </a>
                    </Link>
                </div> */}
            </div>
            <p className="copyright">
                119019, Москва
				<span>м. Арбатская, м. Александровский сад, м. Библиотека им. Ленина, м. Боровицкая</span>
                <span>Большой Кисловский переулок, д. 1 стр. 2, офис 211
				ИНН 7725765120 ОГРН 1127746632276</span>
            </p>
	</div>
  </div>
)