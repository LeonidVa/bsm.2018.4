import {createContext} from 'react';

export const exitPopupContext = createContext(
    {
        phone: '',
        isShown: false,
        show: () => {
        },
        hide: () => {
        },
        toggle: () => {
        },
    }
);


export const someModalContext = createContext(false);