/**
 * Created by ROMEO on 24.02.14.
 */

define([

    'underscore',
    'marionette',
    'hbs!templates/IndexTemplate'

], function(_, Marionette, template) {
    "use strict";

    return Marionette.ItemView.extend({
        className: 'clearfix',

        template: template,

        initialize: function (options) {
//            _.bindAll(this);
        }

    });

});