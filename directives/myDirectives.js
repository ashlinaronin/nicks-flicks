flicks.directive("invert", function() {
    return function (scope, element) {
        element.bind("click", function() {
            $("#nick-nav").toggleClass("navbar-inverse");
            $("body").toggleClass("inverted");
            $("#review-title").toggleClass("inverted");
            $("#review-body").toggleClass("inverted");
            $(".inv-btn").toggleClass("inverted");
        });
    }
});
