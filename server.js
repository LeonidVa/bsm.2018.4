const fs = require('fs')
var uniqid = require('uniqid');

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser').json({ limit: '100mb' });;

const nodemailer = require('nodemailer');
const requestIp = require('request-ip');
var axios = require('axios')
var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'me',
//     password: process.env.secret,
//     database: 'my_db'
// })

// connection.connect();


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.use(bodyParser);

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.post('/api/form_data', (req, res) => {




            const { name, tel, email, work, subject, topic, files, verified } = req.body
 
            if(verified){

                axios.post('site.com/api/orders/new', 
                    JSON.stringify(
                        { 
                          source: "site", 
                          brand: "besmarter", 
                          remote_addr: requestIp.getClientIp(req), 
                          name, tel, email, work, subject, topic, 
                          files: files.map(file=>file.name) 
                        }
                    )
                ).then((res)=>{
                    if(res && !res.error){
                        
                        saveAndSend(res.id)
                        res.send({error: false, id, msg: 'заявка успешно отправлена'})
                    }else if(res && res.error){

                        saveAndSend()
                        res.send({error: true, msg: res.msg})
                    }
                   
                }).catch((error)=>{

                    saveAndSend()
                    res.send({error: true, msg: error})
                })

                function saveAndSend(id){
                    fs.writeFile(`userData/${name}__${id ? id : uniqid()}.txt`,
                        'Номер заявки: '  + id      + '\n'  + 
                        'Имя: '           + name    + '\n'  + 
                        'Телефон: '       + tel     + '\n'  + 
                        'Email: '         + email   + '\n'  +
                        'Вид работы: '    + work    + '\n'  +
                        'Предмет: '       + subject + '\n'  +
                        'Тема работы: '   + topic   + '\n',
                        (err) => {
                        // throws an error, you could also catch it here
                        if (err) throw err;

                        // success case, the file was saved
                        
                    })

                    if(files){

                        files.map(file=>{
                            fs.writeFile(`userData/${name}__${id ? id : uniqid()}__${file.name}`,
                                Buffer.from(file.url, 'base64'),
                                (err) => {
                                    // throws an error, you could also catch it here
                                    if (err) throw err;

                                    // success case, the file was saved

                                })
                                
                            });
                    }

                    var transporter = nodemailer.createTransport(`smtps://${process.env.GMAIL_LOGIN}%40gmail.com:${process.env.GMAIL_PASSWORD}@smtp.gmail.com`);

                    var mailOptions = {
                        from: 'no_reply@besmarter.ru',
                        to: `${process.env.EMAIL_1}, ${process.env.EMAIL_2}`,
                        subject: 'besmarter ',
                        html: `
                                    <div>
                                        <h2 style='margin-left: 15%'>Новый заказ!</h2>
                                        <ul>
                                        <li><h4>Имя: ${req.body.name}</h4></li>
                                        <li><h4>Телевон:${req.body.tel}.</h4></li>
                                        <li><h4>Email: ${email ? email : 'не указано'}</h4></li>
                                        <li><h4>Вид работы: ${work ? work : 'не указано'}</h4></li>
                                        <li><h4>Предмет: ${subject ? subject : 'не указано'}"</h4></li>
                                        <li><h4>Тема работы: ${topic ? topic : 'не указано'}"</h4></li>
                                    </ul>
                                </div>`,
                        // attachments: files ? files.map(file => ({
                        //     'filename': file.name ? file.name : '',
                        //     'content': Buffer.from(file.url, 'base64'),
                        //     'contentType': file.type ? file.type : ''
                        // })
                        // ) : null
                    };

                    if(email){
                        var mailOptionsClient = {
                            from: 'no_reply@besmarter.ru',
                            to: email,
                            subject: 'besmarter ',
                            html: `
                                    <div>
                                        <p>Здравствуйте!</p>
                                        <br/>
                                        <p<p>Вашу заявку мы получили. В ближайшее время с Вами свяжется наш менеджер и ответит на все интересующие Вас вопросы.</p>
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
                    }

                    // transporter.sendMail(mailOptions, function (error, info) {
                    //     if (error) {
                    //         console.log(error);

                    //     } else {
                    //         console.log('Email sent: ' + info.response);
                    //     }
                    // });

                    // transporter.sendMail(mailOptionsClient, function (error, info) {
                    //     if (error) {
                    //         console.log(error);

                    //     } else {
                    //         console.log('Email sent: ' + info.response);
                    //     }
                    // });
                }
            }

            console.log(req.body, 'post')
        })

        

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
   
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
