angular.module('confboilerplate.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope) {

})

.controller('LocationCtrl', function($scope) {
  $scope.position = {
    lat: -3.771020,
    lng: -38.483531
  };

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });
})

.controller('SpeakersCtrl', function($scope) {

})

.controller('ScheduleCtrl', function($scope) {

})

.controller('DetailsCtrl', function($scope, $stateParams) {
  $scope.detailsId = $stateParams.detailsId;
})

.controller('SponsorsCtrl', function($scope) {

})

.controller('PartnersCtrl', function($scope) {

})

;
