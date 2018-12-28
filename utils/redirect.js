var redirectList = {
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
};

/**
 * Remove trailing slashes from the given `str`
 *
 * @param {String} str
 * @return {String}
 */
function removeTrailingSlash(str) {
    let regex = /\/+$/;
    return String(str).replace(regex, '');
};
/**
 * Checks if the path matches a RegExp.
 *
 * @param {String} path
 * @param {RegExp} regExp
 * @param {Array.<string>} excludePath skip this paths
 * @return {String}
 */
function pathMatches(path, regExp, excludePath = []) {
    function isRegExp(x) {
        return Object.prototype.toString.call(x) === '[object RegExp]';
    }

    function isArray(x) {
        return Object.prototype.toString.call(x) === '[object Array]';
    }

    function isString(x) {
        return Object.prototype.toString.call(x) === '[object String]';
    }

    if (!isString(path)) {
        return false;
    }

    if (isArray(excludePath)) {
        if (excludePath.includes(path)) {
            return false;
        }
    }

    if (isRegExp(regExp)) {
        if (regExp.test(path)) {
            return true;
        }
    }

    return false;
}

module.exports = {
    redirectList: redirectList,
    removeTrailingSlash: removeTrailingSlash,
    pathMatches: pathMatches
};
