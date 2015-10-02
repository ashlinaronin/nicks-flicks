flicks.directive("invert", function() {
    return function (scope, element) {
        element.bind("click", function() {

            // Invert using the CSS filter wasn't working.
            // So I decided to apply it individually to classes.
            // It got a little tricky with Bootstrap inheritance.
            $("#nick-nav").toggleClass("navbar-inverse");
            $("body").toggleClass("inverted");
            $("#review-title").toggleClass("inverted");
            $("#review-body").toggleClass("inverted");
            $(".inv-btn").toggleClass("inverted");
        });
    }
});
