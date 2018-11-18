import Service from './service.js';


class TempalteLoader {
    static load(path, data = {}) {
        return loadTemplate(path, data);
    }
}

function loadTemplate(path, data) {
    return new Service().sendRequest(path)
        .then(result => result.text())
        .then(x => processTemplate(x, data));
}

function processTemplate(text, data) {
    return textToHtml(substituteVariables(text, data));
}

function substituteVariables(text, data) {
    const subtitutionPatter = /\${([^}]*)}/g;

    const substituteValue = (match, selector) => getObjectValue(data, selector);

    return text.replace(subtitutionPatter, substituteValue);
}

function getObjectValue(source, selector) {
    const keys = selector.split('.');

    return keys.reduce((result, key) => result[key], source);
}

function textToHtml(text) {
    const container = document.createElement('div');

    container.innerHTML = text;

    return container.firstChild;
}


export default TempalteLoader;