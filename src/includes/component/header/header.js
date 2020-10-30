$(".navHead").on("click", function() {
    $(this).children(".navHead__arrow").toggleClass("navHead__arrow_expanded");
    $(this).siblings(".navContainer").toggleClass("navContainer_expanded");
})


$(document).on("click", function(event) {
    var target = $(event.target);
    var expanded = $(".navContainer").hasClass("navContainer_expanded");

    if (!target.closest(".navHead").is(".navHead") && expanded === true) {
        $(".navContainer").removeClass("navContainer_expanded");
        $(".navHead__arrow").removeClass("navHead__arrow_expanded")
    }
})