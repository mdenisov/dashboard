({
    baseUrl: "./app/",
    mainConfigFile: './config.js',
    paths: {
        // Core libs
        jquery: "../bower_components/jquery/dist/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        marionette: "../bower_components/marionette/lib/backbone.marionette",
        handlebars: "../bower_components/handlebars/handlebars",
        "backbone.wreqr": "../bower_components/backbone.wreqr/lib/amd/backbone.wreqr",
        "backbone.babysitter": "../bower_components/backbone.babysitter/lib/amd/backbone.babysitter",
        "backbone.localStorage": "../bower_components/backbone.localStorage/backbone.localStorage",
        hbs: "../hbs",
        i18nprecompile: "../i18nprecompile",
        json2: "../json2",

        // Plugins
        "bootstrap": "../bower_components/bootstrap/bootstrap.min",
        "cookie": "../bower_components/jquery.cookie/jquery.cookie",
    },
    name: "main",
    out: "main-built.js"
})