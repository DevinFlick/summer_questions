(function(){
  angular.module('ngAwesome')
          .factory('ThingService', ThingService);

    ThingService.$inject = ['$http'];

    function ThingService($http){
      var baseUrl = 'http://localhost:8080/api/things/';
      var service = {
        getThings: getThings,
        createThing: createThing,
        getUserForThing: getUserForThing,
        things: [],
        user: {}
      };
      return service;
      function getThings(){
        return $http.get(baseUrl)
                  .then(function(response){
                    service.things = response.data;
                  });
      }

      function createThing(thingObj){
        return $http.post(baseUrl, thingObj)
                    .then(function(response){
                      getThings();
                    })
      }

      function getUserForThing(id){
        var url = baseUrl + id + '/user';
        $http.get(url)
              .then(function(response){
               service.user = response.data;
              })
      }
    }
})();
