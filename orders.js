/*
  This instance only for handling form submits.
  Run pm2 start npm --name "next" -- start to start the web site.
*/
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');
const nodemailer = require('nodemailer');
const axios = require('axios');
const multer = require('multer');

const storagePath = __dirname + "/uploads";
const port = 3001;


app.post('/api/form_data', (req, res) => {
    console.log("got POST /api/form_data");
    /* create folder to store files */
    let dir = storagePath + '/' + String(Math.floor(new Date() / 1000)) + "-" + uniqid();
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    let storage = multer.diskStorage({
        destination: dir,
        filename: function (req, file, cb) {
            cb(null, path.basename(file.originalname))
        }
    });
    let upload = multer({storage: storage}).any();
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            return
        }
        // Everything went fine
        console.log('req.body', req.body);
        console.log('req.files', req.files);
        const {formtype, name, phone, email, theme, worktype, discipline, deadline, size, comment, files, verified} = req.body;

        let answer;
        if (!verified) {
            console.log("not verified");
            return false;
        }
        let filelist = [];
        if (req.files !== undefined && req.files.length > 0) {
            filelist = req.files.map(file => file.originalname)
        }
        const ares = axios.post('https://orders.besma.ru/api/orders/new', {
            data: {
                source: "site:" + formtype,
                brand: "besmarter",
                remote_addr: req.connection.remoteAddress,
                name, phone, email, theme, worktype, discipline, deadline, size, comment,
                files: filelist
            }
        }).then((reply) => {
            console.log("got reply");
            console.log("error", reply.data.error);
            console.log("id", reply.data.id);
            if (reply && reply.data !== undefined && reply.data.error !== undefined) {
                if (reply.data.error) {
                    answer = {error: false, id: reply.data.id, msg: 'заявка успешно отправлена'};
                    saveAndSend();
                } else {
                    answer = {error: false, id: reply.data.id, msg: 'заявка успешно отправлена'};
                    saveAndSend(reply.data.id);
                }
            }
        }).catch((error) => {
            console.log("got err");
            console.log(error);
            answer = {error: true, msg: error};
            saveAndSend()
        });

        function saveAndSend(id) {
            if (typeof id !== "undefined") {
                let newdir = storagePath + '/' + id;
                fs.renameSync(dir, newdir);
                dir = newdir
            }


            let text = '' +
                'Номер заявки: ' + id + '\n' +
                'Тип формы: ' + (formtype === undefined ? '' : formtype) + '\n' +
                'Имя: ' + (name === undefined ? '' : name) + '\n' +
                'Телефон: ' + (phone === undefined ? '' : phone) + '\n' +
                'Email: ' + (email === undefined ? '' : email) + '\n' +
                'Тема: ' + (theme === undefined ? '' : theme) + '\n' +
                'Предмет: ' + (discipline === undefined ? '' : discipline) + '\n' +
                'Срок сдачи: ' + deadline(deadline === undefined ? '' : deadline) + '\n' +
                'Объём: ' + (size === undefined ? '' : size) + '\n' +
                'Файлы: ' + (filelist === undefined ? '' : filelist) + '\n' +
                'Комментарии: ' + (comment === undefined ? '' : comment) + '\n';
            fs.writeFile(dir + '/request-' + id + `.txt`,
                text,
                (err) => {
                    // throws an error, you could also catch it here
                    //if (err) throw err;
                    // success case, the file was saved
                });

            const mailLogin = encodeURIComponent(process.env.MAIL_LOGIN);
            const mailPassword = encodeURIComponent(process.env.MAIL_PASSWORD);
            const mailSMTP = encodeURIComponent(process.env.MAIL_SMTP);
            //console.log('smtps://' + mailLogin + ':' + mailPassword + '@' + mailSMTP);
            let transporter = nodemailer.createTransport('smtps://' + mailLogin + ':' + mailPassword + '@' + mailSMTP);
            let mailManagerOptions = {
                from: 'noreply@besmarter.ru',
                to: `${process.env.EMAIL_1}, ${process.env.EMAIL_2}`,
                subject: 'BeSmarter Новая заявка',
                text: text,
            };
            transporter.sendMail(mailManagerOptions, function (error, info) {
                if (error) {
                    console.log('Email error: ');
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            if (email) {
                /* if user sent us an email address - send our email to user's email :D */
                let mailClientOptions = {
                    from: 'zakaz@besmarter.ru',
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
                };
                transporter.sendMail(mailClientOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            }

            res.send(answer)
        }

    });


});

app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log('> Ready on http://localhost:' + port)
});

