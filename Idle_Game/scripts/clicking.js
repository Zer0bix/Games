

// Basic Clicking Function

function gain() {
    click_tree();
}

function click_tree() {
    game_save['trees'] += game_save['tree']
    game_save['trees_chopped'] += game_save['tree']
    document.getElementById("output").innerHTML = game_save['trees'];
    if (Math.log10(game_save['trees']) < 5) {
        document.getElementById("tree_count_logo").style.right = 125 + Math.floor(Math.log10(game_save['trees']))*18;
    }
    
}

function upgrade_tree() {
    if (game_save['trees']>game_save['upgrade_tree_price']-1) {
        game_save['tree_levels'] += 1;
        game_save['trees'] -= game_save['upgrade_tree_price'];
    }
}