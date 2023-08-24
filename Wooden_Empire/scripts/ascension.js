//Not currently implemented, and therefore not imported into the game


function ascend() {
    game_save.lifetime_trees_chopped += game_save.trees_chopped;
    game_save.trees_chopped = 0;
    game_save.lifetime_buildings_bought += game_save.buildings_data.b_num_total;
}