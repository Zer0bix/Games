function changeBackground(id, colour) {
    id_1 = document.getElementById(id);
    id_1.classList.remove("button2");
    id_1.classList.remove("button3");
    id_1.classList.remove("button");
    if (colour == "red") {
        id_1.classList.add("button2");
    }
    else if (colour == "green") {
        id_1.classList.add("button3");
    }
    else if (colour == "grey") {
        id_1.classList.add("button");
    }
    console.log(id, colour);
}

function toggleAutoSave(id, val) {
    let id_off = 'auto_save_toggle_' + setting_save['auto_save'];
    changeBackground(id_off, "red");
    setting_save['auto_save'] = val;
    changeBackground(id, "green");
}

function toggle_setting(setting_name, setting_id) {
    if (setting_save[setting_name] == 1) {
        setting_save[setting_name] = 0;
        changeBackground(setting_id, "red");
    }
    else {
        setting_save[setting_name] = 1;
        changeBackground(setting_id, "green");
    }
}