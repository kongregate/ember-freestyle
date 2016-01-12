import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('freestyle');
  this.route('example');
  this.route('clean');
});

export default Router;
