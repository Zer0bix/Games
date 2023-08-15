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
var upg_tree_set_class_cursor = 0;

//Clicking variables
var clicks_per_sec = 0;

//Game data variables
var trees = 1;
var manual_power = 1;
var trees_chopped = 0;
var wipe_times = 0;
var upgrade_tree_price = 10;
var tree_levels = 0;

//Game setting variables
var change_background = 0;
var auto_save = 60;


//Creating the JSON objects that are used to store the majority of the games variables.
//game_save is the save of the game, game_save_base is used as a temporary variable that takes on the changes loaded and then passes them to game_save
//game_base_values is the constant variable that tells you what the initial values are
//game_save_name is how you operate each item in the Object like a list
game_save = Object({trees, manual_power, trees_chopped, tree_levels, upgrade_tree_price});
var game_save_base = Object({trees, manual_power, trees_chopped, tree_levels, upgrade_tree_price});
const game_base_values = Object({trees, manual_power, trees_chopped, tree_levels, upgrade_tree_price});
const game_save_name = ["trees", 'manual_power', "trees_chopped", "tree_levels", "upgrade_tree_price"];

//JSON objects for settings, same uses as above, but stores all the settings that will need to be saved.
setting_save = Object({change_background, auto_save});
setting_save_base = Object({change_background, auto_save});
const setting_base_values = Object({change_background, auto_save});
const setting_save_name = ["change_background", "auto_save"];

const strung = JSON.stringify(game_save);




