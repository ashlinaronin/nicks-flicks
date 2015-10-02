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

    // Use nested state to show review body. Same controller will do.
    $stateProvider.state('reviews.detail', {
        url: "/:reviewId",
        templateUrl: "partials/reviews.detail.html",
        controller: 'ReviewsCtrl'
    });


})
