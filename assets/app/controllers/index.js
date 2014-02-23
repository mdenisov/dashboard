/**
 * Created by ROMEO on 22.02.14.
 */

define(['vent'], function (vent) {
    "use strict";

    return {
        default : function(param) {
            console.log(param);
//            vent.trigger('todoList:filter', param.trim() || '');
        },

        page : function(page) {
            console.log(page);
//            vent.trigger('todoList:filter', param.trim() || '');
        }
    };
});