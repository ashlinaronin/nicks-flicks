flicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
    // Connect this ReviewsCtrl to the ReviewsFactory
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;

    $scope.currentReview = null;
    console.log("$scope.currentReview is " + $scope.currentReview);

    // If we have an id in the url, set the current review
    if ($stateParams.reviewId) {
        $scope.currentReview = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
    }
    console.log("$stateParams is " + $stateParams.reviewId);

    console.log(" after if thing $scope.currentReview is " + $scope.currentReview);


});
