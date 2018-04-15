import Link from 'next/link';
import './index.scss';

export default (props) => (
        <header className="header">
            <div className="inner">
                <div className="header__left">
                    <Link href="/">
                        <a className="humburger">
                            <div className="humburger__line"></div>
                            <div className="humburger__line"></div>
                            <div className="humburger__line"></div>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="header__logo">
                            Be<span>Smarter!</span>
                        </a>
                    </Link>
                    <nav className="nav">
                        <ul>
                            <li>
                                <Link href="/pricing">
                                    <a>Услуги и цены</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts">
                                    <a>Контакты</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a>О нас</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
				</div>
                        <div className="header__right">
                            <span className="header__tel">+7 495 772 40 90</span>
                            <a href="#" className="header__order-tel to-modal__order-call">Заказать звонок</a>
                        </div>
			</div>
                    <div className="menu-mob__close">
                        <div className="menu-mob__line"></div>
                        <div className="menu-mob__line"></div>
                    </div>
		</header>
)