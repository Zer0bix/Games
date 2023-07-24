var change_background = 1;
var auto_save = 1;

window.onload = function() {
    document.getElementById("output").innerHTML = trees;
    document.getElementById("upgbutprice").innerHTML = price;

    localLoad();
    setInterval(gain, 1000);
    const localsave_int = setInterval(localsave, 1000);
    setInterval(refresh, 100);

    
}


function background_change() {
    if (trees_chopped > -1 && trees_chopped < 1000) {
        document.body.style.background = "url('Images/full_forest.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
        
    }
    if (trees_chopped > 999 && trees_chopped < 10000) {
        document.body.style.background = "url('Images/partial_deforest.png') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
        
    }
    if (trees_chopped > 9999 && trees_chopped < 100000) {
        document.body.style.background = "url('Images/mostly_deforest.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
    }
    if (trees_chopped > 99999) {
        document.body.style.background = "url('Images/deforested_desert.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
    }
}

function refresh() {
    try {
        if (change_background == 1) {
            
            background_change();
        }
        else {
            console.log("hi");
            changeBackground("change_background_toggle", "red");
            document.body.style.backgroundImage = "url('Images/clean_background.png')";
            console.log("done");
        }
    }
    //if it don't work I still want the other code to run
    catch(firstinstance) {}
    if (auto_save == 1) {
        const localsave_int = setInterval(localsave, 1000);

    }
    else {
        clearInterval(localsave_int)
        changeBackground("auto_save_toggle", "red");
    }
    document.getElementById("output").innerHTML = trees;
    document.getElementById("upgbutprice").innerHTML = price;
    document.getElementById("click_power").innerHTML = tree;
    document.getElementById("tree_level_display").innerHTML = tree_levels;

    if (Math.log10(trees) < 22) {
        document.getElementById("tree_count_logo").style.right = 125 + Math.floor(Math.log10(trees))*18;
    }

    if (trees > price-1) {
    
        document.getElementById("upg_but").style.background = "url('Images/green_up_arrow.png') no-repeat";
    }

    else {
        document.getElementById("upg_but").style.background = "url('Images/red_up_arrow.png') no-repeat";
    }

    if (tree_levels > -1) {
        document.getElementById("divider_tabs").style.display = "block";
    }
    else {
        //document.getElementById("divider_tabs").style.display = "none";
    }

}

function shortenum(num) {
    var num2 = 0;
    num2 = num;
    while (stop=False) {
        num2 = num2/1000;
        if (num2 < 1000) {
            stop = True;
        }

    }
}