import NewsService from './src/services/news-service.js';
import NewsList from './src/components/news-list/news-list.js';

import TabList from './src/components/tab-list/tab-list.js';

(function () {
    document.addEventListener('DOMContentLoaded', onReady);

    function onReady() {
        const tabs = ['Tech', 'Fast Food', 'Health', 'Space', 'UFO'];

        const newsContainer = document.body.querySelector('.news-list-container');
        const tabContainer = document.body.querySelector('.tab-list-container');

        new TabList(tabContainer, tabs, tab => showNews(newsContainer, tab));

        showNews(newsContainer, tabs[0]);
    }

    function showNews(newsContainer, tab) {
        newsContainer.innerHTML = null;

        showSpiner();
        
        new NewsService().getNews(tab).then(data => {
            hideSpiner();

            new NewsList(newsContainer, data.articles);
        });
    }

    function showSpiner() {
        document.querySelector('.spiner').style.display = null;
    }

    function hideSpiner() {
        document.querySelector('.spiner').style.display = 'none';
    }
}());