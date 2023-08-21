window.onload = function() {
    
    document.getElementById("output").innerHTML = game_save.trees;
    //document.getElementById("upgbutprice").innerHTML = price;

    //single instance run code
    localLoad();
    setInterval(refresh100, 100);
    setInterval(refresh10000, 10000);
    setInterval(game_refresh, 10);
    check_load_progress = setInterval(check_load, 100);
    gain_resources = setInterval(gain, 100, 10);
    auto_save_int_true = 0;
    let id_off = 'auto_save_toggle_' + auto_save;
    changeBackground(id_off, "green");
    // tell game that this section is loaded
    load_check_0 = 1;
    
    //Loading the data

    //Load some functions now prior to them running after however many seconds
    initial_load();
    load_check_2 = 1;
    
    //Event handlers
    //Building buy handlers
    let buildings = document.getElementsByClassName('wrapperb');
    for (i=0; i<buildings.length; i++) {
        let ele = buildings[i].children.button;
        ele.onclick = buy_1;
    }

    //Building minimize handlers
    let mins = document.getElementsByClassName("min_button");
    for (i=0; i<mins.length; i++) {
        let ele = mins[i];
        ele.onclick = minimize_buildings;

    }
    //Building minimize needs this:
    let building_min = ['click', 'production', 'research', 'reduce'];
    for (i=0;i<4;i++) {
        document.getElementById(building_min[i] + "_building").style.display="block";
    }

    load_check_3 = 1;
    console.log("loaded all checks in main.py window.onload function()");
}


function background_change() {
    if (game_save.trees_chopped > -1 && game_save.trees_chopped < 1000) {
        document.body.style.background = "url('Images/full_forest.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
        
    }
    if (game_save.trees_chopped > 999 && game_save.trees_chopped < 10000) {
        document.body.style.background = "url('Images/partial_deforest.png') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
        
    }
    if (game_save.trees_chopped > 9999 && game_save.trees_chopped < 100000) {
        document.body.style.background = "url('Images/mostly_deforest.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
    }
    if (game_save.trees_chopped > 99999) {
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
    document.getElementById("output").innerHTML = Math.floor(game_save.trees);
    document.getElementById("tree_per_sec").innerHTML = "+" + Math.floor(game_save.manual_power + game_save.buildings_data.b_production_costs.effect) + "/s";
    document.getElementById("stone_count_num").innerHTML = Math.floor(game_save.stone);
    document.getElementById("click_power").innerHTML = Math.floor(game_save.manual_power);
    document.getElementById("tree_level_display").innerHTML = Math.floor(game_save.tree_levels);



    //Display all the various variables
    document.getElementById('tree_upg_cost_display').innerHTML = Math.floor(upgrade_tree_price); //Upgrade tree cost display
    document.getElementById('land_count_num').innerHTML = Math.floor(game_save.land); //land count in Buildings tab


    //Check if you can upgrade the tree, and if so, set the class to can upgrade. Also makes sure the code can run only once.
    upg_tree_set_class_cursor = display_upgrade_yn(document.getElementById("upg_tree_butt"), document.getElementById("tree_upg_cost_display"), game_save.trees, upgrade_tree_price, upg_tree_set_class_cursor);


    if (document.getElementById('tab_2').style.display == "block") {
        refresh_buildings();
    }
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

    //Refresh building displays
    refresh_buildings();

    //Display the stats in the stats tab
    document.getElementById('lifetime_clicks').innerHTML = game_save.lifetime_clicks;
    document.getElementById('lifetime_trees_chopped').innerHTML = game_save.lifetime_trees_chopped + game_save.trees_chopped;
    document.getElementById('lifetime_buildings_bought').innerHTML = game_save.lifetime_buildings_bought + game_save.buildings_data.b_num_total;
    

}

//Sets all the variables for gain and similar to the formulae required
function game_refresh() {
    //Set the manual clicking power for trees
    game_save.manual_power = (Math.floor(Math.sqrt(clicks_per_sec))) * (1 + game_save.tree_levels + game_save.buildings_data.b_click_costs.effect);
    
    //Set the price of upgrading the tree
    if (game_save.tree_levels < 10) {
        upgrade_tree_price = tree_upgrade_cost[game_save.tree_levels];
    }

    //Set the amount of remaining land
    game_save.land = game_save.tree_levels*land_multi-buildings_count - game_save.buildings_data.b_num_total;

    //Set the multiplier for a building's cost.
    buildings_multi = 1.01**game_save.buildings_data.b_num_total * (1-game_save.buildings_data.b_reduce_costs.owned*0.05);

    //Set the effect for each building
    let build_click = game_save.buildings_data.b_click_costs
    build_click.effect = 1 + build_click.owned*(build_click.research)*0.5

    let build_prod = game_save.buildings_data.b_production_costs
    build_prod.effect = 1 + build_prod.owned*build_prod.research*5
    
}

function initial_load() {
    //Make sure this element loads in the proper starting configuration (it doesn't work when you start with enough trees)
    upg_tree_set_class_cursor = 1;
    upg_tree_set_class_cursor = display_upgrade_yn(document.getElementById("upg_tree_butt"), document.getElementById("tree_upg_cost_display"), game_save.trees, upgrade_tree_price, upg_tree_set_class_cursor);
    upg_tree_set_class_cursor = 0;
    upg_tree_set_class_cursor = display_upgrade_yn(document.getElementById("upg_tree_butt"), document.getElementById("tree_upg_cost_display"), game_save.trees, upgrade_tree_price, upg_tree_set_class_cursor);
    
    //Load some initial functions
    game_refresh();
    refresh100();
    refresh10000();
}