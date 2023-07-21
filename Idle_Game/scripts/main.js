var change_background = 1;

window.onload = function() {
    document.getElementById("output").innerHTML = trees;
    document.getElementById("upgbutprice").innerHTML = price;

    localLoad();
    setInterval(gain, 1000);
    setInterval(localsave, 1000);
    setInterval(refresh, 100);
    start_screen();

    
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
            var id = document.getElementById("change_background_toggle");
            
            changeBackground(id, "green");
        }
        else {
            alert("hejd1")
            document.getElementById("change_background_toggle").style.background = "linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 0, 0, 0.5));"
            document.getElementById("change_background_toggle").innerHTML = "HIHI"
            alert("hejd")
            //changeBackground(document.getElementById("change_background_toggle"), red);
            //document.body.style.background = "url('Images/Terraria_5.png') no-repeat center center fixed";
        }
    }
    //if it don't work I still want the other code to run
    catch(firstinstance) {}

    document.getElementById("output").innerHTML = trees;
    document.getElementById("upgbutprice").innerHTML = price;
    document.getElementById("click_power").innerHTML = tree;

    if (Math.log10(trees) < 22) {
        document.getElementById("tree_count_logo").style.right = 125 + Math.floor(Math.log10(trees))*18;
    }

    if (trees > price-1) {
    
        document.getElementById("upg_but").style.background = "url('Images/green_up_arrow.png') no-repeat";
    }

    else {
        document.getElementById("upg_but").style.background = "url('Images/red_up_arrow.png') no-repeat";
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