import DS from 'ember-data';
import Ember from 'ember';

var attr = DS.attr;

export default DS.Model.extend({
  sealed: attr('boolean'),
  t: attr('number'),
  n: attr('number'),
  progress: attr('number'),

  unsealed: Ember.computed.equal('sealed', false),
});
