/**
 * Created by ROMEO on 24.02.14.
 */

define([

    'underscore',
    'marionette',
    'vent',
    'hbs!templates/layouts/AppLayoutTemplate',
    'views/HeaderView',
    'views/SidebarView'

], function(_, Marionette, vent, MainTemplate, HeaderView, SidebarView) {
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

            console.log(options);

            vent.on("layout:rendered", _.bind(function() {

                this.header.show(new HeaderView(options));
                this.sidebar.show(new SidebarView(options));

            }, this));

        }

    });
});
