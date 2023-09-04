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
    setTimeout(initial_load, 1000);
    load_check_2 = 1;
    
    //Event handlers
    //Building buy handlers
    let buildings = document.getElementsByClassName('wrapperb');
    for (i=0; i<buildings.length; i++) {
        let ele = buildings[i].children.button;
        ele.onclick = buy_1;
    }

    //Building Destroy Handler
    let b_button_destroys = document.getElementsByClassName('b_button_destroy');
    for (i=0; i<b_button_destroys.length; i++) {
        let ele = b_button_destroys[i]
        ele.onclick = b_destroy_1;
    }

    //Handler for tooltip
    let tooltips = document.getElementsByClassName("display_tooltip");
    for (i=0; i<tooltips.length; i++) {
        tooltips[i].onmouseover = tooltip_start;
    }

    //Handler for research purchasing
    let researches = document.getElementsByClassName("r_button");
    for (i=0; i<researches.length; i++) {
        let ele = researches[i]
        ele.onclick = buy_research;
    }
    load_check_3 = 1;
    console.log("loaded all checks in main.py window.onload function()");
}


function background_change() {
    if (game_save.trees_chopped > -1 && game_save.trees_chopped < 1000) {
        document.body.style.background = "url('Images/pattern_background_1.png') center center fixed";
        document.body.style.backgroundSize = 10;
        
    }
    if (game_save.trees_chopped > 999 && game_save.trees_chopped < 10000) {
        document.body.style.background = "url('Images/pattern_background_1.png') center center fixed";
        document.body.style.backgroundSize = 10;
        
    }
    if (game_save.trees_chopped > 9999 && game_save.trees_chopped < 100000) {
        document.body.style.background = "url('Images/pattern_background_1.png')  center center fixed";
        document.body.style.backgroundSize = 10;
    }
    if (game_save.trees_chopped > 99999) {
        document.body.style.background = "url('Images/pattern_background_1.png') center center fixed";
        document.body.style.backgroundSize = 10;
    }
}

function refresh100() {
    
    if (auto_save == auto_save_int_prev) {
        if (auto_save_int_true == 1) {}
        else {
            var localsave_int = setInterval(localsave, 1000*auto_save);
            auto_save_int_true = 1;
            auto_save_int_prev = auto_save;
        }
    }
    else {
        clearInterval(localsave_int);
        auto_save_int_true = 0;
        console.log("auto saving off");
        auto_save_int_prev = auto_save;
    }

    //Refresh all the variables displayed
    let vars_game = document.getElementsByClassName("count");
    let vars_doc = document.getElementsByClassName("b_count");
    for (const key in vars_game) {
        if (vars_game.hasOwnProperty(key)) {
            let location = vars_game[key].getAttribute("data-value");
            if (vars_game[key].getAttribute("data-value-2") == "per_sec") {
                vars_game[key].innerHTML = "+" + Math.floor(game_save[location]*10)/10 + "/s"; 
            }
            else {
                vars_game[key].innerHTML = Math.floor(game_save[location]);
            }
        }
    }
    for (const key in vars_doc) {
        if (vars_doc.hasOwnProperty(key)) {
            let location = "b_" + vars_doc[key].getAttribute("data-value") + "_costs";
            if (vars_doc[key].getAttribute("data-value-2") == "per_sec") {
                vars_doc[key].innerHTML = "+" + Math.floor(game_save.buildings_data[location].effect*10)/10 + "/s";
            }
            else {
                vars_doc[key].innerHTML = Math.floor(game_save.buildings_data[location].effect);
            }
        }
    }
    //Display the click power (below the click button)
    document.getElementById("click_power").innerHTML = Math.floor(game_save.manual_power);

    //Display tree levels
    document.getElementById("tree_level_display").innerHTML = Math.floor(game_save.tree_levels);

    //Display all the various variables
    document.getElementById('tree_upg_cost_display').innerHTML = Math.floor(upgrade_tree_price); //Upgrade tree cost display


    //Check if you can upgrade the tree, and if so, set the class to can upgrade. Also makes sure the code can run only once.
    upg_tree_set_class_cursor = display_upgrade_yn(document.getElementById("upg_tree_butt"), document.getElementById("tree_upg_cost_display"), game_save.trees, upgrade_tree_price, upg_tree_set_class_cursor);


    if (document.getElementById('tab_2').style.display == "block") {
        refresh_buildings();
    }
    if (document.getElementById('tab_4').style.display == "block") {
        refresh_research();
    }

    //Display the length of the bar for the clicking excersize.
    document.getElementById("click_bar").style.width = clicks_per_sec*10 + "px";
}

function refresh10000() {
    //Enable or disable the background_change, which gives the tree picture backgrounds. 
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
    //Set the colours of setting buttons to either on/off, depending on the value stored in the settings
    let setting_buttons = document.getElementsByClassName("button3");
    for (const key in setting_buttons) {
        if (setting_buttons.hasOwnProperty(key)) {
            //Declare the variables
            let ele = setting_buttons[key];
            let set_key = ele.getAttribute('data-value');
            //Perform a check whether the setting is enabled (1) or disabled (0) and set the colour of the button accordingly.
            if (setting_save[set_key] == 1) {
                changeBackground(ele.getAttribute('id'), "green");
            }
            else if (setting_save[set_key] == 0) {
                changeBackground(ele.getAttribute('id'), "red");
            }
        }
    }

    //Set the colour of the autosave buttons
    if (setting_save['auto_save'] != setting_base_values['auto_save']) {
        let id_off = 'auto_save_toggle_' + setting_base_values['auto_save'];
        let id = 'auto_save_toggle_' + setting_save['auto_save'];
        changeBackground(id_off, "red");
        changeBackground(id, "green");
    }

    //Refresh building displays
    refresh_buildings();

    //Display the stats in the stats tab
    document.getElementById('lifetime_clicks').innerHTML = Math.floor(game_save.lifetime_clicks);
    document.getElementById('lifetime_trees_chopped').innerHTML = Math.floor(game_save.lifetime_trees_chopped + game_save.trees_chopped);
    document.getElementById('lifetime_buildings_bought').innerHTML = Math.floor(game_save.lifetime_buildings_bought + game_save.buildings_data.b_num_total);
    

}

//Sets all the variables for gain and similar to the formulae required
function game_refresh() {
    //Set the manual clicking power for trees
    game_save.manual_power = Math.floor((Math.sqrt(clicks_per_sec)) * (1 + game_save.tree_levels * game_save.buildings_data.b_click_costs.effect));
    //Set the trees per second
    game_save.trees_per_sec = game_save.manual_power + game_save.buildings_data.b_production_costs.effect;
    //Set the stone per second
    if (clicks_per_sec !== 0) {
        game_save.stone_per_sec = game_save.buildings_data.b_stone_costs.effect + (0.1*clicks_per_sec*game_save.buildings_data.b_stone_click_costs.effect);
    }
    else {
        game_save.stone_per_sec = game_save.buildings_data.b_stone_costs.effect;
    }


    //Set the price of upgrading the tree
    if (game_save.tree_levels < 10) {
        upgrade_tree_price = tree_upgrade_cost[game_save.tree_levels];
    }

    //Set the amount of remaining land
    land_multi = 2*game_save.tree_levels;
    game_save.land = 10 + game_save.tree_levels*land_multi-buildings_count - game_save.buildings_data.b_num_total;

    //Set the multiplier for a building's cost.
    buildings_multi = 1.01**game_save.buildings_data.b_num_total * (1/(1+0.1*game_save.buildings_data.b_reduce_costs.owned));

    //Set the effect for each building
    let build_click = game_save.buildings_data.b_click_costs
    build_click.effect = 1 + build_click.owned*(build_click.research+1)*2

    let build_prod = game_save.buildings_data.b_production_costs
    build_prod.effect = 1 + build_prod.owned*build_prod.research*5**(Math.floor(game_save.tree_levels/1.5));

    let build_research = game_save.buildings_data.b_research_costs
    build_research.effect = build_research.owned*build_research.research*2

    let build_stone = game_save.buildings_data.b_stone_costs
    build_stone.effect = build_stone.owned*build_stone.research*build_stone.owned

    let build_souls = game_save.buildings_data.b_soul_costs
    build_souls.effect = build_souls.owned*build_souls.research*2
    
    let build_c_stone = game_save.buildings_data.b_stone_click_costs
    build_c_stone.effect = 1+build_c_stone.owned*build_c_stone.research*game_save.tree_levels/5;
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
    refresh_research();
    load_check_1 = 1;
};


