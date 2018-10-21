import React from 'react';

export default class extends React.Component {
  static async getInitialProps({res}) {
    if (!res) return {};
    res.setHeader('Content-Type', 'application/javascript');
    res.end(`User-agent: *
Allow: /
Host: https://besmarter.ru/
Sitemap: https://besmarter.ru/sitemap.xml`, 'utf8');
    return {}
  }

  render() {
    return null
  }
}
