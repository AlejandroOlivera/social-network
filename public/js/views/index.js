'use strict'

define(['text!templates/index.html'], function(indexTemplates) {
    var indexView = Backbone.View.extend({
        el: $('#content'),
        render: function () {
            this.$el.html(indexTemplate)
            
        }
    });

    return new indexView
    
});

