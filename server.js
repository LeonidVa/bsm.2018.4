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
                                <li><h4>Email: ${req.body.email}</h4></li>
                                <li><p>Я хочу заказать товар: <b>"${req.body.subject}"</b></li>
                            </ul>
                        </div>`,
                        attachments: [{
                                        'filename': req.body.file[1] || '', 
                                        'content': Buffer.from(req.body.file[0], 'base64') || '',
                                        'contentType': req.body.file[2] || ''
                                     }]
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