/**
 * Created by ROMEO on 22.02.14.
 */

define(['backbone'], function (Backbone) {
    "use strict";

    return Backbone.Model.extend({

        defaults: {
            email  : '',
            rights : ''
        }

    });

});