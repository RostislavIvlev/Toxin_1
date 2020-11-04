const { each } = require("jquery");

$(".dropdownWrapper__arrow").on("click", function() {
    $(this).toggleClass("dropdownWrapper__arrow_expanded");
    $(this).siblings(".dropdown").toggleClass("dropdown_expanded");
    $(this).siblings(".dropdownContent").toggleClass("dropdownContent_expanded")
})
$(".dropdown").on("click", function() {
    $(this).toggleClass("dropdown_expanded");
    $(this).siblings(".dropdownWrapper__arrow").toggleClass("dropdownWrapper__arrow_expanded");
    $(this).siblings(".dropdownContent").toggleClass("dropdownContent_expanded")
})


$("[data-plus]").on("click", function() {
    $(this).siblings(".contentLine__current").attr("data-current", function(index, attr) {
        attr < 6 ? attr++ : 6;
        return attr
    })
})
$("[data-minus]").on("click", function() {
    $(this).siblings(".contentLine__current").attr("data-current", function(index, attr) {
        attr > 0 ? attr-- : 0;
        return attr
    })
})

$("[data-fast]").on("click", function() {
    let curr = $(this).closest(".dropdownContent").find(".contentLine__current");
    let name = "";
    curr.each(function(index, element){
        let currentName = $(element).attr("data-current") + " " + $(element).attr("data-name").toLowerCase() + "," + " ";
        name += currentName;
    });

    $(this).closest(".dropdownWrapper").children(".dropdown").val(name);
})

$("[data-clear]").on("click", function() {
    let curr = $(this).closest(".dropdownContent").find(".contentLine__current");
    curr.each(function(index, element) {
        let base = $(element).attr("data-base");
        $(element).attr("data-current", base)
    })
})
$("[data-submit]").on("click", function() {
    let curr = $(this).closest(".dropdownContent").find(".contentLine__current");
    let summary = 0;
    curr.each(function(index, element) {
        let currentValue = parseInt($(element).attr("data-current"));
        summary += currentValue
    })

    if (summary == 1) {
        summary = summary + " гость";
    } else if (summary > 1 && summary < 5) {
        summary = summary + " гостя"
    } else {
        summary = summary + " гостей"
    }
     
    $(this).closest(".dropdownWrapper").children(".dropdown").val(summary);

    $(this).closest(".dropdownWrapper").children(".dropdownWrapper__arrow").removeClass("dropdownWrapper__arrow_expanded");
    $(this).closest(".dropdownWrapper").children(".dropdown").removeClass("dropdown_expanded");
    $(this).closest(".dropdownWrapper").children(".dropdownContent").removeClass("dropdownContent_expanded");
})

$(document).on("click", function(event) {
    var target = $(event.target);
    var expanded = $(".dropdown").hasClass("dropdown_expanded");

    if (!target.closest(".dropdownWrapper").is(".dropdownWrapper") && expanded === true) {
        $(".dropdownWrapper__arrow").removeClass("dropdownWrapper__arrow_expanded");
        $(".dropdown").removeClass("dropdown_expanded");
        $(".dropdownContent").removeClass("dropdownContent_expanded");
    }
})