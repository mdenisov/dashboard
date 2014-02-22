/**
 * Created by ROMEO on 22.02.14.
 */

define(['marionette'],function(marionette) {
    'use strict';

    return marionette.AppRouter.extend({

        appRoutes:{
            '*filter': 'setFilter'
        }

    });

});