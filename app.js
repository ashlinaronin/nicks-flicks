var flicks = angular.module('flicks', ['ui.router']);

flicks.config(function($stateProvider, $urlRouterProvider) {

    // Home state doesn't need a controller bc it doesn't deal w/ data
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
    });

    $stateProvider.state('reviews', {
        url: "/reviews",
        templateUrl: "partials/reviews.html",
        controller: 'ReviewsCtrl'
    });

    $stateProvider.state('reviews.review', {
        url: "/:reviewId",
        templateUrl: "partials/reviews.html",
        controller: 'ReviewsCtrl'
    });


})
