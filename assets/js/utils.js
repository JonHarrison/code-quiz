'use strict';

// logging
const log_level = 0;
var log = function() { if (log_level > 0) { console.log.apply(this,arguments); }}
const debug_level = 0;
var debug = function() { if (debug_level > 0) { console.debug.apply(this, arguments); }}
const error_level = 1;
var error = function() { if (error_level > 0) { console.error.apply(this, arguments); }}

const methods = { innerHTML: 1, alt: 2 }; // different methods of updating DoM object
const method = methods.alt;               // as innerHTML seems to be discouraged

function updateTextElement(element, content) {
    switch (method) {
        case methods.innerHTML:
            element.innerHTML = content;
            break;
        case methods.alt:
            element.textContent = content;
            break;
        default:
            error("updateTextElement - unknown method");
            break;
    }
}
