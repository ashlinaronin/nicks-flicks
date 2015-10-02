flicks.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};
    factory.reviews = [];


    // title and body are both reserved words, so append "review" for safety
    factory.addReview = function() {
        factory.reviews.push(
            {
                title: factory.reviewTitle,
                body: factory.reviewBody
            }
        );

        // Reset input fields
        factory.reviewTitle = null;
        factory.reviewBody = null;
    }


    // Make sure to return the factory
    return factory;
})
