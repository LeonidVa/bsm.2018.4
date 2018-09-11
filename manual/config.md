#Конфиг

Конфигурация живёт в двух местах. Основная в файле `/next.config.js`,
и переменные окружения так же задаются в `.env`.

## /next.config.js
Основная конфигурация фреймворка. Так же есть `serverRuntimeConfig`, который 
виден только при выполнении кода на сервере, и `publicRuntimeConfig` который
доступен и в браузере.

```js
const nextConfig = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        runtime: {
            isServer: true,
            isClient: false,
            mode: process.env.NODE_ENV,
            production: process.env.NODE_ENV === "production",
            development: process.env.NODE_ENV === "development",
        },
        ololo: "ajaja",
    },
    publicRuntimeConfig: {
        // Available on client
        runtime: {
            isServer: false,
            isClient: true,
            mode: process.env.NODE_ENV,
            production: process.env.NODE_ENV === "production",
            development: process.env.NODE_ENV === "development",
        },
        "tututu": "ddd"
    },
```