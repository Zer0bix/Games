//Responsible for increasing the amount of trees, stone, souls, and research we have.

function gain(rate) {
    //Trees
    game_save.trees += game_save.trees_per_sec/rate
    game_save.trees_chopped += game_save.trees_per_sec/rate

    //Stone
    game_save.stone += game_save.buildings_data.b_stone_costs.effect/rate + (0.1*clicks_per_sec*game_save.tree_levels)/rate;
    
    //Souls
    game_save.souls += game_save.buildings_data.b_soul_costs.effect/rate;

    //Research
    game_save.research += game_save.buildings_data.b_research_costs.effect/rate;
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