'use strict';

const methods = { innerHTML: 1, alt: 2 }; // methods of updating DoM object
const method = methods.alt;

function updateTextElement(element, content) {
    switch (method) {
        case methods.innerHTML:
            element.innerHTML = content;
            break;
        case methods.alt:
            element.textContent = content;
            break;
        default:
            log("unknown method");
            break;
    }
}
