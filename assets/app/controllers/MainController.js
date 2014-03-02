/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'app',
    'session',
    'vent'

], function(Marionette, App, session, vent) {
    'use strict';

    var MainController = {

        default: function() {
            console.log(arguments);
        },

        index: function() {
            this.isAuthenticated();

            require(['views/content/IndexView'], _.bind(function(IndexView) {
                var view = new IndexView();

                this.renderView(view);
            }, this));
        },

        search: function(args) {
            require(['views/content/SearchView'], _.bind(function(SearchView) {
                var view = new SearchView({arguments: args});

                this.renderView(view);
            }, this));
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