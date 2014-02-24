/**
 * Created by ROMEO on 22.02.14.
 */

define(['vent', 'session'], function (vent, session) {
    'use strict';

    return {
        default : function(param) {
            console.log(param);
//            vent.trigger('todoList:filter', param.trim() || '');
        },

        page : function(page) {
            console.log(page);
//            vent.trigger('todoList:filter', param.trim() || '');
        },

        // The login page.
        login: function() {
            console.log('called login-controller');
        },

        // Redirects to the login screen if the user is not logged in.
        isAuthenticated: function() {
//            if (!session.authenticated()) {
//                App.Router.navigate('login', {
//                    trigger: true
//                });
//            }
        }
    };
});