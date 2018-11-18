import Service from './service.js';

class NewsService extends Service {
    constructor() {
        super();

        this.apiKey =  'ef5c0bce2c974283a49de1f45bccf59c';
    }

    getNews(search) {
        return this.getJson('https://newsapi.org/v2/everything', {q: search, apiKey: this.apiKey});
    }
}

export default NewsService;