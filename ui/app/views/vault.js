import Ember from 'ember';

export default Ember.View.extend({
  templateName: function() {
    if (this.get('content.unsealed')) {
      return "vault-unsealed";
    } else {
      return "vault-sealed";
    }
  }.property('content.unsealed')
});
