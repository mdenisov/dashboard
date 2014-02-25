/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'controllers/AuthController'

], function (Marionette, AuthController) {
    'use strict';

    return Marionette.AppRouter.extend({

        controller: AuthController,

        appRoutes: {
            'login'    : 'login',
            'logout'   : 'logout'
        }
    });

});