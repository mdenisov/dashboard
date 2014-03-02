/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'vent',
    'hbs!templates/layouts/SidebarTemplate'

], function (Marionette, vent, SidebarTemplate) {
    "use strict";

    return Marionette.ItemView.extend({
        template : SidebarTemplate,
        className: 'clearfix',

        ui : {

        },

        events : {

        }
    });

});