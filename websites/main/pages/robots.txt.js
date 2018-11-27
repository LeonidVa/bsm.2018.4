import React from 'react';

export default class extends React.Component {
  static async getInitialProps({res}) {
    if (!res || res.end === undefined) return {};
    res.end(`User-agent: *
Host: https://besmarter.ru/
Sitemap: https://besmarter.ru/sitemap.xml
Disallow: *zakaz?type=
Disallow: *humour
Disallow: *upload?token=`, 'utf8');
    return {}
  }

  render() {
    return null
  }
}
