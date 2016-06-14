import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?apikey=cba47f9513254c58a97c683229e84758&range=day'
    return Ember.$.getJSON(url).then(function(responseJSON) {

      // sortBy: ['responseJSON.results.chamber:asc'],
      // sortThis: Ember.computed.sort('responseJSON.results', 'sortBy'),
      console.log(responseJSON.results[0].chamber);
      return responseJSON.results;
    });
  },

});
