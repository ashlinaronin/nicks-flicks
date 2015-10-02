flicks.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};

    // Hard-code some reviews for testing
    factory.reviews = [
        {
            title: "Avatar is a classic film",
            body: "If you like movies and/or films, you will certainly be a fan of James Cameron's latest effort. It's so good. You have to watch it. Don't not watch it or you will surely be sorry. Thank you for your time on my reviews website. Have a good day.",
            id: 1
        },
        {
            title: "Ken Watanabe's new period drama is a stinker",
            body: "Hafstrom directs it like he's sucking too hard on a cigarette, in a quick, over-and-done-with style that results only in fitful coughs of smoke. How many times does John Cusack have to prove he is no leading man? In Shanghai he comes off as Sam Spade with chopsticks.",
            id: 2
        },
        {
            title: "Lobbyist Intrigue Bears No Witness",
            body: "Scene after scene exists only to deliver facts for later: Carter's family background; the location of Leah's spare housekey; the presence of a mildly nosy neighbor and a clumsily introduced pet cat.",
            id: 3
        }
    ];


    // title and body are both reserved words, so append "review" for safety
    factory.addReview = function() {
        factory.reviews.push(
            {
                title: factory.reviewTitle,
                body: factory.reviewBody,
                id: factory.reviews.length + 1
            }
        );

        // Reset input fields
        factory.reviewTitle = null;
        factory.reviewBody = null;
    }


    // Make sure to return the factory
    return factory;
})
