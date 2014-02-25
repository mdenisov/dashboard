/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'views/AppLayoutView',
    'views/IndexView',
    'views/HeaderView',
    'views/SidebarView',
    'session',
    'vent'

], function(Marionette, AppLayoutView, IndexView, HeaderView, SidebarView, session, vent) {
    'use strict';

    // private
    var _initializeLayout = function() {
        MainController.layout = new AppLayoutView({
            model: session
        });

        MainController.layout.on("show", function() {
            vent.trigger("layout:rendered");
        });

        vent.trigger('app:show', MainController.layout);
    };

    vent.on("layout:rendered", function() {
//        console.log('layout:rendered (MainController)');
    });

    var MainController = {

        index: function () {

            console.log(session.isAuthenticated());

            if(!session.isAuthenticated()) {
                Backbone.history.navigate("#login", {trigger: true});
                return false;
            }

            var view = new IndexView();

            _initializeLayout();

            MainController.layout.content.show(view);
            MainController.layout.header.show(new HeaderView({model: session}));
            MainController.layout.sidebar.show(new SidebarView());

            vent.trigger("app:logon");
        },

        page: function (page) {

        }

    };

    return MainController;

});