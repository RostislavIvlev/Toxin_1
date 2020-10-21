$(".like-button").on("click", function(event, count) {
    event.preventDefault;


    var $this = $(this),
        count = $this.attr("data-count"),
        active = $this.hasClass("like-button_active");
    $this.attr("data-count", active ? --count : ++count).toggleClass("like-button_active");
})
