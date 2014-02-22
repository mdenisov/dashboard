/**
 * Created by ROMEO on 22.02.14.
 */

define(['marionette', 'vent', 'hbs!templates/header'], function (Marionette, vent, headerTpl) {
    "use strict";

    return Marionette.ItemView.extend({
        template : headerTpl,
        className: 'clearfix',

        ui : {
            sidebar_toggle : '.sidebar-toggle-box',
            right_toggle : '.toggle-right-box'
        },

        events : {
            'click .sidebar-toggle-box':	'onSidebarToggleClick',
            'click .toggle-right-box':		'onRightToggleClick'
        },

        onSidebarToggleClick: function(evt) {
            vent.trigger('sidebar:toggle');
//            this.ui.sidebar.toggleClass('hide-left-bar');
        },

        onRightToggleClick: function(evt) {
            vent.trigger('rightbar:toggle');
        }

//
//        onInputKeypress : function(evt) {
//            var ENTER_KEY = 13;
//            var todoText = this.ui.input.val().trim();
//
//            if ( evt.which === ENTER_KEY && todoText ) {
//                this.collection.create({
//                    title : todoText
//                });
//                this.ui.input.val('');
//            }
//        }
    });

});