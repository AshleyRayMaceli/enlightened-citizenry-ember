import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + params.sponsor_id + '&apikey=cba47f9513254c58a97c683229e84758'
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results)
      return responseJSON.results[0];
    });
  },

});
