function changeBackground(id, colour) {
    id_1 = document.getElementById(id);
    id_1.classList.remove("button2");
    id_1.classList.remove("button3");
    id_1.classList.remove("button");
    if (colour == "red") {
        id_1.classList.add("button2");
    }
    if (colour == "green") {
        id_1.classList.add("button3");
    }
    if (colour == "grey") {
        id_1.classList.add("button");
    }
}

function toggleBackgroundChange() {
    if (setting_save['change_background'] == 1) {
        setting_save['change_background'] = 0;
        changeBackground("change_background_toggle", "red");
    }

    else {
        setting_save['change_background'] = 1;
        changeBackground("change_background_toggle", "green");
    }
}

function toggleAutoSave(id, val) {
    let id_off = 'auto_save_toggle_' + setting_save['auto_save'];
    changeBackground(id_off, "red");
    setting_save['auto_save'] = val;
    changeBackground(id, "green");
}