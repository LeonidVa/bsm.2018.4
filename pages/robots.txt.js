import React from 'react';

export default class extends React.Component {
  static async getInitialProps({res}) {
    if (!res) return {};
    res.setHeader('Content-Type', 'application/javascript');
    res.end(`User-agent: *
Disallow: https://www.cloudflare.com/sign-up?utm_source=email_protection
Disallow: https://support.cloudflare.com/hc/en-us/articles/200170016-What-is-Email-Address-Obfuscation-
Disallow: https://support.cloudflare.com/hc/en-us/categories/200275218-Getting-Started
Disallow: https://www.cloudflare.com/5xx-error-landing?utm_source=error_footer
Host: https://besmarter.ru/

Sitemap: https://besmarter.ru/sitemap.xml`, 'utf8');
    return {}
  }

  render() {
    return null
  }
}
