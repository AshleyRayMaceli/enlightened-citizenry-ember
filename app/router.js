import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('leg-lookup');
  this.route('committees');
  this.route('bills-page');
  this.route('results', {path: '/results/:zip'});
  this.route('subcommittees', {path:'/subcommittees/:committee_id'});
  this.route('bills', {path: '/bills/:bill_id'});
  this.route('upcoming-bills');
});

export default Router;
