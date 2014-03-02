/**
 * Created by ROMEO on 24.02.14.
 */

define([

    'underscore',
    'marionette',
    'vent',
    'hbs!templates/layouts/AppCleanLayoutTemplate'

], function(_, Marionette, vent, MainTemplate) {
    'use strict';

    return Marionette.Layout.extend({

        className: 'app-layout',

        template: MainTemplate,

        regions: {
            content:        "#main"
        },

        initialize: function (options) {

            $('body').addClass('login-body');

        }

    });
});
