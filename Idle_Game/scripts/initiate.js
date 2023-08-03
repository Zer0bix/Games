//Declaring all the global variables here.
var load_check_0 = 0;
var load_check_1 = 0;
var load_check_3 = 0;
var load_check_2 = 0;

var load_interval_cleared = 1;
var load_progress = 0;

var trees = 1;
var tree = 1;
var trees_chopped = 0;
var wipe_times = 0;
var upgrade_tree_price = 10;
var tree_levels = 0;

var change_background = 1;
var auto_save = 60;


//Creating the JSON objects that are used to store the majority of the games variables.
//game_save is the save of the game, game_save_base is used as a temporary variable that takes on the changes loaded and then passes them to game_save
//game_base_values is the constant variable that tells you what the initial values are
//game_save_name is how you operate each item in the Object like a list
game_save = Object({trees, tree, trees_chopped, tree_levels, upgrade_tree_price});
game_save_base = game_save
const game_base_values = game_save
const game_save_name = ["trees", "tree", "trees_chopped", "tree_levels", "upgrade_tree_price"];

//JSON objects for settings, same uses as above, but stores all the settings that will need to be saved.
setting_save = Object({change_background, auto_save});
setting_save_base = Object({change_background, auto_save});
const setting_base_values = Object({change_background, auto_save});
const setting_save_name = ["change_background", "auto_save"];

const strung = JSON.stringify(game_save);




