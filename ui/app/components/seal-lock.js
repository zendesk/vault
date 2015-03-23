import Ember from 'ember';
import layout from '../templates/components/seal-lock';

export default Ember.Component.extend({
  layout: layout,
  progress: 0,
  total: 0,

  percentUnsealed: function() {
    var percent = (this.get('progress') / this.get('total')) * 100;

    if (percent >= 100 ) {
      return 100;
    }

    return Math.floor(percent);
  }.property('progress', 'total'),

  didInsertElement: function() {
    // Run our first update for CSS
    this.updateBackground();
  },

  updateBackground: function() {
    // Flip percentage because we're going from the bottom
    // of the element
    //
    var percent = 100 - this.get('percentUnsealed');

    this.$('.unseal-lock').css({
     "background-image": "linear-gradient(to bottom, #000 " + percent + "%, #00ABE0 " + percent + "%)"
    });
  }.observes('percentUnsealed'),
});
