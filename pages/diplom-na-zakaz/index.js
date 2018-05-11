import Wrapper from 'components/Wrapper';
import Title from 'components/common/Title';
import Link from 'next/link';
import NavRow from 'components/common/NavRow';
import MessBlock from 'components/common/MessBlock';


const page = () => (
    <Wrapper title=":тут title который в head:">
        <div className="wrapper bg bg-c1 bg-img bg-img1">
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/price">
                        <a>Услуги и цены</a>
                    </Link>
                    <span> / </span>
                    <Link href="/diplom-na-zakaz">
                        <a>Диплом</a>
                    </Link>
                </div>
            </section>

            <Title>Заказать дипломную работу</Title>

            <section className="block-nav">
                <NavRow title="Оценить работу" description="Узнайте сроки и цену вашей работы" url='#form1'/>
            </section>

            <MessBlock/>


            <section className="block-text">
                <h2 className="block-text__title">Диплом</h2>
                <p className="block-text__par">Тут должна быть страница про диплом. На старом сайте есть страница с таким же адресом.</p>
            </section>

        </div>
    </Wrapper>
);

export default page