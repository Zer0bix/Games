function changeBackground(id, colour) {
    id_1 = document.getElementById(id);
    if (colour == "red") {
        id_1.classList = "button2";
    }
    if (colour == "green") {
        id_1.classList = "button3";
        
    }
    if (colour == "grey") {
        id_1.classList = "button";
    }
}

function toggleBackgroundChange() {
    if (change_background == 1) {
        change_background = 0;
        changeBackground("change_background_toggle", "red");
    }

    else {
        change_background = 1;
        changeBackground("change_background_toggle", "green");
    }
}

function toggleAutoSave(id, val) {
    let id_off = 'auto_save_toggle_' + auto_save;
    changeBackground(id_off, "red");
    auto_save = val;
    changeBackground(id, "green");
}