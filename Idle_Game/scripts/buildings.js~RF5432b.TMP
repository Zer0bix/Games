function buy_1(element) {
    let ele_1 = element.target
    let parent_ele = ele_1.parentElement;
    let tree_cost = parent_ele.children.build_cost.children[2];
    let stone_cost = parent_ele.children.build_cost.children[3];
    let tree_key = "b_" + tree_cost.getAttribute('data-value');
    if (game_save.trees >= game_save.buildings_data[tree_key].trees2) {
        console.log(game_save.trees, "is greater than", game_save.buildings_data[tree_key].trees2);
        game_save.buildings_data[tree_key].owned += 1;
        //game_save.trees -= game_save.buildings_data[tree_key].tree;
        alert_box("uhh yeah not implemented yet. This is the dev stage after all! It's next on my agenda (well first I'll add stone but then that.)")


    }
    else {
        console.log(game_save.trees, "is smaller than", game_save.buildings_data[tree_key].trees2);
        console.log(tree_key);
    }
    refresh_buildings();
}



function refresh_buildings() {
    //Calculate the total number of buildings
    let total_object_number_count = 0;
    for (let obja in game_save.buildings_data) {
        
        if (game_save.buildings_data.hasOwnProperty(obja)) {
            let obj = game_save.buildings_data[obja];
            if (typeof(obj) == "object") {
                total_object_number_count += obj.owned;
            }
        }
    }
    game_save.buildings_data.b_num_total = total_object_number_count;

    //Refresh all the values for buildings multipliers, costs, and then display the costs and owned.
    let buildings = document.getElementsByClassName('wrapperb');
    for (i=0; i<buildings.length; i++) {
        let ele = buildings[i];
        let count_tree = ele.children.count; //Locate and store the count div
        let tree_cost = ele.children.build_cost.children[2];
        let stone_cost = ele.children.build_cost.children[3];
        let buy_button = ele.children.button;
        let cost_key = "b_" + tree_cost.getAttribute('data-value');
        
        //Set the costs and displays
        game_save.buildings_data[cost_key].mult = ((1.1**game_save.buildings_data.b_num_total) * (1.5**game_save.buildings_data[cost_key].owned));

        
        //Work out the values
        //try {
        let tree = Math.floor(game_save.buildings_data[cost_key].mult * buildings_data_base[cost_key].trees2);
        game_save.buildings_data[cost_key].trees2 = tree;
        game_save.buildings_data[cost_key].stone = Math.floor(game_save.buildings_data[cost_key].mult * buildings_data_base[cost_key].stone);
        //}
        //catch(exception) {
//            console.warn("Couldn't access values of game_save.buildings_data[cost_key] in line 56-57 of buildings.js");
        //}
        //Refresh the displays
        tree_cost.children[1].innerHTML = game_save.buildings_data[cost_key].trees2;
        stone_cost.children[1].innerHTML = game_save.buildings_data[cost_key].stone;

        //Refresh the owned displays
        count_tree.innerHTML = "Owned: " + game_save.buildings_data[cost_key].owned;
        
        //Check if you can afford each item, and then add the respective class (can_upgrade or cant_upgrade) to the element.
        cant_buy_building = 0;
        if (game_save.trees >= game_save.buildings_data[cost_key].trees2) {
            tree_cost.children[1].classList.add("can_upgrade");
            tree_cost.children[1].classList.remove("cant_upgrade");
        }
        else if (game_save.trees < game_save.buildings_data[cost_key].trees2) {
            tree_cost.children[1].classList.remove("can_upgrade");
            tree_cost.children[1].classList.add("cant_upgrade");
            cant_buy_building = 1;
        }



        //After checking all the materials, if any cannot be bought set that of the button to cant buy
        if (cant_buy_building == 1) {
            buy_button.classList.add("cant_upgrade");
            buy_button.classList.remove("can_upgrade");
        }
        else if (cant_buy_building == 0) {
            buy_button.classList.add("can_upgrade");
            buy_button.classList.remove("cant_upgrade");
        }
    }
}