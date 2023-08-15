window.onload = function() {
    
    document.getElementById("output").innerHTML = game_save['trees'];
    //document.getElementById("upgbutprice").innerHTML = price;

    //single instance run code
    localLoad();
    setInterval(refresh100, 100);
    setInterval(refresh10000, 10000);
    setInterval(game_refresh, 10);
    check_load_progress = setInterval(check_load, 100);
    auto_save_int_true = 0;
    let id_off = 'auto_save_toggle_' + auto_save;
    changeBackground(id_off, "green");
    // tell game that this section is loaded
    load_check_0 = 1;
    load_check_3 = 1;

    let load_game_data_string = localStorage.getItem('tree_game_save_data');

    try {
        let load_game_data = JSON.parse(atob(load_game_data_string));
        console.log("loaded:", load_game_data);
        game_save = load(load_game_data);
    }
    catch (exception) {
        game_save = game_base_values;
    }

    refresh10000();
    load_check_2 = 1;
    
}


function background_change() {
    if (game_save['trees_chopped'] > -1 && game_save['trees_chopped'] < 1000) {
        document.body.style.background = "url('Images/full_forest.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
        
    }
    if (game_save['trees_chopped'] > 999 && game_save['trees_chopped'] < 10000) {
        document.body.style.background = "url('Images/partial_deforest.png') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
        
    }
    if (game_save['trees_chopped'] > 9999 && game_save['trees_chopped'] < 100000) {
        document.body.style.background = "url('Images/mostly_deforest.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
    }
    if (game_save['trees_chopped'] > 99999) {
        document.body.style.background = "url('Images/deforested_desert.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
    }
}

function refresh100() {
    try {
        if (setting_save['change_background'] == 1) {
            
            background_change();
        }
        else {
            //changeBackground("change_background_toggle", "red");
            document.body.style.background = "url('Images/pattern_background.png')";
        }
    }
    //if it don't work I still want the other code to run
    catch(firstinstance) {}
    if (auto_save >= 14) {
        if (auto_save_int_true == 1) {}
        else {
            var localsave_int = setInterval(localsave, 1000*auto_save);
            auto_save_int_true = 1;
        }
    }
    else {
        clearInterval(localsave_int);
        auto_save_int_true = 0;
        console.log("auto saving off");
    }
    document.getElementById("output").innerHTML = game_save['trees'];
    //document.getElementById("upgbutprice").innerHTML = price;
    document.getElementById("click_power").innerHTML = game_save['manual_power'];
    document.getElementById("tree_level_display").innerHTML = tree_levels;

    if (Math.log10(game_save['trees']) < 22) {
        document.getElementById("tree_count_logo").style.right = 125 + Math.floor(Math.log10(game_save['trees']))*18 + "px";
    }

    //if (game_save['trees'] > price-1) {
    
  //      document.getElementById("upg_but").style.background = "url('Images/green_up_arrow.png') no-repeat";
//    }

    //else {
  //      document.getElementById("upg_but").style.background = "url('Images/red_up_arrow.png') no-repeat";
//    }

    load_check_1 = 1;
}

function refresh10000() {

    //Set the colours of setting buttons to either on/off, depending on the value stored in the settings
    if (setting_save['change_backgroud'] == 1) {
        changeBackground("change_background_toggle", "green");
    }
    else {
        changeBackground("change_background_toggle", "red");
    }

    if (setting_save['auto_save'] != setting_base_values['auto_save']) {
        let id_off = 'auto_save_toggle_' + setting_base_values['auto_save'];
        let id = 'auto_save_toggle_' + setting_save['auto_save'];
        changeBackground(id_off, "red");
        changeBackground(id, "green");
    }

    if (game_save['trees'] > game_save['upgrade_tree_price'])
    {
        if (upg_tree_set_class_cursor == 0) {
            document.getElementById("upg_tree").classList.add('can_upgrade');
            document.getElementById("upg_tree").classList.remove('cant_upgrade');
            upg_tree_set_class_cursor = 1;
        }
    }
    else {
        if (upg_tree_set_class_cursor == 1) {
            document.getElementById("upg_tree").classList.add('cant_upgrade');
            document.getElementById("upg_tree").classList.remove('can_upgrade');
            upg_tree_set_class_cursor = 0;
        }
    }
    
}

//Sets all the variables for gain and similar to the formulae required
function game_refresh() {
    game_save['manual_power'] = 1 + Math.floor(Math.sqrt(clicks_per_sec));
}