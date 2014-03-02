/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'vent',
    'hbs!templates/layouts/SidebarTemplate',
    'dcjqaccordion'

], function (Marionette, vent, SidebarTemplate) {
    "use strict";

    return Marionette.ItemView.extend({
        template : SidebarTemplate,
        className: 'clearfix',

        ui : {
            navigation: '#nav-accordion'
        },

        events : {

        },

        onRender: function() {
            if ($.fn.dcAccordion) {
                this.ui.navigation.dcAccordion({
                    eventType: 'click',
                    autoClose: true,
                    saveState: true,
                    disableLink: true,
                    speed: 'slow',
                    showCount: false,
                    autoExpand: true,
                    classExpand: 'dcjq-current-parent'
                });
            }
        },

        initialize: function() {

        }
    });

});