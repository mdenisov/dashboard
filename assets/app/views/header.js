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
            right_toggle : '.toggle-right-box',
            search: '.search'
        },

        events : {
            'click .sidebar-toggle-box':	'onSidebarToggleClick',
            'click .toggle-right-box':		'onRightToggleClick',
            'keypress .search':             'onSearchKeypress'
        },

        onSidebarToggleClick: function(evt) {
            vent.trigger('sidebar:toggle');
        },

        onRightToggleClick: function(evt) {
            vent.trigger('rightbar:toggle');
        },

        onSearchKeypress : function(evt) {
            var ENTER_KEY = 13;
            var searchText = this.ui.search.val().trim();

            if ( evt.which === ENTER_KEY && searchText ) {
//                this.collection.create({
//                    title : todoText
//                });
                this.ui.search.val('');
            }
        }
    });

});