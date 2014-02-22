/**
 * Created by ROMEO on 22.02.14.
 */

define(['marionette', 'vent', 'hbs!templates/sidebar'], function (Marionette, vent, sidebarTpl) {
    "use strict";

    return Marionette.ItemView.extend({
        template : sidebarTpl,
        className: 'clearfix',

        ui : {

        },

        events : {

        }
    });

});