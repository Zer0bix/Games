function buy_1() {
    refresh_upgrades();
    let ele_1 = element.target
    let parent_ele = ele_1.parentElement;
    let cost = parent_ele.children.build_cost.children[2];
    let key = "b_" + cost.getAttribute('data-value');
    if (game_save.s >= game_save.upgrades_data[key].souls) {
        game_save.upgrades_data[key].owned += 1;
        game_save.souls -= game_save.upgrades_data[key].cost;


    }
    else {
            alert_box("You cannot afford that upgrade...");
    }
    refresh_upgrades();
}

function refresh_upgrades() {
    
}