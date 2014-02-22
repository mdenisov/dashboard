/**
 * Created by ROMEO on 22.02.14.
 */

define(
    ['marionette', 'vent', 'underscore', 'handlebars', 'models/user', 'views/Header'],
function (marionette, vent, _, Handlebars, User, Header) {

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

        app.header.show(new Header(viewOptions));
    });

    return app;
});