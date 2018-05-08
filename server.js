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
        const {name, phone, email, theme, worktype, discipline, deadline, size, comment, files, verified} = req.body;

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
                source: "site",
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
                    answer = {error: false, id: reply.data.id, msg: 'заявка успешно отправлена'}
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
                'Имя: ' + name + '\n' +
                'Телефон: ' + phone + '\n' +
                'Email: ' + email + '\n' +
                'Тема: ' + theme + '\n' +
                'Предмет: ' + discipline + '\n' +
                'Срок сдачи: ' + deadline + '\n' +
                'Объём: ' + size + '\n' +
                'Файлы: ' + filelist + '\n' +
                'Комментарии: ' + comment + '\n';
            fs.writeFile(dir + '/request-' + id + `.txt`,
                text,
                (err) => {
                    // throws an error, you could also catch it here
                    //if (err) throw err;
                    // success case, the file was saved
                });

            /*        let transporter = nodemailer.createTransport(`smtps://${process.env.GMAIL_LOGIN}%40gmail.com:${process.env.GMAIL_PASSWORD}@smtp.gmail.com`);
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
                    };*/
            // transporter.sendMail(mailManagerOptions, function (error, info) {
            //     if (error) {
            //         console.log(error);

            //     } else {
            //         console.log('Email sent: ' + info.response);
            //     }
            // });

            /*        if (email) {
                        /!* if user sent us an email address - send our email to user's email :D *!/
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
                    }*/


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

