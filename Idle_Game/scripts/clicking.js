

// Basic Clicking Function

function gain() {
    game_save.trees += game_save.manual_power;
    game_save.trees_chopped += game_save.manual_power;
    document.getElementById("output").innerHTML = game_save.trees;
}

function click_tree() {
    clicks_per_sec += 1;
    setTimeout(remove_click_tree, 1000);
    
}

function remove_click_tree() {
    clicks_per_sec += -1;
    game_save.lifetime_clicks += 1;
}

function upgrade_tree() {
    if (game_save.trees>upgrade_tree_price-1) {
        game_save.tree_levels += 1;
        game_save.trees -= upgrade_tree_price;
    }
}

function enable_click_button(id) {
    document.getElementById(id).disabled = "";
}

function no_spam(id) {
    document.getElementById(id).disabled = "disabled";
    setTimeout(enable_click_button, 1, id);
}