import Ember from 'ember';

var houseUrl = 'http://congress.api.sunlightfoundation.com/upcoming_bills?chamber=house&apikey=cba47f9513254c58a97c683229e84758';

var senateUrl = 'http://congress.api.sunlightfoundation.com/upcoming_bills?chamber=senate&apikey=cba47f9513254c58a97c683229e84758';

export default Ember.Route.extend({
  model: function() {
      return Ember.RSVP.hash({
        house: Ember.$.getJSON(houseUrl).then(function(responseJSON) {
          console.log(responseJSON.results);
          return responseJSON.results;
        }),
        senate: Ember.$.getJSON(senateUrl).then(function(responseJSON) {
          console.log(responseJSON.results);
          return responseJSON.results;

        })
      });
    }
  });
