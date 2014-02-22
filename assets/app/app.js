/**
 * Created by ROMEO on 22.02.14.
 */

define(
    ['marionette', 'vent', 'underscore', 'handlebars'],
function (marionette, vent, _, Handlebars) {

    var app = new marionette.Application();

    app.addRegions({
        header  : '#header',
        main    : '#main',
        sidebar : '#sidebar'
    });

    app.addInitializer(function(){

    });

    return app;
});