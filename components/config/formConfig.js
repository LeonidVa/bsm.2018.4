export const formConfig = [
    { label: 'Имя',         name:"name",    type: 'text',  id: 'form-name',    placeholder:'Ваше имя',     required: true},
    { label: 'Телефон',     name:"tel",     type: 'text',  id: 'form-phone',   placeholder: 'Ваш телефон', required: true },
    { label: 'Почта',       name:"email",   type: 'email', id: 'form-email',   placeholder: 'email',       required: false },
    { label: 'Вид работы',  name:"work",    type: 'text',  id: 'form-work',    placeholder: '',            required: false },
    { label: 'Предмет',     name:"subject", type: 'text',  id: 'form-subject', placeholder: '',            required: false },
    { label: 'Тема работы', name:"topic",   type: 'text',  id: 'form-topic',   placeholder: '',            required: false },
    { label: 'Прикрепить Файл', name:"file",   type: 'file',  id: 'form-file',   placeholder: 'Добавить файл',         required: false }
]

export const formConfigSecond = [
    { label: 'Вид работы', name: "work", type: 'text', id: 'form-work', placeholder: '', required: true },
    { label: 'Предмет', name: "subject", type: 'text', id: 'form-subject', placeholder: '', required: true },
    { label: 'Тема работы', name: "topic", type: 'text', id: 'form-topic', placeholder: '', required: true },
    { label: 'Имя', name: "name", type: 'text', id: 'form-name', placeholder: 'Ваше имя', required: false },
    { label: 'Телефон', name: "tel", type: 'text', id: 'form-phone', placeholder: 'Ваш телефон', required: false },
    { label: 'Почта', name: "email", type: 'email', id: 'form-email', placeholder: 'email', required: false},
]
 