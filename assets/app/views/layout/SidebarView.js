/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'vent',
    'hbs!templates/layouts/SidebarTemplate',
    'dcjqaccordion',
    'nicescroll'

], function (Marionette, vent, SidebarTemplate) {
    "use strict";

    return Marionette.ItemView.extend({
        template : SidebarTemplate,
        className: 'clearfix',

        ui : {
            navigation: '#nav-accordion',
            leftside: '.leftside-navigation'
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

            if ($.fn.niceScroll) {
                this.ui.leftside.niceScroll({
                    cursorcolor: "#1FB5AD",
                    cursorborder: "0px solid #fff",
                    cursorborderradius: "0px",
                    cursorwidth: "3px"
                });

                this.ui.leftside.getNiceScroll().resize();

                if (this.$el.hasClass('hide-left-bar')) {
                    this.ui.leftside.getNiceScroll().hide();
                }

                this.ui.leftside.getNiceScroll().show();

            }
        },

        initialize: function() {

        }
    });

});