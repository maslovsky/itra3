import TempalteLoader from '../../../services/template-loader.js';

class News {
    constructor(container, data) {
        loadTemplate(data).then(x => container.append(x));
    }
}

function loadTemplate(data) {
    return TempalteLoader.load('src/components/news-list/news/template.html', data);
}

export default News;