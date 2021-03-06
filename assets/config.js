require.config({
    baseUrl: "./assets/app",
    urlArgs: 'bust=' + (new Date()).getTime(),

//    deps: ['bootstrap', 'main'],

    paths:{
        // Core Libraries
        "jquery": "../bower_components/jquery/dist/jquery",
        "underscore": "../bower_components/underscore/underscore",
        "backbone": "../bower_components/backbone/backbone",
        "backbone.wreqr": "../bower_components/backbone.wreqr/lib/amd/backbone.wreqr",
        "backbone.babysitter": "../bower_components/backbone.babysitter/lib/amd/backbone.babysitter",
        "backbone.localStorage": "../bower_components/backbone.localStorage/backbone.localStorage",
        "marionette": "../bower_components/marionette/lib/backbone.marionette",
        "handlebars": "../bower_components/handlebars/handlebars",
        "hbs": "../plugins/hbs",
        "i18nprecompile": "../plugins/i18nprecompile",
        "json2": "../plugins/json2",
//        "jasmine": "../libs/jasmine",
//        "jasmine-html": "../libs/jasmine-html",

        // Plugins
//        "backbone.validateAll":"../libs/plugins/Backbone.validateAll",
        "bootstrap": "../bower_components/bootstrap/bootstrap.min",
        "text": "../plugins/text",
        "cookie": "../bower_components/jquery.cookie/jquery.cookie",
        "dcjqaccordion": "../plugins/jquery.dcjqaccordion.2.7",
        "nicescroll": "../bower_components/jquery.nicescroll/jquery.nicescroll"
    },

    config: {
        //Set the config for the i18n
        //module ID
        i18n: {
            locale: 'ru-ru'
        }
    },


    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        'backbone.localStorage' : ['backbone'],

        // Twitter Bootstrap jQuery plugins
        "bootstrap": ["jquery"],
        // jQueryUI
//        "jqueryui":["jquery"],

        // Backbone
        "backbone": {
            // Depends on underscore/lodash and jQuery
            "deps": ["underscore", "jquery"],
            // Exports the global window.Backbone object
            "exports": "Backbone"
        },

        //Marionette
        "marionette": {
            "deps": ["underscore", "backbone", "jquery"],
            "exports": "Marionette"
        },

        //Handlebars
        "handlebars": {
            "exports": "Handlebars"
        },

        //Jquery plugins
        "dcjqaccordion": ["jquery"],
        "nicescroll": ["jquery"]

        // Backbone.validateAll plugin that depends on Backbone
//        "backbone.validateAll":["backbone"],

//        "jasmine": {
            // Exports the global 'window.jasmine' object
//            "exports": "jasmine"
//        },

//        "jasmine-html": {
//            "deps": ["jasmine"],
//            "exports": "jasmine"
//        }
    },

    // hbs config - must duplicate in Gruntfile.js Require build
    hbs: {
        templateExtension: "html",
        helperDirectory: "templates/helpers/",
        i18nDirectory: "templates/i18n/",

        compileOptions: {}        // options object which is passed to Handlebars compiler
    }
});

require(['bootstrap', 'main']);