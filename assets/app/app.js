/**
 * Created by ROMEO on 22.02.14.
 */

define([

    // Libraries.
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'session',
    'vent',
    'handlebars',

    'views/AppCleanLayoutView',
    'views/AppLayoutView',
    'views/HeaderView',
    'views/SidebarView'

], function ($, _, Backbone, Marionette, session, vent, Handlebars, AppCleanLayoutView, AppLayoutView, HeaderView, SidebarView) {
    'use strict';

    // Creates a new Marionette application.
    var App = new Marionette.Application();

    // Set up basic paths.
    App.root = '/dashboard/';

    // application configuration
    App.config = {
        apiUrl: 'api'
    };

    //custom region that shows a view in bootstrap modal
    var ModalRegion = Marionette.Region.extend({
        el: "#modal",

        onShow: function(view) {
            view.on("close", this.hideModal, this);
            this.$el.modal('show');
        },

        hideModal: function() {
            this.$el.modal('hide');
        }
    });

    // main regions, check index.html
    App.addRegions({
        container: "#container",
        modal:   ModalRegion
    });

    // app events
    App.on("initialize:after", function() {
        Backbone.history.start();
    });

    vent.on('app:show', function(appView) {
        App.container.show(appView);
    });

    vent.on('app:logon', function(appView) {
        App.initAppLayout();
    });

    vent.on('app:logout', function(appView) {
        App.initAppLayout();
    });

    vent.on("layout:rendered", function() {
        console.log('layout:rendered (App)');

        if (session.isAuthenticated()) {
            App.initFacilities();
        }
    });

    vent.on('subview:rendered', function() {
        console.log('subview:rendered (App)');
    });

    vent.on('modal:show', function(view) {
        App.modal.show(view);
    });

    vent.on('modal:close', function() {
        App.modal.hideModal();
    });

    App.addInitializer(function(options) {

        this.initAppLayout();

        // init ALL app routers
        _(options.routers).each(function(router) {
            new router();
        });

    });

    App.initAppLayout = function() {
        if (session.isAuthenticated()) {
            var layout = new AppLayoutView({
                model: session
            });
        } else {
            var layout = new AppCleanLayoutView({
                model: session
            });
        }

        layout.on("show", function() {
            vent.trigger("layout:rendered");
        });

        vent.trigger('app:show', layout);
    };

    App.initFacilities = function() {
        App.container.currentView.header.show(new HeaderView({model: session}));
        App.container.currentView.sidebar.show(new SidebarView());
    };


    // Returns the app object to be available to other modules through require.js.
    return App;

});