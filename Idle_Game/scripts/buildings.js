function buy_1(element) {
    let ele_1 = element.target
    let parent_ele = ele_1.parentElement;
    let tree_cost = parent_ele.children.build_cost.children[2];
    let stone_cost = parent_ele.children.build_cost.children[3];
    let tree_key = "b_" + tree_cost.getAttribute('data-value');
    let stone_key = "b_" + stone_cost.getAttribute('data-value');
    let tree_cost_key = "b_" + tree_cost.getAttribute('data-value');
    let stone_cost_key = "b_" + stone_cost.getAttribute('data-value');
    if (game_save.trees >= buildings_data[tree_cost_key].tree) {
        console.log(game_save.trees, "is greater than", buildings_data[tree_cost_key].tree);
        buildings_data[tree_key].owned += 1;
        //game_save.trees -= buildings_data[tree_cost_key].tree;
        console.log("definitely did ", game_save.trees, "minus", buildings_data[tree_cost_key].tree)


    }
    else {
        console.log(game_save.trees, "is smaller than", buildings_data[tree_cost_key].tree);
        console.log(tree_cost_key);
    }
    refresh_buildings();
}



function refresh_buildings() {
    //Calculate the total number of buildings
    let total_object_number_count = 0;
    for (let obja in buildings_data) {
        
        if (buildings_data.hasOwnProperty(obja)) {
            let obj = buildings_data[obja];
            if (typeof(obj) == "object") {
                total_object_number_count += obj.owned;
            }
        }
    }
    buildings_data.b_num_total = total_object_number_count;

    //Refresh all the values for buildings multipliers, costs, and then display the costs and owned.
    let buildings = document.getElementsByClassName('wrapperb');
    for (i=0; i<buildings.length; i++) {
        let ele = buildings[i];
        let count_tree = ele.children.count; //Locate and store the count div
        let tree_cost = ele.children.build_cost.children[2];
        let stone_cost = ele.children.build_cost.children[3];
        let cost_key = "b_" + tree_cost.getAttribute('data-value');
        
        //Set the costs and displays
        buildings_data[cost_key].mult = ((1.1**buildings_data.b_num_total) * (1.5**buildings_data[cost_key].owned));

        
        //Work out the values
        buildings_data[cost_key].tree = Math.floor(buildings_data[cost_key].mult * buildings_data_base[cost_key].tree);
        buildings_data[cost_key].stone = Math.floor(buildings_data[cost_key].mult * buildings_data_base[cost_key].stone);
        
        //Refresh the displays
        tree_cost.children[1].innerHTML = buildings_data[cost_key].tree;
        stone_cost.children[1].innerHTML = buildings_data[cost_key].stone;

        //Refresh the owned displays
        count_tree.innerHTML = "Owned: " + buildings_data[cost_key].owned;
        
    }
}