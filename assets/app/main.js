/**
 * Created by ROMEO on 24.02.14.
 */

define([

    // Libraries.
    'jquery',

    // The application.
    'app',

    // Misc.
    'routers/index',
    'session'

], function($, App, router, session) {
    'use strict';

    // Use jquery's document ready function to start the app as soon as the DOM
    // was fully loaded.
    $(function() {

        App.Router = router;
        App.start();

    });

});