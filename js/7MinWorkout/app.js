angular.module('app', ['ngRoute', '7minWorkout'])
  .config(($locationProvider, $routeProvider, $sceDelegateProvider) => {

    $locationProvider.html5Mode({
      enabled: true
    });

    $routeProvider
      .when('/start', {
        templateUrl: 'partials/start.html'
      })
      .when('/workout', {
        templateUrl: 'partials/workout.html',
        controller: 'WorkoutCtrl'
      })
      .when('/finish', {
        templateUrl: 'partials/finish.html'
      })
      .otherwise({
        redirectTo: '/start'
      });

    $sceDelegateProvider
      .resourceUrlWhitelist([
          'self',
          'http://*.youtube.com/**'
      ]);
  });

angular.module('7minWorkout', []);
