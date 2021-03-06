import Document, {Head, Main, NextScript} from 'next/document'
import analytics from "utils/analytics";
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID } from 'lib/gtag';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
    render() {
        return (
            <html lang="ru">
            <Head>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `
                }}
              />
                <script dangerouslySetInnerHTML={{ __html: analytics.getMetricsScript()}}/>
                <noscript dangerouslySetInnerHTML={{ __html: analytics.getMetricsNoscript()}} />
                <meta name="yandex-verification" content="49e34bd8a11a83fb"/>
          {this.props.styleTags}
            </Head>
            <body>
            <Main/>
            <NextScript/>
            {/*<link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i&subset=cyrillic" rel="stylesheet"/>*/}
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </body>
            </html>
        )


    }
}