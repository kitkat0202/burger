$(function() {
    // devouer burger
    $(".eat").on("click", function(event) {
        event.preventDefault()
        var dataid = $(this).data("id");

        $.ajax(`/api/burger/${dataid}`, {
            type: "PUT",
            data: {id: dataid}
          }).then(() => location.reload())
    })

    // create burger
    $("#submit").on("click",function(event) {
        event.preventDefault()
        var newBurger = {burger_name: $("#burger-input").val().trim()}

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(() => location.reload())
    })
})