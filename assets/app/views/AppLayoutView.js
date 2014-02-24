/**
 * Created by ROMEO on 24.02.14.
 */

define([

    'underscore',
    'marionette',
    'vent',
    'hbs!templates/layouts/AppLayoutTemplate'

], function(_, Marionette, vent, MainTemplate) {
    "use strict";

    return Marionette.Layout.extend({

        className: 'app-layout',

        template: MainTemplate,

        regions: {
            header:     "#header",
            sidebar:    "#sidebar",
            content:    "#main"
        },

        initialize: function (options) {

            $('body').removeClass('login-body');

            vent.on('sidebar:toggle', _.bind(function() {

                this.sidebar.$el.toggleClass('hide-left-bar')

            }, this));

        }

    });
});
