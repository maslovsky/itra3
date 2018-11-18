import TempalteLoader from '../../../services/template-loader.js';

class Tab {
    constructor(container, text, onClick = null) {
        loadTemplate({text}).then(element => {
            container.append(element);

            element.addEventListener('click', onClick);
        });
    }
}

function loadTemplate(data) {
    return TempalteLoader.load('src/components/tab-list/tab/template.html', data);
}

export default Tab;