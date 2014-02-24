/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'controllers/MainController'

], function (Marionette, MainController) {

    return Marionette.AppRouter.extend({

        controller: MainController,

        appRoutes: {
            ''         : 'index',
            '/'        : 'index',
            'index'    : 'index',
            'page'     : 'page',
            'login'    : 'login',
            'logout'   : 'logout'
        }
    });

});