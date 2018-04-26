const express = require('express');
const next = require('next');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser').json({limit:'100mb'});;

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

            server.post('/api/form_data', (req, res)=>{

                const { name, tel, email, subject, files } = req.body
                console.log(files)
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD
                    }
                    });

                    var mailOptions = {
                        from: 'no_reply@besmarter.ru',
                        to: process.env.EMAIL,
                        subject: 'besmarter ',
                        html:`
                            <div>
                                <h2 style='margin-left: 15%'>Новый заказ!</h2>
                                <ul>
                                <li><h4>Имя: ${req.body.name}</h4></li>
                                <li><h4>Телевон:${req.body.tel}.</h4></li>
                                <li><h4>Email: ${email ? email : 'не указано'}</h4></li>
                                <li><p>Я хочу заказать товар: <b>"${subject ? subject : 'не указано'}"</b></li>
                            </ul>
                        </div>`,
                        attachments: files ? files.map(file =>({
                                                        'filename': file.name ? file.name : '', 
                                                        'content': Buffer.from(file.url, 'base64'),
                                                        'contentType': file.type ? file.type : ''
                                                      })
                                                    ): null
                    };

                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);

                        } else {
                            console.log('Email sent: ' + info.response);
                    }
            });
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