const { each } = require("jquery");

$(".dropdownWrapper__arrow").on("click", function() {
    $(this).toggleClass("dropdownWrapper__arrow_expanded");
    $(this).siblings(".dropdown").toggleClass("dropdown_expanded");
    $(this).siblings(".dropdownContent").toggleClass("dropdownContent_expanded")
})

$(".contentLine__button_plus").on("click", function() {
    $(this).siblings(".contentLine__current").attr("data-current", function(index, attr) {
        attr < 6 ? attr++ : 6;
        return attr
    })
})

$(".contentLine__button_minus").on("click", function() {
    $(this).siblings(".contentLine__current").attr("data-current", function(index, attr) {
        attr > 0 ? attr-- : 0;
        return attr
    })
})

$("[data-clear]").on("click", function() {
    let curr = $(this).closest(".dropdownContent").find(".contentLine__current");
    curr.each(function(index, element) {
        let base = $(element).attr("data-base");
        $(element).attr("data-current", base)
    })
})