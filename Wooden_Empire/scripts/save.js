function load(data, recurse_value) { 
    if (typeof(data) == "object") {
        for (const key in recurse_value) {
            if (typeof(data[key]) == "object" && data[key] != null) {
                //Recursive call for nested objects, checks if not null as null items are classed as objects.
                data[key] = load(data[key], recurse_value[key]);
                    
            }
            //Checks for nulls
            else if (isNaN(data[key])|| data[key] == null) {
                console.log("Detected null (NaN) with name:", key, ":with value:", recurse_value[key], ":from:", data);
                data[key] = recurse_value[key];
                console.log("replaced:", data[key], ":with:", recurse_value[key])

            }
            else {
                //If no nulls detected, sets the value of the variable to that of the loaded.
            }
        }
        return data;
    }
    else {
        console.log("Data incompatible, should be an object but is a", typeof(data));
        return game_save
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
        game_save = load(loadSaveState, game_base_values);

        //loading settings
        let loadSaveStateStringSettings = localStorage.getItem('tree_setting_save');
        let loadSaveStateSettings = JSON.parse(atob(loadSaveStateStringSettings));
        console.log("Settings loaded from: ", loadSaveStateSettings);
        setting_save = load(loadSaveStateSettings, setting_base_values);
    }
    catch (exception) {
        game_save = game_base_values;
        setting_save = setting_base_values;
        console.log("No save detected, loading base values");
        tutorial_needed = 1;
    }
}

function wipeSave() {
    dialog_box = document.getElementById("warning");
    dialog_box.style.display = "block";
    document.getElementById("underlay_back").style.display = "none";
    alert_box("You are about to wipe your save. Are you sure you want to continue?");
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
    localStorage.removeItem('tree_game_save_data');
    localStorage.removeItem('tree_setting_save');
    location.reload();
}
function no_wipe() {
    dialog_box = document.getElementById("warning");
    dialog_box.style.display = "none";
    wipe_times = 0;
    document.getElementById("underlay_back").style.display = "block";
    document.getElementById("wipe_check_num").value = wipe_times;
}