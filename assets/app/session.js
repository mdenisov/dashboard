/*
 * Created by ROMEO on 24.02.14.
 * A basic session model holding user credentials. 
 */

define([

    'jquery',
    'underscore',
    'backbone',
    'cookie'

], function($, _, Backbone) {
    'use strict';

    var Session = Backbone.Model.extend({

        defaults: {
            name: '',
            photo: 'assets/img/avatar.jpg',
            accessToken: null
        },

        // Creating a new session instance will attempt to load the user cookie.
        initialize: function() {
            this.load();
        },

        // Returns true if the user is authenticated.
        isAuthenticated: function() {
            return Boolean(this.get('accessToken'));
        },

        // Saving will create the cookie data instead of syncing the model.
        save: function(model) {
            $.cookie('accessToken', model.get('token'));
            $.cookie('email', model.get('email'));
            $.cookie('name', model.get('name'));
        },

        // Loads the user's credentials from the cookie data.
        load: function() {
            this.set('accessToken', $.cookie('accessToken'));
            this.set('email', $.cookie('email'));
            this.set('name', $.cookie('name'));

            //set the Authorization header
            Backbone.BasicAuth.set($.cookie('accessToken'));
        },

        destroy: function() {
            return $.removeCookie('accessToken');
        }

    });

    return new Session();

});