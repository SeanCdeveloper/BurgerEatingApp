/* Cats.js File modified: see below for starter code. */

$(function () {

    $(".delete-cat").on("click", function () {
        // console.log("button clicked");
        event.preventDefault;
        const id = $(this).data("id");
        console.log("button clicked " + id);

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function () {
                console.log(`Deleted Burger with the id of ${id}`);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-sleep").on("click", function (event) {
        //console.log("add button clicked");
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
        console.log("button clicked " + id);

        var newSleepState = {
            devour: newSleep
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(
            function () {
                console.log("changed sleep to", newSleep);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newCat = {
            burger_name: $("#ca").val().trim(),
            // [name=sleepy] was changed to devour in "[name = devour]" from "[name=sleepy]"
            // modify sleepy Object later. 
            devour: $("[name=devour]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newCat
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});





/*
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".delete-cat").on("click", function () {
    // console.log("button clicked");
    event.preventDefault;
    const id = $(this).data("id");
    console.log("button clicked " + id);

    $.ajax("/api/cats/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log(`Deleted Cat with the id of ${id}`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".change-sleep").on("click", function(event) {
    //console.log("add button clicked");
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");
    console.log("button clicked " + id);

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat
  f  }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

*/