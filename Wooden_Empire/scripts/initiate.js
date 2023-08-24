//Declaring all the global variables here.

version = "0.0.1";

//Tutorial variables
tutorial_needed = 0;

//Loading variables needed in load.js, all gradually set to 1 as the game is loaded.
load_check_0 = 0;
load_check_1 = 0;
load_check_3 = 0;
load_check_2 = 0;

//variables that help with load.js
load_interval_cleared = 1;
load_progress = 0;

// Set that the alert is not currently visible
alert_visible = 0;

//miscellaneous variables
upg_tree_set_class_cursor = 1;

//Clicking variables
clicks_per_sec = 0;

//Upgrading variables
const tree_upgrade_cost = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000]; //The large number as the last item means that the upgrade can no longer be purchased, which should prevent error cases where the tree level beats the maximum level.
upgrade_tree_price = 10;

//Multiplicators
land_multi = 10;
buildings_count = 0;
buildings_multi = 0;

//Building costs initial
function build_object(trees2, stone, upgrade) {
    let mult = 1;
    let owned = 0;
    let effect = 1;
    let research = 1;
    let obj = Object({trees2, stone, upgrade, research, mult, owned, effect});
    return obj
}

//function build_buildings_list_object(click, production, research, reduce, soul, stone, shop, school, bush, plantation) {
//    let obj = Object({click, production, research, reduce, soul, stone, shop, school, bush, plantation});
//    return obj
//}


//Creates objects for each building detailing base costs of each resource.
b_empty = build_object(0, 0, 0);
b_click_costs = build_object(10, 5, 0);
b_production_costs = build_object(100, 10, 0);
b_research_costs = build_object(1000, 25, 0);
b_reduce_costs = build_object(2500, 50, 0);
b_soul_costs = build_object(5000, 75, 0);
b_stone_costs = build_object(7500, 100, 0);
b_shop_costs = build_object(10000, 1000, 0);
b_plantation_costs = build_object(1000, 25, 0);
b_num_total = 0;

//Usage of JSON.parse(JSON.stringify()) makes the objects no longer bound to the above objects, instead creating new objects. This means
buildings_data = Object({b_click_costs, b_production_costs, b_research_costs, b_reduce_costs, b_soul_costs, b_stone_costs, b_shop_costs, b_plantation_costs, b_num_total});
buildings_data_base = JSON.parse(JSON.stringify(clone_object(buildings_data)));

//Other buildings variables
cant_buy_building = 0;
high_tier_buildings_displayed = 0;
second_row_buildings = document.getElementsByClassName("b_mid_row");



//Game data variables
trees = 1;
trees_per_sec = 0;
manual_power = 1;
trees_chopped = 0;
wipe_times = 0;
tree_levels = 0;
land = 0;
stone = 0;
souls = 0;
research = 0;

//Game setting variables
change_background = 0;
auto_save = 60;
tooltips_enabled = 1;

//Stats variables
lifetime_clicks = 0;
lifetime_trees_chopped = 0;
lifetime_buildings_bought = 0;


//Creating the JSON objects that are used to store the majority of the games variables.
//game_save is the save of the game
//game_base_values is the constant variable that tells you what the initial values are
//game_save_name is how you operate each item in the Object like a list
//Unfortunately Objects do not allow you to create an object like game_save_base = game_save, as it just becomes a new access point for the initial object instead of taking all the values of the object. This is why each object is defined 3 times.  
game_save = Object({trees, manual_power, trees_chopped, tree_levels, lifetime_clicks, lifetime_trees_chopped, lifetime_buildings_bought, land, buildings_data, version, stone, souls, research, trees_per_sec});
const game_base_values = JSON.parse(JSON.stringify(game_save));
const game_save_name = ["trees", 'manual_power', "trees_chopped", "tree_levels", "lifetime_clicks", "lifetime_trees_chopped", "lifetime_buildings_bought", "land", "buildings_data"];

//JSON objects for settings, same uses as above, but stores all the settings that will need to be saved.
setting_save = Object({change_background, auto_save, tooltips_enabled});
setting_save_base = Object({change_background, auto_save});
const setting_base_values = Object({change_background, auto_save});
const setting_save_name = ["change_background", "auto_save"];

const strung = JSON.stringify(game_save);




