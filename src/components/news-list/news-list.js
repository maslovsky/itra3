import TempalteLoader from '../../services/template-loader.js';
import News from './news/news.js';

class NewsList {
    constructor(container, data) {
        loadTemplate().then(element => {
            const columns = element.querySelectorAll('.col-33');

            createNews(columns, data);

            container.append(element);
        });
    }
}

function createNews(columns, data) {
    for (let i = 0; i < data.length; i++) {
        const container = columns[i % columns.length];

        new News(container, data[i]);
    }
}

function loadTemplate() {
    return TempalteLoader.load('src/components/news-list/template.html');
}

export default NewsList;