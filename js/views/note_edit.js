/*global RPM:true, _:true, jQuery:true, Backbone:true, JST:true, $:true*/
/*jslint browser: true, white: false, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: false, indent: 2*/

(function () {
  "use strict";
  window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.NoteEditView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click button.save": "save"
    },

    // the constructor
    initialize: function (options) {
      this.note  = options.note;
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      // update our model with values from the form
      this.note.set({
        title: this.$el.find('input[name=title]').val(),
        author: this.$el.find('input[name=author]').val(),
        description: this.$el.find('textarea[name=description]').val()
      });
      // we would save to the server here with 
      // this.note.save();
      // redirect back to the index
      window.location.hash = "notes/index";
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#formTemplate').html(), this.note.toJSON()));
      this.$el.find('h2').text('Edit Note');
      return this;
    }
  });
}());
