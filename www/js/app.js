// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('blogApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.service('myService', function($http) {
  this.getBlogs = function($scope) {
       
      $http.get('http://marklovettphotography.com/wp-json/posts?results=10')
      // $http.jsonp('https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK')
      .success(function(data) {
        $scope.posts = data.posts;//move data to posts array
        $scope.$broadcast('scroll.refreshComplete');//stops refresh wheel from spinning after loaded data
        // $log.info(JSON.stringify(result.posts));
      });
  };
})

.controller('AppCtrl', function($scope, myService) {
    $scope.posts = []; //initialize post array
    $scope.refresh = function() {
      myService.getBlogs($scope); //now scope holds the data just need to render it now
    }
})



