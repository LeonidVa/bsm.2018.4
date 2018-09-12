import Form from './index'
import fields from 'components/config/form/main';

export default () => (
    <Form
        formType="Узнай стоимость работы"
        targetID="estimate"
        title="Узнай стоимость работы прямо сейчас"
        redForm={true}
        buttonLabel="Оценить"
        fields={fields}
    />
);