/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'app',
    'views/IndexView',
    'session',
    'vent'

], function(Marionette, App, IndexView, session, vent) {
    'use strict';

    var MainController = {

        default: function() {
            console.log(arguments);
        },

        index: function() {
            this.isAuthenticated();

            var view = new IndexView();

            this.renderView(view);
        },

        search: function(args) {

        },

        page: function(page) {
            this.isAuthenticated();
        },

        renderView: function(view) {
            App.container.currentView.content.show(view);

            vent.trigger("subview:rendered");
        },

        isAuthenticated: function() {
            if(!session.isAuthenticated()) {
                Backbone.history.navigate("#login", {trigger: true});
                return false;
            }
        }

    };

    return MainController;

});