/**
 * Created by ROMEO on 24.02.14.
 */

define([
    'underscore',
    'backbone',
    'marionette',
    'hbs!templates/LoginTemplate'
], function (_, Backbone, Marionette, template) {

    return Marionette.ItemView.extend({

        className: 'clearfix',

        template: template,

        triggers: {
            'submit' : 'app:login'
        }

    });

});