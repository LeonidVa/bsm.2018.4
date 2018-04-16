import Document, { Head, Main, NextScript } from 'next/document'
import foxLogo from '../img/fox-logo.svg'


export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="shortcut icon" href={foxLogo}/>
                    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300i,400,500,500i,700" rel="stylesheet" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>  
                        <Main />
                        <NextScript />
                </body>
            </html>
        )
    }
}