var change_background = 1;

function changeBackground(id, colour) {
    if (colour == "red") {
        id.style.background = "linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 0, 0, 0.5));"
    }
    if (colour == "green") {
        id.style.background = "linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 0, 0, 0.5));";
    }
    if (colour == "grey") {
        id.style.background = "url('Images/green_up_arrow.png') no-repeat center center fixed";
    }
}

function toggleBackgroundChange() {
    
    var id = document.getElementById("change_background_toggle");
    if (change_background == 1) {
        var change_background = 0;
        changeBackground(id, "red");
    }
    else {
        var change_background = 1;
        changeBackground(id, "green");
    }
}

