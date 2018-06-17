import Wrapper from 'components/Wrapper';
import Title from 'components/common/Title';
import Link from 'next/link';


const page = () => (
    <Wrapper title=":тут title который в head:">
        <div className="wrapper bg bg-c1 bg-img bg-img1">
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/pricing">
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
                <h2 className="block-text__title">Дипломный проект</h2>
                <p className="block-text__par">Тут должна быть страница про дипломный проект. На старом сайте есть страница с таким же адресом.</p>
            </section>

        </div>
    </Wrapper>
);

export default page
