import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('vault', {path: "/"}, function() {
      this.route('logs', function() {});
      this.route('mounts', function() {});
  });
});

export default Router;
