import React from 'react';

export default class extends React.Component {
  static async getInitialProps({res}) {
    if (!res || res.end === undefined) return {};
    let robots =
`User-agent: *
Disallow: *zakaz?type=
Disallow: *humour
Disallow: *upload?token=

Host: https://besmarter.ru/
Sitemap: https://besmarter.ru/sitemap.xml
`;

    res.end(robots, 'utf8');
    return {}
  }

  render() {
    return null
  }
}
