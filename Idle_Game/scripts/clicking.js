

// Basic Clicking Function

function gain() {
    click_tree();
}

function click_tree() {
    trees += tree
    trees_chopped += tree
    document.getElementById("output").innerHTML = trees;
    if (Math.log10(trees) < 5) {
        document.getElementById("tree_count_logo").style.right = 125 + Math.floor(Math.log10(trees))*18;
    }
    
}
function upgrade_click() {
    if(trees>price-1) {
        trees -= price;
        ex_tree = ex_tree+ex_price;
        ex_price = ex_price*1.2;
        tree = Math.round(ex_tree);
        price = Math.round(ex_price);

        document.getElementById("output").innerHTML = trees;
        document.getElementById("upgbutprice").innerHTML = price;
        document.getElementById("click_power").innerHTML = tree;
        if (Math.log10(trees) < 22) {
            document.getElementById("tree_count_logo").style.right = 125 + Math.floor(Math.log10(trees))*18;
            }
    }
}

function upgrade_tree() {
    if (trees>upgrade_tree_price-1) {
        tree_levels += 1;
        trees -= upgrade_tree_price;
    }
}