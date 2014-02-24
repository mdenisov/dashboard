/**
 * Created by ROMEO on 24.02.14.
 */

define([

    'underscore',
    'marionette',
    'hbs!templates/layouts/AppLayoutTemplate',
    'views/HeaderView',
    'views/SidebarView'

], function(_, Marionette, MainTemplate, HeaderView, SidebarView) {

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

            console.log(this.header, new HeaderView());

            this.header.show(new HeaderView(options));
            this.sidebar.show(new SidebarView(options));

        }

    });
});
