define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var loop = require('./Loop');

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');

    console.log(loop.create());
});