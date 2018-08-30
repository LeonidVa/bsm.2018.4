import Form from './Big'
//            <OrderForm title="Заказать работу" redForm={true} buttonLabel="Заказать" fields={fields}/>
// <FormOrder />
// import FormOrder from 'components/common/forms/Order';
import fields from 'components/config/form/main'
export default () => (<Form formType="Заказать работу" targetID="order" title="Заказать работу" redForm={true} buttonLabel="Заказать" fields={fields}/>)

/*

import OrderForm from 'components/common/OrderForm'

import FormOrder from 'components/common/forms/Order';
import FormEstimate from 'components/common/forms/Order';
*/