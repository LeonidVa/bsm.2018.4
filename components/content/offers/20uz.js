import CallMeFormWithTimer from 'components/common/CallMeFormWithTimer'

const Offer20uz = () => (
    <section className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
        <h2 className="block-form-timer__title">
            <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
            Успей получить<br/> скидку на пакет <br/> «Успешная Защита»
        </h2>
        <CallMeFormWithTimer
            timerDuration={155555}
            formType="Скидка 20% на материалы"
            targetID="sale_20%"
        >
            <p>при одновременном заказе вместе с работой</p>
        </CallMeFormWithTimer>
    </section>
);

export default Offer20uz