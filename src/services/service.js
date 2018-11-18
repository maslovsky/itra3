class Service {
    getJson(url, params = {}) {
        return this.sendRequest(`${url}?${getQuery(params)}`)
            .then(result => result.json());
    }

    sendRequest(url, options) {
        return fetch(url, options);
    }
}

function getQuery(params) {
    const reduce = (query, key) => {
        return `${query}&${key}=${params[key]}`;
    };

    return Object.keys(params).reduce(reduce, '').slice(1);
}

export default Service;