import Form from "./index";
import fields from "data/form/main";

export default () => (
    <Form
        formType="Заказать работу"
        targetID="order"
        title="Заказать работу"
        redForm={true}
        buttonLabel="Заказать"
        fields={fields}
    />
);

