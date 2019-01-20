import FormWithTimer from 'components/common/forms/WithTimer'

import styled from 'styled-components'

const BlockFormTimer = styled.section`
  font-size: 2em;
  width: 30.94em;
  max-width: 100%;
  margin: 1.56em auto 0;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: right top;
  padding: 3.56em 2.688em 3.25em;
  color: #ffffff;
  @media (max-width: 900px) {
    width: 100%;
    background-position-x: 85%;
  }
  @media (max-width: 660px) {
    font-size: 1.375em;
    padding: 1em 0.75em 1.56em;
    background-position-x: 72%;
  }
  @media (max-width: 660px) {
    display: inline-block;
  }
`;

const BlockFormTitleH = styled.span`
  font-size: 1em;
  margin-bottom: .56em;
`;

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