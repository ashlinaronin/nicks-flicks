flicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
    // Connect this ReviewsCtrl to the ReviewsFactory
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;

    $scope.currentReview = null;

    // If we have an id in the url, set the current review
    if ($stateParams.reviewId) {
        $scope.currentReview = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
    }
});
