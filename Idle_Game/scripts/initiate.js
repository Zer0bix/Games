//Declaring all the global variables here and then creating the JSON file for the important variables.
var load_check_0 = 0;
var load_check_1 = 0;
var load_check_3 = 0;
var load_check_2 = 0;

var load_interval_cleared = 1;
var load_progress = 0;

var trees = 1;
var tree = 1;
var price = 1;
var ex_tree = tree;
var ex_price = price;
var trees_chopped = 0;
var wipe_times = 0;
var upgrade_tree_price = 10;
var tree_levels = 0;

var change_background = 1;
var auto_save = 60;

var bees = 5;
var unddefined = 5;

const object_vars = Object({trees, tree, price, ex_tree, ex_price, trees_chopped, change_background, tree_levels});
const base_values = Object({trees, tree, price, ex_tree, ex_price, trees_chopped, change_background, tree_levels, bees, unddefined});
const object_vars_num = ["trees", "tree", "price", "ex_tree", "ex_price", "trees_chopped", "change_background", "tree_levels", "bees", "unddefined"];
object_vars["trees"] = 5;
object_vars["bees"] = 5;
object_vars['unddefined'] += 5;
for (i=0; i < object_vars_num.length; i++) {
    j = object_vars_num[i];
    if (isNaN(object_vars[j])) {
        console.log("Detected null (NaN) as: ", object_vars_num[i]);
        object_vars[j] = base_values[j];
        console.log("replaced '", object_vars_num[i], "' with:", object_vars[j])
        
    }
}
console.log(object_vars, "HI");
obj_var_string = JSON.stringify(object_vars);
console.log("stringified is:", obj_var_string);
obj_var = Object(JSON.parse(obj_var_string));
console.log("Parsed is:", obj_var)
if (obj_var == object_vars) {
    console.log("same");
}
else {
    console.log("not same");
    console.log(obj_var, object_vars);
}