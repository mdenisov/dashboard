/**
 * Created by ROMEO on 22.02.14.
 */

define([

    // Libraries.
    'backbone',
    'marionette',

    // Modules.
    'controllers/index'

], function(Backbone, Marionette, controller) {
    'use strict';

    var Router = Backbone.Marionette.AppRouter.extend({

        appRoutes: {

            ''              : 'default',
            '/'             : 'default',
            'page/:page'    : 'page'

        }

    });

    return new Router({
        controller: controller
    });

});