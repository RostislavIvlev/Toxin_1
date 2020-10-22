$(".expandableHeader__arrow").on("click", function() {
    $(this).toggleClass("expandableHeader__arrow_expanded");
    $(this).closest(".expandableHeader").siblings(".expandableContent").toggleClass("expandableContent_expanded")
})