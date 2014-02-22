/**
 * Created by ROMEO on 22.02.14.
 */

define(
    ['marionette', 'vent', 'underscore', 'handlebars', 'models/user'],
function (marionette, vent, _, Handlebars, User) {

    var app = new marionette.Application(),
        userdata = {name: 'Maxim Denisov', password: '12345', groupp: 1};

    app.addRegions({
        header  : '#header',
        main    : '#main',
        sidebar : '#sidebar'
    });

    app.addInitializer(function(){
        var viewOptions = {
            model : new User(userdata)
        };
    });

    return app;
});