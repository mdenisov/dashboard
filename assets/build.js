({
    baseUrl: ".",
    paths: {
        // Core libs
        jquery: "bower_components/jquery/dist/jquery",
        underscore: "bower_components/underscore/underscore",
        backbone: "bower_components/backbone/backbone",
        marionette: "bower_components/marionette/lib/backbone.marionette",
        handlebars: "bower_components/handlebars/handlebars",

        // Plugins
        "bootstrap": "bower_components/bootstrap/bootstrap.min",

        // Application
        app: "app/app"
    },
    name: "main",
    out: "main-built.js"
})