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
    // Ensure that we don't have a flash of 0 progress
    if (this.get('unsealed') === true) {
      this.set('controller.model.progress', this.get('controller.model.t'))
    }


    // Apply the slideout to the correct element when the vault
    // is changing states. This animation keeps it's style
    //
    Ember.run.later(this, function() {
      if (this.get('unsealed') === true) {
        // The sealed modal
        this.$('.modal').addClass('slide-out');
      } else {
        // Main content class
        this.$('.vault').addClass('slide-out');
      }
    }, 500).bind(this);

    Ember.run.later(this, function() {
      this.rerender();
    }, 1000).bind(this);
  }.observes('unsealed'),
});
