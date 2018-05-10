import Wrapper from 'components/Wrapper';
import Title from 'components/common/Title';
import Link from 'next/link';


const page = () => (
    <Wrapper title=":тут title который в head:">
        <div className="wrapper bg bg-c2 bg-img bg-img4">
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

        </div>
    </Wrapper>
);

export default page