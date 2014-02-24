/**
 * Created by ROMEO on 22.02.14.
 */

define([

    'marionette',
    'views/AppLayoutView',
    'views/IndexView',
    'models/LoginModel',
    'views/LoginView',
    'views/HeaderView',
    'views/SidebarView',
    'session',
    'vent'

], function(Marionette, AppLayoutView, IndexView, LoginModel, LoginView, HeaderView, SidebarView, session, vent) {
    'use strict';

    // private
    var _initializeLayout = function() {
        MainController.layout = new AppLayoutView({
            model: session
        });

        MainController.layout.on("show", function() {
            vent.trigger("layout:rendered");
        });

        vent.trigger('app:show', MainController.layout);
    };

    vent.on("layout:rendered", function() {
//        console.log('layout:rendered (MainController)');
    });

    vent.on("app:logout", function() {
        MainController.logout();
    });

    var MainController = {

        index: function () {

            console.log(session.isAuthenticated());

            if(!session.isAuthenticated()) {
                Backbone.history.navigate("#login", {trigger: true});
                return false;
            }

            var view = new IndexView();

            _initializeLayout();

            MainController.layout.content.show(view);
            MainController.layout.header.show(new HeaderView({model: session}));
            MainController.layout.sidebar.show(new SidebarView());

            vent.trigger("app:logon");
        },

        login: function () {

            var loginModel = new LoginModel({
                email  : session.get('email'),
                name  : session.get('name'),
                issuer : session.get('issuer')
            });

            var view = new LoginView({
                model: loginModel
            });

            view.on('app:login', MainController.authenticate);
            view.on('app:remind', MainController.remind);

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
        },

        page: function (page) {
            
        }

    };

    return MainController;

});