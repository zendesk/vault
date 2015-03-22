import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  sealed: attr('boolean'),
  t: attr('number'),
  n: attr('number'),
  progress: attr('number'),
})
