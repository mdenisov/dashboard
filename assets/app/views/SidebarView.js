/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'vent',
    'hbs!templates/SidebarTemplate'

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