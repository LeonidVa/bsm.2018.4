import Wrapper from 'components/Wrapper';
import Title from 'components/common/Title';
import Link from 'next/link';

//
const page = () => (
    <Wrapper title="Заказать дипломный проект в Москве, в компании «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c1 bg-img bg-img1">
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/price">
                        <a>AAAAAAAAAA</a>
                    </Link>
                    <span> / </span>
                    <Link href="/course">
                        <a>AAAAAAAAAAAAAAA</a>
                    </Link>
                </div>
            </section>

            <Title>ЭТО СТРАНИЦА-ЗАГЛУШКА</Title>

            <section className="block-text">
                <h1 className="block-text__title">Дипломный проект</h1>
                <p className="block-text__par">Тут должна быть страница про дипломный проект. На старом сайте есть страница с таким же адресом.</p>
            </section>

        </div>
    </Wrapper>
);

export default page
