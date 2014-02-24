/**
 * Created by ROMEO on 22.02.14.
 */

define([

    // Libraries.
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'vent',
    'handlebars'

], function ($, _, Backbone, Marionette, vent, Handlebars) {

    // Creates a new Marionette application.
    var App = new Marionette.Application();

    // Set up basic paths.
    App.root = '/dashboard/';

    // application configuration
    App.config = {
        // you can provide an absolute URL like http://api.yourserver.com/v1
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

    vent.on('modal:show', function(view) {
        App.modal.show(view);
    });

    vent.on('modal:close', function() {
        App.modal.hideModal();
    });

    App.addInitializer(function(options) {
        // we neeed to override loadTemplate because Marionette expect to recive only the template ID
        // but actually it's the full template html (require + text plugin)
        Backbone.Marionette.TemplateCache.prototype.loadTemplate = function (templateId) {
            var template = templateId;
            // remove this comment if you want to make sure you have a template before trying to compile it
            /*
             if (!template || template.length === 0) {
             var msg = "Could not find template: '" + templateId + "'";
             var err = new Error(msg);
             err.name = "NoTemplateError";
             throw err;
             }*/

            return template;
        };

        // init ALL app routers
        _(options.routers).each(function(router) {
            new router();
        });

    });

    // Returns the app object to be available to other modules through require.js.
    return App;

});