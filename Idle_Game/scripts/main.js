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


    //Load some functions now prior to them running after however many seconds
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
    catch(firstinstance) {} //The change_background code fails on the first instance, and so this catch command prevents the code from breaking here.
    
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
    document.getElementById("tree_level_display").innerHTML = game_save['tree_levels'];

    //Set the tree display to 
    if (Math.log10(game_save['trees']) < 22) {
        document.getElementById("tree_count_logo").style.right = 125 + Math.floor(Math.log10(game_save['trees']))*18 + "px";
    }

    //Display the tree_levels upgrade cost
    document.getElementById('tree_upg_cost_display').innerHTML = upgrade_tree_price;
    //Check if you can upgrade the tree, and if so, set the class to can upgrade. Also makes sure the code can run only once.
    upg_tree_set_class_cursor = display_upgrade_yn(document.getElementById("upg_tree_butt"), document.getElementById("tree_upg_cost_display"), game_save['trees'], upgrade_tree_price, upg_tree_set_class_cursor);

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

    //Display the stats
    document.getElementById('lifetime_clicks').innerHTML = game_save['lifetime_clicks'];
    document.getElementById('lifetime_trees_chopped').innerHTML = game_save['lifetime_trees_chopped'] + game_save['trees_chopped'];
    document.getElementById('lifetime_buildings_bought').innerHTML = game_save['lifetime_buildings_bought'];
    
}

//Sets all the variables for gain and similar to the formulae required
function game_refresh() {
    //Set the manual clicking power for trees
    game_save['manual_power'] = (1 + Math.floor(Math.sqrt(clicks_per_sec))) * game_save['tree_levels'];
    
    //Set the price of upgrading the tree
    if (game_save['tree_levels'] < 10) {
        upgrade_tree_price = tree_upgrade_cost[game_save['tree_levels']];
    }
}