angular.module('app')
  .controller('jokeCtrl', function($scope, mainSvc) {
    $scope.thisAppIsBroken = "This App is working";

    $scope.getJoke = function() {
      mainSvc.getJoke().then(function(response) {
        console.log(response);
        $scope.joke = response;
      });

    };
    // $scope.getJoke();

    $scope.getAKitty = function() {
      $scope.currentKitten = mainSvc.getKitten();
      console.log($scope.currentKitten);
    };

    $scope.getAKitty();
  });
