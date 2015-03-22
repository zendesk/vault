import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('vault', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('unsealed', function(assert) {
  var model = this.subject({sealed: true});
  assert.equal(model.get('unsealed'), false);

  model.set('sealed', false);
  assert.equal(model.get('unsealed'), true);
});
