function buy_1(element) {
    refresh_buildings();
    let ele_1 = element.target
    let parent_ele = ele_1.parentElement;
    let tree_cost = parent_ele.children.build_cost.children[2]; 
    let tree_key = "b_" + tree_cost.getAttribute('data-value');
    if (game_save.trees >= game_save.buildings_data[tree_key].trees2 && game_save.land >= 1 && game_save.stone >= game_save.buildings_data[tree_key].stone) {
        game_save.buildings_data[tree_key].owned += 1;
        game_save.trees -= game_save.buildings_data[tree_key].trees2;
        game_save.stone -= game_save.buildings_data[tree_key].stone;


    }
    else {
        if (game_save.land < 1) {
            alert_box("You need land to build buildings! (try building the tree!)");
        }
        else {
            alert_box("You cannot afford that building...");
        }
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
        game_save.buildings_data[cost_key].mult = (buildings_multi * (1.5**game_save.buildings_data[cost_key].owned));

        
        //Work out the values
        //try {
        let tree = Math.floor(game_save.buildings_data[cost_key].mult * buildings_data_base[cost_key].trees2);
        game_save.buildings_data[cost_key].trees2 = tree;
        game_save.buildings_data[cost_key].stone = Math.floor((Math.sqrt(game_save.buildings_data[cost_key].mult)) * buildings_data_base[cost_key].stone);
        //}
        //catch(exception) {
//            console.warn("Couldn't access values of game_save.buildings_data[cost_key] in line 56-57 of buildings.js");
        //}
        //Refresh the displays
        tree_cost.children[1].innerHTML = game_save.buildings_data[cost_key].trees2;
        stone_cost.children[1].innerHTML = game_save.buildings_data[cost_key].stone;

        //Refresh the owned displays
        count_tree.innerHTML = game_save.buildings_data[cost_key].owned;
        
        //Check if you can afford each item, and then add the respective class (can_upgrade or cant_upgrade) to the element.
        //Tree
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
        //Stone
        if (game_save.stone >= game_save.buildings_data[cost_key].stone) {
            stone_cost.children[1].classList.add("can_upgrade");
            stone_cost.children[1].classList.remove("cant_upgrade");
        }
        else if (game_save.stone < game_save.buildings_data[cost_key].stone) {
            stone_cost.children[1].classList.remove("can_upgrade");
            stone_cost.children[1].classList.add("cant_upgrade");
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

    //See if the bottom row of buildings can be display, and display them if so. Otherwise, see if they shouldn't be displayed, and then hide them.
    if (high_tier_buildings_displayed == 0 && game_save['tree_levels'] >= 3) {
        high_tier_buildings_displayed = 1;
        for (i=0;i<4;i++) {
            second_row_buildings[i].style.display = "block";
        }
    }
    else if (game_save['tree_levels'] < 3) {
        high_tier_buildings_displayed = 0;
        for (i=0;i<4;i++) {
            second_row_buildings[i].style.display = "none";
        }
    }

    //Display destroy building button if unlocked
    destroy_building_list = document.getElementsByClassName("b_button_destroy");
    if (destroy_building_buttons_displayed == 0 && game_save.research_data.r_dynamite.owned > 0) {
        destroy_building_buttons_displayed = 1;
        for (i=0;i<8;i++) {
            destroy_building_list[i].style.display = "block";
        }
        
    }
    else if (game_save.research_data.r_dynamite.owned = 0) {
        destroy_building_buttons_displayed = 0;
        for (i=0;i<8;i++) {
            destroy_building_list[i].style.display = "none";
        }
    }
}

function b_destroy_1(element) {
    let ele = element.target;
    let parent_ele = ele.parentElement;
    let tree_cost = parent_ele.children.build_cost.children[2];
    let key = "b_" + tree_cost.getAttribute('data-value');
    
    //Destroy the building (no checks for them hahaha)
    if (game_save.buildings_data[key].owned >= 1) {
        game_save.buildings_data[key].owned -= 1;
    }
    else {
        alert_box("You can't demolish a non-existent building!");
    }
}