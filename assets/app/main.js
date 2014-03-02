/**
 * Created by ROMEO on 24.02.14.
 */

define([

    // Libraries.
    'jquery',

    // The application.
    'app',

    // Auth module
    'auth',

    // Application routers
    'routers/MainRouter',
    'routers/AuthRouter'

], function($, App, Auth, MainRouter, AuthRouter) {
    'use strict';

    // Navigation handler
    $(document).on('click', 'a:not([data-bypass])', function(event) {

        var href = $(this).attr('href');

        if (href && href.indexOf('#') === 0) {
//            event.preventDefault();

//            Backbone.history.navigate(href, true);
        }
    });

    // Start the app
    var options = {
        routers: {
            main   : MainRouter,
            auth   : AuthRouter
        }
    };

    App.start(options);

});