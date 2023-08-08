function load(data) {
    try {    
        if (typeof(data) == "object") {
            for (const values in data) {
                if (isNaN(data[values])) {
                    console.log("Detected null (NaN) with name:", values, ":with value:", game_save[values]);
                    game_save_base[values] = game_base_values[j];
                    console.log("replaced:", game_save_name[values], ":with:", game_save[values])

                }
                else {
                    game_save_base[values] = data[values];
                }
            }
            return game_save_base;
        }
        else {
            console.log("Data incompatible, should be an object but is a", typeof(data));
            return game_save
        }
    }
    catch (exception) {
        console.log("Save data does not have a length attribute, line 26 of save.js");
        return game_save;
    }
    
}

function settingload(data) {

        if (typeof(data) == "object") {
            for (const values in data) {
                if (isNaN(data[values])) {
                    console.log("Detected null (NaN) with name:", values, ":with value:", setting_save[values]);
                    setting_save_base[values] = setting_base_values[values];
                    console.log("replaced:", setting_save_name[values], ":with:", setting_save[values])

                }
                else {
                    setting_save_base[values] = data[values];
                }
            }
            return setting_save_base;
        }
        else {
            console.log("Data incompatible, should be an object but is a", typeof(data));
            return setting_save
        }
    }


function export_save() {

    let partially_encoded = JSON.stringify(game_save);
    let encoded = btoa(partially_encoded);
    navigator.clipboard.writeText(encoded);
    alert_box("Save copied to clipboard!");
}

function import_save() {
    const new_data = document.getElementById("import_box").value;
    localStorage.setItem('tree_game_save_data', new_data);
    localLoad();
    alert_box("Save imported to game!");
}

function localsave() {
    let savegame = btoa(JSON.stringify(game_save));
    localStorage.setItem('tree_game_save_data', savegame);
    console.log("Game saved as: ", savegame);
    
    let savesetgame = btoa(JSON.stringify(setting_save));
    localStorage.setItem('tree_setting_save', savesetgame);
    console.log("Settings saved as:", savesetgame);
    alert_box("Game saved to localStorage!");
}

function localLoad() {
    try {
        //loading game_save
        let loadSaveStateString = localStorage.getItem('tree_game_save_data');
        let loadSaveState = JSON.parse(atob(loadSaveStateString));
        console.log("Game loaded from: ", loadSaveState);
        game_save = load(loadSaveState);

        //loading settings
        let loadSaveStateStringSettings = localStorage.getItem('tree_setting_save');
        let loadSaveStateSettings = JSON.parse(atob(loadSaveStateStringSettings));
        console.log("Settings loaded from: ", loadSaveStateSettings);
        setting_save = settingload(loadSaveStateSettings);
    }
    catch (exception) {
        game_save = game_base_values;
        setting_save = setting_base_values;
    }
}

function wipeSave() {
    dialog_box = document.getElementById("warning");
    dialog_box.style.display = "block";
    document.getElementById("underlay_back").style.display = "none";
}

function wipe_check() {
    wipe_times += 1;
    document.getElementById("wipe_check_num").value = wipe_times;
    document.getElementById("erase_save_1").style.marginTop = Math.random()*300;
    document.getElementById("erase_save_1").style.marginLeft = Math.random()*300+100;
    
    
    if (wipe_times > 10) {
        true_wipe();
    }
}
function true_wipe() {
    // hide the warnings
    dialog_box = document.getElementById("warning");
    dialog_box.style.display = "none";
    // resetting all variables
    game_save = objectToObject(game_base_values, game_save);
    setting_save = objectToObject(setting_base_values, setting_save);
    wipe_times = 0;

    document.getElementById("wipe_check_num").value = wipe_times;
    // display the main interface.
    document.getElementById("underlay_back").style.display = "block";
    open_tab(0);
}
function no_wipe() {
    dialog_box = document.getElementById("warning");
    dialog_box.style.display = "none";
    wipe_times = 0;
    document.getElementById("underlay_back").style.display = "block";
    document.getElementById("wipe_check_num").value = wipe_times;
}