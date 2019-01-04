const redirectList = {
  "besmarter.ru": {
    '/diplomnaya-rabota-po-buhgalterskomu-uchetu': '/diplom-na-zakaz/buhgalterskij-uchet',
    '/diplomnaya-rabota-po-menedjmentu': '/diplom-na-zakaz/menedjment',
    '/diplomnaya-rabota-po-pedagogike': '/diplom-na-zakaz/pedagogika',
    '/diplomnaya-rabota-po-yurisprydencii': '/diplom-na-zakaz/yurisprudenciya-pravo',
    '/kursovaya-rabota-po-buhgalterskomu-uchetu': '/kursovaya-rabota-na-zakaz/buhgalterskiy-uchet',
    '/kursovaya-rabota-po-pedagogike': '/kursovaya-rabota-na-zakaz/pedagogika',
    '/kursovaya-rabota-po-pravu': '/kursovaya-rabota-na-zakaz/yurisprudenciya-pravo',
    '/kursovaya-rabota-po-psihologii': '/kursovaya-rabota-na-zakaz/psihologiya',
    '/onas': '/about',
    '/sitemap': '/map',
  },
  "student.besmarter.ru": {}
};


redirectList["localhost"] = redirectList["besmarter.ru"];

function redirectURL(req) {
  let path = req.path;
  if (path === '/') {
    //console.log('redirect: path is /');
    return null;
  }
  const list = redirectList[req.hostname];
  if (list === undefined) {
    //console.log('redirect: list not found for hostname ' + req.hostname);
    return null;
  }
  if (list === undefined) {
    //console.log('redirect: list is empty for hostname ' + req.hostname);
    return null;
  }
  let url = list[path];
  if (url !== undefined) {
    return list[path];
  }
  path = path.slice(-1);
  url = list[path];
  if (url !== undefined) {
    return list[path];
  }
  return null;
}

module.exports = {
  redirectList: redirectList,
  redirectURL: redirectURL,
};
