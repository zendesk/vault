import Vault from 'ui/models/vault';
import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // Looks for the default vault without
    // making an API request. If not found, creates
    // the default Vault. We will only ever deal with one.
    //
    if (!this.store.getById('vault', 'default')) {
      Ember.Logger.info('No default vault found, creating one with id "default"')

      // Our default Vault
      this.store.createRecord('vault', {
        id: "default",
      })
    }
  },

  model: function() {
    return this.store.find('vault', 'default');
  }
});
