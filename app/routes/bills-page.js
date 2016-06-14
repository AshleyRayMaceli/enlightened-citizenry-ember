import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=cba47f9513254c58a97c683229e84758&per_page=50'
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  },

});
