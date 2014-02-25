/**
 * Created by ROMEO on 25.02.14.
 */

define([

    'marionette',
    'views/AppCleanLayoutView',
    'views/IndexView',
    'models/LoginModel',
    'views/LoginView',
    'session',
    'vent'

], function(Marionette, AppCleanLayoutView, IndexView, LoginModel, LoginView, session, vent) {
    'use strict';

    // private
    var _initializeLayout = function() {
        AuthController.layout = new AppCleanLayoutView({
            model: session
        });

        AuthController.layout.on("show", function() {
            vent.trigger("layout:rendered");
        });

        vent.trigger('app:show', AuthController.layout);
    };

    vent.on("layout:rendered", function() {
//        console.log('layout:rendered (MainController)');
    });

    vent.on("app:logout", function() {
        AuthController.logout();
    });

    var AuthController = {

        login: function () {

            _initializeLayout();

            if(session.isAuthenticated()) {
                Backbone.history.navigate("#index", {trigger: true});
            }

            var loginModel = new LoginModel({
                email  : session.get('email'),
                name  : session.get('name'),
                issuer : session.get('issuer')
            });

            var view = new LoginView({
                model: loginModel
            });

            view.on('app:login', AuthController.authenticate);
            view.on('app:remind', AuthController.remind);

            vent.trigger('app:show', view);
        },

        authenticate: function (args) {
            var self     = this;
            var email    = this.$('input[name="email"]').val();
            var password = this.$('input[name="password"]').val();

            $.when(this.model.authenticate(email, password)).then(
                function (model, response, options){
                    var token = model.get('token');
                    session.save(model);
                    session.load();

                    vent.trigger("app:logon");

                    Backbone.history.navigate("#index", {trigger: true});
                },
                function (model, xhr, options){
                    self.$el.find('.alert').show();
                }
            );
        },

        remind: function (args) {
            var self     = this;
            var email    = this.$('input[name="email"]').val();
            var password = this.$('input[name="password"]').val();

            $.when(this.model.remind(email, password)).then(
                function (model, response, options){
                    var token = model.get('token');
                    session.save(model);
                    session.load();
                    Backbone.history.navigate("#index", {trigger: true});
                },
                function (model, xhr, options){
                    self.$el.find('.alert').show();
                }
            );
        },

        logout: function (args) {
            session.destroy();

            Backbone.history.navigate("#login", {trigger: true});
        }

    };

    return AuthController;

});