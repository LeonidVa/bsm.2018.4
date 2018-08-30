import Form from './Big'
//            <OrderForm title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" fields={fields}/>
// <FormEstimate />
// import FormEstimate from 'components/common/forms/Order';
import fields from 'components/config/form/main'
export default () => (<Form formType="Узнай стоимость работы" targetID="estimate" title="Узнай стоимость работы прямо сейчас" redForm={true} buttonLabel="Оценить" fields={fields}/>)