import FormWithTimer from 'components/common/forms/WithTimer'
import {
  BlockFormTimer,
  BlockFormTitleH
}from "./style.js"


const Offer20uz = () => (
    <BlockFormTimer className="block-form-timer" style={{backgroundImage: "url(" + require('static/images/block/h.jpg') + ")"}}>
        <BlockFormTitleH className="block-form-timer__title__h2" style={{lineHeight: "initial"}}>
            <span style={{fontSize: "2em", marginTop: "-2em"}}>20%</span><br/>
            Успей получить скидку<br/> на пакет «Успешная Защита»
        </BlockFormTitleH>
        <FormWithTimer
            timerDuration={155555}
            formType="Скидка 20% на материалы"
            targetID="sale_20%"
        >
            <p style={{fontSize: '70%', marginBottom: '11px'}}>при одновременном заказе вместе с работой</p>
        </FormWithTimer>
    </BlockFormTimer>
);

export default Offer20uz