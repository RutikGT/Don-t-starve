$(document).ready(function () {
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function () {
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")) {
            $(".expand-btn").html("Close");
        }
        else {
            $(".expand-btn").html("View All");
        }
    });
    $(".game-img").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
});

