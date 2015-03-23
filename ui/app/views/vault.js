import Ember from 'ember';

export default Ember.View.extend({
  templateName: function() {
    // Show the right view based on the seal state. If the seal
    // is undefined or otherwise unknown, raise an error.
    //
    if (this.get('controller.model.unsealed') === true) {
      return "vault-unsealed";
    } else if (this.get('controller.model.unsealed') === false) {
      return "vault-sealed";
    } else {
      throw new Error('Incompatible seal response when looking up view');
    }
  }.property('controller.model.unsealed'),

  // Rerenders the view then the seal status changes.
  // We call rerender() here because we're actually switching
  // templates.
  //
  watchSealStatus: function() {
    this.rerender();

    // TODO animate change of templates
  }.observes('controller.model.unsealed'),
});
