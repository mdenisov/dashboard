/**
 * Created by ROMEO on 25.02.14.
 */

define([

    'marionette',
    'app',
    'session',
    'vent'

], function(Marionette, App, session, vent) {
    'use strict';

    vent.on("user:logout", function() {
        AuthController.logout();
    });

    var AuthController = {

        login: function(args) {

            if(session.isAuthenticated()) {
                Backbone.history.navigate("#index", {trigger: true});
            }

            require(['models/LoginModel', 'views/LoginView'], _.bind(function(LoginModel, LoginView) {
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

                this.renderView(view);
            }, this));
        },

        authenticate: function(args) {
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

        remind: function(args) {
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

        lock: function(args) {

        },

        logout: function(args) {
            session.destroy();

            vent.trigger('app:logout');

            Backbone.history.navigate("#login", {trigger: true});
        },

        renderView: function(view) {
            App.container.currentView.content.show(view);

            vent.trigger("subview:rendered");
        }

    };

    return AuthController;

});