var keys = ["1", "3", "5", "10"];
var big = 0;

window.onload = function() {
    let _1 = 0;
    let _3 = 0;
    let _5 = 0;
    let _10 = 0;
    let root = 0;

    

    cps = Object({_1, _3, _5, _10});
    high_scores = Object({_1, _3, _5, _10, root});

    //Try loading old save values
    try {
        let loadSaveStateString = localStorage.getItem('cps_test_save_data');
        let loadSaveState = JSON.parse(atob(loadSaveStateString));
        console.log("Game loaded from: ", loadSaveState);
        high_scores = loadSaveState;
        console.log(high_scores);
    }

    catch(firstinstance) {}

    setInterval(refresh_values, 10);
    setInterval(save, 1000);
}

function cps_click() {
    for (const key in keys) {
        let key_val = keys[key];
        cps_add(key_val);
    }

}

function cps_add(time) {
    let key = "_" + time;
    cps[key] += 1;
    if (cps[key]/time >= high_scores[key]) {
        high_scores[key] = Math.floor(cps[key]/time);
    }
    setTimeout(cps_remove, time*1000, key);
}

function cps_remove(key) {
    cps[key] += -1;
}

function zoom_cps_clicker() {
    let clicker = document.getElementById("cps_clicker");
    if (big == 0) {
        clicker.style.width = "750px";
        clicker.style.height = "750px";
        big = 1;
        console.log(big);
    }
    else {
        clicker.style.width = "150px";
        clicker.style.height = "100px";
        big = 0;
        console.log(big);
    }

}

function change_value(key) {
    let id = key;
    let ele = document.getElementById(id);
    return ele
}
function refresh_values() {
    for (const key in keys) {
        let key_val = "_" + keys[key];
        let id = "cps" + key_val
        ele = change_value(id);
        ele.innerHTML = Math.floor(cps[key_val]/keys[key]);
    }

    //Non-second related values
    let root_ele = document.getElementById("cps_root");
    let root_value = (Math.floor(10*Math.sqrt(cps['_1']))/10);
    root_ele.innerHTML = root_value;
    if (root_value >= high_scores['root']) {
        high_scores['root'] = root_value
    }
    let root_high_ele = document.getElementById("h_cps_root");
    root_high_ele.innerHTML = high_scores['root'];

    //High Scores
    for (const key in keys) {
        let key_val = "h_cps_" + keys[key];
        ele = change_value(key_val);
        ele.innerHTML = high_scores["_" + keys[key]];
    }
}



function save() {
    let savegame = btoa(JSON.stringify(high_scores));
    localStorage.setItem('cps_test_save_data', savegame);
    console.log("Game saved as: ", savegame);
    
}

function reset_scores() {
    let _1 = 0;
    let _3 = 0;
    let _5 = 0;
    let _10 = 0;
    let root = 0;
    
    high_scores = Object({_1, _3, _5, _10, root});
}