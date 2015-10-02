flicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory) {

    // Connect this ReviewsCtrl to the ReviewsFactory
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;

});
