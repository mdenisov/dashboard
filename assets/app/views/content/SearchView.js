/**
 * Created by ROMEO on 02.03.14.
 */

define([

    'underscore',
    'marionette',
    'hbs!templates/content/SearchTemplate'

], function(_, Marionette, template) {
    "use strict";

    return Marionette.ItemView.extend({
        className: 'clearfix',

        template: template,

        initialize: function (options) {

        }

    });

});