import DS from 'ember-data';
import Ember from 'ember';

var attr = DS.attr;

export default DS.Model.extend({
  sealed: attr('boolean'),
  t: attr('number'),
  n: attr('number'),
  progress: attr('number'),

  total: function() {
    // If the Vault is unsealed, we want to pretend
    // for the UI that the total number of necessary
    // shared are entered.
    //
    if (this.get('unsealed') === true) {
      return this.get('n');
    }

    return this.get('t')
  },

  unsealed: Ember.computed.equal('sealed', false),
});
