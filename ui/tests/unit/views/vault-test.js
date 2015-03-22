import {
  moduleFor,
  test,
  assert
} from 'ember-qunit';

moduleFor('view:vault');

test('templateName returns sealed template when sealed', function(assert) {
  var view = this.subject();
  view.content = {unsealed: false};

  assert.equal(view.get('templateName'), 'vault-sealed');
});

test('templateName returns unsealed template when unsealed', function(assert) {
  var view = this.subject();
  view.content = {unsealed: true};

  assert.equal(view.get('templateName'), 'vault-unsealed');
});

