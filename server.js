const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser').json({limit: '100mb'});
const nodemailer = require('nodemailer');
const requestIp = require('request-ip');
const axios = require('axios')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const compression = require('compression')

app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser);
        server.use(compression())
        server.get('*', (req, res) => {
            return handle(req, res)
        });
        server.post('/api/form_data', (req, res) => {
            const {name, phone, email, theme, worktype, discipline, deadline, size, comment, files, verified} = req.body
            if (verified) {
                axios.post('https://orders.besma.ru/api/orders/new', {
                        data: {
                            source: "site",
                            brand: "besmarter",
                            remote_addr: requestIp.getClientIp(req),
                            name, phone, email, theme, worktype, discipline, deadline, size, comment,
                            files: files.map(file => file.name)
                        }
                    }
                ).then((reply) => {
                    console.log(reply.data);
                    //console.log(reply.data.message)
                    if (reply) {
                        if (reply.data.error) {
                            saveAndSend();
                            res.send({error: true, msg: reply.data.msg})
                        } else {
                            saveAndSend(reply.id);
                            res.send({error: false, id: reply.data.id, msg: 'заявка успешно отправлена'})
                        }
                    }
                }).catch((error) => {
                    console.log(error)
                    saveAndSend()
                    res.send({error: true, msg: error})
                })

                function saveAndSend(id) {
                    let orderLog = "";
                    if (typeof id === "undefined") {
                        id = "НЕТ";
                        orderLog = uniqid()
                    } else {
                        orderLog = id
                    }
                    orderLog = String(Math.floor(new Date() / 1000)) + "-" + orderLog;
                    let text = '' +
                        'Номер заявки: ' + id + '\n' +
                        'Имя: ' + name + '\n' +
                        'Телефон: ' + phone + '\n' +
                        'Email: ' + email + '\n' +
                        'Тема: ' + theme + '\n' +
                        'Предмет: ' + discipline + '\n' +
                        'Срок сдачи: ' + deadline + '\n' +
                        'Объём: ' + size + '\n' +
                        'Комментарии: ' + comment + '\n';
                    fs.writeFile(`userData/` + orderLog + `.txt`,
                        text,
                        (err) => {
                            // throws an error, you could also catch it here
                            if (err) throw err;
                            // success case, the file was saved
                        });
                    if (files) {
                        /*create folder to store files*/
                        let dir = `userData/files/` + orderLog;
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        files.map((file, index) => {
                            if (file.name === undefined) {
                                file.name = 'file-' + index
                            }
                            if (file.url === undefined) {
                                file.url = ''
                            }
                            fs.writeFile(dir + '/' + path.basename(file.name),
                                Buffer.from(file.url, 'base64'),
                                (err) => {
                                    // throws an error, you could also catch it here
                                    if (err) throw err;
                                    // success case, the file was saved
                                })
                        });
                    }
                    let transporter = nodemailer.createTransport(`smtps://${process.env.GMAIL_LOGIN}%40gmail.com:${process.env.GMAIL_PASSWORD}@smtp.gmail.com`);
                    let mailManagerOptions = {
                        from: 'noreply@besmarter.ru',
                        to: `${process.env.EMAIL_1}, ${process.env.EMAIL_2}`,
                        subject: 'besmarter',
                        text: text,
                        // attachments: files ? files.map(file => ({
                        //     'filename': file.name ? file.name : '',
                        //     'content': Buffer.from(file.url, 'base64'),
                        //     'contentType': file.type ? file.type : ''
                        // })
                        // ) : null
                    };
                    // transporter.sendMail(mailManagerOptions, function (error, info) {
                    //     if (error) {
                    //         console.log(error);

                    //     } else {
                    //         console.log('Email sent: ' + info.response);
                    //     }
                    // });

                    if (email) {
                        /* if user sent us an email address - send our email to user's email :D */
                        let mailClientOptions = {
                            from: 'noreply@besmarter.ru',
                            to: email,
                            subject: 'besmarter',
                            html: `
                                    <div>
                                        <p>Здравствуйте!</p>
                                        <br/>
                                        <p>Вашу заявку мы получили. В ближайшее время с Вами свяжется наш менеджер и ответит на все интересующие Вас вопросы.</p>
                                        <br/>
                                        <p>Мы работаем для Вас:</p>
                                        <p>Понедельник - пятница:</p>
                                        <p>с 10:00 до 19:30</p>
                                        <p>Суббота, воскресенье -  с 10:00 до 18:30</p>
                                        <p>НАШ ТЕЛЕФОН РАБОТАЕТ ЕЖЕДНЕВНО</p>
                                        <p>с 8:00 до 24:00</p>
                                        <br/>
                                        <p>Если у Вас возникнут дополнительные вопросы, пожалуйста, обязательно пишите или звоните нам, мы всегда рады Вам помочь!</p>
                                        <p>С уважением, - компания BeSmarter!</p>
                                        <br/>
                                        <p>Наши телефоны: 8 (495) 772-40-90, 8 (495) 772-90-40</p>
                                        <p>Наша почта: zakaz@besmarter.ru</p>
                                        <p>Наш сайт: BeSmarter.ru</p>
                                </div>`
                        }
                        // transporter.sendMail(mailClientOptions, function (error, info) {
                        //     if (error) {
                        //         console.log(error);

                        //     } else {
                        //         console.log('Email sent: ' + info.response);
                        //     }
                        // });
                    }
                }
            }
            //console.log(req.body, 'post')
        });
        let port = 3000;
        server.listen(port, (err) => {
            if (err) {
                throw err;
            }
            console.log('> Ready on http://localhost:' + port)
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });
