//Declaring all the global variables here.

//Loading variables needed in load.js, all gradually set to 1 as the game is loaded.
var load_check_0 = 0;
var load_check_1 = 0;
var load_check_3 = 0;
var load_check_2 = 0;

//variables that help with load.js
var load_interval_cleared = 1;
var load_progress = 0;

// Set that the alert is not currently visible
var alert_visible = 0;

//miscellaneous variables
var upg_tree_set_class_cursor = 1;

//Clicking variables
var clicks_per_sec = 0;

//Upgrading variables
const tree_upgrade_cost = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000]; //The large number as the last item means that the upgrade can no longer be purchased, which should prevent error cases where the tree level beats the maximum level.
var upgrade_tree_price = 10;

//Multiplicators
var land_multi = 10;
var buildings_count = 0;

//Building costs initial
function build_object(tree, stone, research, green, mult) {
    let obj = Object({tree, stone, research, green, mult});
    return obj
}

function build_buildings_list_object(click, production, research, reduce, soul, stone, shop, school, bush, plantation) {
    let obj = Object({click, production, research, reduce, soul, stone, shop, school, bush, plantation});
    return obj
}


//Creates objects for each building detailing base costs of each resource.
var b_empty = build_object(0, 0, 0, 0, 0);
var b_click_costs = build_object(10, 5, 0, 0, 1);
var b_prod_costs = build_object(100, 10, 0, 0, 1);
var b_research_costs = build_object(1000, 25, 0, 0, 1);
var b_costdown_costs = build_object(2500, 50, 0, 0, 1);
var b_soul_costs = build_object(5000, 75, 0, 0, 1);
var b_stone_costs = build_object(7500, 100, 0, 0, 1);
var b_shop_costs = build_object(10000, 1000, 0, 0, 1);
var b_school_costs = build_object(12500, 100, 0, 0, 1);
var b_bush_costs = build_object(1000, 25, 0, 0, 1);
var b_plantation_costs = build_object(1000, 25, 0, 0, 1);

var buildings_vars = Object({b_click_costs, b_prod_costs, b_research_costs, b_costdown_costs});
var buildings_vars_base = clone_object(buildings_vars);


//Game data variables
var trees = 1;
var manual_power = 1;
var trees_chopped = 0;
var wipe_times = 0;
var tree_levels = 0;
var land = 0;

//Game setting variables
var change_background = 0;
var auto_save = 60;

//Stats variables
var lifetime_clicks = 0;
var lifetime_trees_chopped = 0;
var lifetime_buildings_bought = 0;


//Creating the JSON objects that are used to store the majority of the games variables.
//game_save is the save of the game, game_save_base is used as a temporary variable that takes on the changes loaded and then passes them to game_save
//game_base_values is the constant variable that tells you what the initial values are
//game_save_name is how you operate each item in the Object like a list
//Unfortunately Objects do not allow you to create an object like game_save_base = game_save, as it just becomes a new access point for the initial object instead of taking all the values of the object. This is why each object is defined 3 times.  
var game_save = Object({trees, manual_power, trees_chopped, tree_levels, lifetime_clicks, lifetime_trees_chopped, lifetime_buildings_bought, land});
var game_save_base = Object({trees, manual_power, trees_chopped, tree_levels, lifetime_clicks, lifetime_trees_chopped, lifetime_buildings_bought, land});
const game_base_values = Object({trees, manual_power, trees_chopped, tree_levels, lifetime_clicks, lifetime_trees_chopped, lifetime_buildings_bought, land});
const game_save_name = ["trees", 'manual_power', "trees_chopped", "tree_levels", "lifetime_clicks", "lifetime_trees_chopped", "lifetime_buildings_bought", "land"];

//JSON objects for settings, same uses as above, but stores all the settings that will need to be saved.
var setting_save = Object({change_background, auto_save});
var setting_save_base = Object({change_background, auto_save});
const setting_base_values = Object({change_background, auto_save});
const setting_save_name = ["change_background", "auto_save"];

const strung = JSON.stringify(game_save);




