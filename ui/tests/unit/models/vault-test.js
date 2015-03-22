import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('vault', {
  // Specify the other units that are required for this test.
  needs: []
});

test('unsealed returns false when sealed', function(assert) {
  var sealed = this.subject({sealed: true});
  assert.equal(sealed.get('unsealed'), false);
});

test('unsealed returns true when unsealed', function(assert) {
  var sealed = this.subject({sealed: false});
  assert.equal(sealed.get('unsealed'), true);
});
