/**
 * Created by ROMEO on 22.02.14.
 */

define(['backbone'], function(Backbone){
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            name       : '',
            password   : '',
            groupp     : 2,
            lasttime   : 0
        },

        initialize : function() {
            this.set('lasttime', Date.now());
        }
    });
});