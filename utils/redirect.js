export default function redirect(url) {
    const list = {
        '/abc': '/def',
        '/ololo': '/ajaja',
    };
    return list[url]
}