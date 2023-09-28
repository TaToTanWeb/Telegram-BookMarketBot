// Creating a first, global "app" object so others
// can use it before real app is actually created
var app = {};


// once the element is ready, transfer attributes
function onAppReady(element) {
    for (const key in app) {
        element[key] = app[key];
    }

    // ..and assign it to the global variable
    app = element;
}