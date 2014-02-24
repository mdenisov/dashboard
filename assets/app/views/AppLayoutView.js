/**
 * Created by ROMEO on 24.02.14.
 */

define([

    'underscore',
    'marionette',
    'hbs!templates/layouts/AppLayoutTemplate'

], function(_, Marionette, template) {

    return Marionette.Layout.extend({

        className: 'app-layout',

        template: template,

        regions: {
            header:     "#header",
            sidebar:    "#sidebar",
            content:    "#main"
        },

        initialize: function (options) {

            $('body').removeClass('stripes-bg');

        }

    });
});
