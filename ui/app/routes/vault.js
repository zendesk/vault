import ENV from "ui/config/environment";
import Clock from 'ui/models/clock';
import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // Looks for the default vault without
    // making an API request. If not found, creates
    // the default Vault. We will only ever deal with one.
    //
    if (!this.store.getById('vault', 'default')) {
      Ember.Logger.info('No default vault found, creating one with id "default"');

      // Our default Vault
      this.store.createRecord('vault', {
        id: "default",
      });
    }
  },

  model: function() {
    return this.store.find('vault', 'default');
  },

  afterModel: function() {
    // Make the initial request
    this.fetchVault();

    this.set('clock', Clock.create({
      // When the polling starts, request and populate the data
      pollImmediately: false,
      // Request the vault information from the seal status API
      // and push the data into the store
      //
      onPoll: (function() {
        // Req
        return this.fetchVault();
      }).bind(this)
    }));
  },

  activate: function() {
    this.get('clock').startPolling();
  },

  deactivate: function() {
    this.get('clock').stopPolling();
  },

  fetchVault: function() {
    var store = this.store;
    return Ember.$.getJSON(ENV.vaultApiAddress+'/v1/sys/seal-status').then(function(data) {
      // We need to assing the default id so we update the existing
      // model in-place
      //
      data.id = 'default';
      store.push('vault', data);
    });
  }
});
