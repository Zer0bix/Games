
function load_game() {
    if (load_progress == 4) {
        document.getElementById("loading_screen").style.display = "none";
        document.getElementById("page_content").style.display = "block";
        setInterval(gain, 1000);
    }
}

function check_load() {
    if (load_check_0 == 1) {
        load_progress = 1;
        if (load_check_1 == 1) {
            load_progress = 2;
            if (load_check_2 == 1) {
                load_progress = 3;
                if (load_check_3 == 1) {
                    load_progress = 4;
                }
            }
        }
        if (load_progress == 4) {
            try {
            if (load_interval_cleared == 1) {
                clearInterval(check_load_progress);
                load_interval_cleared = 0;
                document.getElementById("loading_screen_icon_cover").style.display = "none";
                document.getElementById("loading_game_text").innerHTML = "Loaded!";
            }
            }
            catch (exception) {console.log("couldn't load")}

        }
        else {
            load_bar_progress = 1/(4-load_progress);
            move_bar(); 
        }
    }
}
function move_bar() {
    var bar = document.getElementById("loading_screen_icon_cover");
    width = 38.3*load_bar_progress;
    marginleft = 38.3*(1-load_bar_progress);
    bar.style.width = width + "%";
    bar.style.marginLeft = marginleft + "%";
}