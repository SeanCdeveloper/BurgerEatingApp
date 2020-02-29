$(function () {

    $(".delete-item").on("click", function () {
        event.preventDefault;
        const id = $(this).data("id");
        console.log("button clicked " + id);

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function () {
                console.log(`Deleted Burger with the id of ${id}`);
                location.reload();
            }
        );
    });

    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
        console.log("button clicked " + id);

        var newSleepState = {
            devour: newSleep
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(
            function () {
                console.log("changed sleep to", newSleep);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newCat = {
            burger_name: $("#ca").val().trim(),
            devour: 0
        };

  
        $.ajax("/api/burgers", {
            type: "POST",
            data: newCat
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});





