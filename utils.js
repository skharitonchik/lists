/**
 * name - name of element
 * id - element id
 * class - class or classes for add
 * text - innerText of element
 * attrs - other attributes of component
 * * array of strings, example of string -> {attribute_name}:{attribute_value}
 * events - object
 * * name - name of event to listen
 * * callback - event listener callback (only regular functions if element context needed)
 * @param elConfig
 */
const createDOMElement = (elConfig) => {
    let element = document.createElement(elConfig.name);
    if (elConfig.id) {
        element.setAttribute('id', elConfig.id);
    }
    if (elConfig.text) {
        element.innerHTML = elConfig.text;
    }
    //region class add
    if (elConfig.class) {
        if (Array.isArray(elConfig.class)) {
            elConfig.class.map(cls => element.setAttribute('class', cls));
        }
        if (typeof elConfig.class === 'string') {
            element.setAttribute('class', elConfig.class);
        }
        if (typeof elConfig.class !== 'string' && !Array.isArray(elConfig.class)) {
            element.setAttribute('class', elConfig.class.toString());
        }
    }
    //endregion

    if (Array.isArray(elConfig.attributes) && elConfig.attributes.length > 0) {
        elConfig.attributes.forEach((attr) => {
            const parsedAttr = attr.split(':');
            element.setAttribute(parsedAttr[0], parsedAttr[1] || null);
        });
    }

    if (elConfig.events && Array.isArray(elConfig.events)) {
        elConfig.events.forEach(event => element.addEventListener(event.name, event.callback.bind(element)));
    }

    element.add = (nodes) => {
        if (Array.isArray(nodes)) {
            nodes.forEach(node => this.appendChild(node));
        } else {
            this.appendChild(nodes);
        }
    };

    return element;
};
