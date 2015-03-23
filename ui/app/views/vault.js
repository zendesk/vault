import Ember from 'ember';

export default Ember.View.extend({
  unsealed: Ember.computed.alias('controller.model.unsealed'),

  templateName: function() {
    // Show the right view based on the seal state. If the seal
    // is undefined or otherwise unknown, raise an error.
    //
    if (this.get('unsealed') === true) {
      return "vault-unsealed";
    } else if (this.get('unsealed') === false) {
      return "vault-sealed";
    } else {
      throw new Error('Incompatible seal response when looking up view');
    }
  }.property('unsealed'),

  // Rerenders the view then the seal status changes and
  // applies animation.
  //
  // We call rerender() here because we're actually switching
  // templates.
  //
  watchSealStatus: function() {
    // Apply the slideout to the correct element when the vault
    // is changing states. This animation keeps it's style
    //
    if (this.get('unsealed') === true) {
      // The sealed modal
      this.$('.modal').addClass('slide-out');
    } else {
      // Main content class
      this.$('.vault').addClass('slide-out');
    }

    Ember.run.later(this, function() {
      this.rerender();
    }, 250).bind(this);
  }.observes('unsealed'),
});
