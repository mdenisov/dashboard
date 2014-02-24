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
    'routers/UserRouter'

], function($, App, Auth, MainRouter, UserRouter) {
    'use strict';

    // Navigation handler
    $(document).on('click', 'a:not([data-bypass])', function(event) {

        var href = $(this).attr('href');

        if (href && href.indexOf('#') === 0) {
            event.preventDefault();

//            Backbone.history.navigate(href, true);
        }
    });

    // Start the app
    var options = {
        routers: {
            main   : MainRouter,
            user   : UserRouter
        }
    };

    App.start(options);

});