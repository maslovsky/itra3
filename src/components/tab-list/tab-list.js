import TempalteLoader from '../../services/template-loader.js';
import Tab from './tab/tab.js';

class Tabs {
    constructor(container, tabData, onSelect) {
        loadTemplate().then(tabContainer => {
            tabData.forEach(x => new Tab(tabContainer, x, () => onSelect(x)));

            container.append(tabContainer);
        });
    }
}

function loadTemplate(data) {
    return TempalteLoader.load('src/components/tab-list/template.html');
}

export default Tabs;