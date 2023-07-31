function export_save() {
    const data = [trees, tree, price, ex_tree, ex_price, trees_chopped, change_background, tree_levels];

    // Convert numbers to strings before encoding
    const pardata = data.map((item) => item.toString());

    const encoded = btoa(JSON.stringify(pardata));

    document.getElementById("export_box").value = encoded;
    navigator.clipboard.writeText(encoded);
    console.log("Copied to clipboard!");
}

function import_save() {
    const new_data = document.getElementById("import_box").value;
    
    const decoded = atob(new_data);
    console.log(decoded);
    const pardata = JSON.parse(decoded);
    console.log(pardata);
    
    trees = parseInt(pardata[0]);
    tree = parseInt(pardata[1]);
    price = parseInt(pardata[2]);
    ex_tree = parseInt(pardata[3]);
    ex_price = parseInt(pardata[4]);
    trees_chopped = parseInt(pardata[5]);
    change_background = parseInt(pardata[6]);
    tree_levels = parseInt(pardata[7]);
    console.log([trees, tree, price, ex_tree, ex_price, trees_chopped, change_background, tree_levels]);
}

function localsave() {
    const data = [trees, tree, price, ex_tree, ex_price, trees_chopped, change_background, tree_levels];

    const localsavestore = JSON.stringify(data);
    localStorage.setItem('saveData', localsavestore);
    console.log("Game saved as: ", localsavestore);
    
}

function localLoad() {
    const loadSaveStateString = localStorage.getItem('saveData')
    const loadSaveState = JSON.parse(loadSaveStateString)
    console.log("Game loaded from: ", loadSaveState);
    try {
    trees = parseInt(loadSaveState[0]);
    tree = parseInt(loadSaveState[1]);
    price = parseInt(loadSaveState[2]);
    ex_tree = parseInt(loadSaveState[3]);
    ex_price = parseInt(loadSaveState[4]);
    trees_chopped = parseInt(loadSaveState[5]);
    change_background = parseInt(loadSaveState[6]);
    tree_levels = parseInt(loadSaveState[7]);
    }
    catch (error) {
        console.log(fromBinary(loadSaveState));

    }

}

function wipeSave() {
    dialog_box = document.getElementById("warning");
    dialog_box.style.display = "block";
    document.getElementById("underlay_back").style.display = "none";
}

function wipe_check() {
    wipe_times += 1;
    document.getElementById("wipe_check_num").value = wipe_times;
    document.getElementById("erase_save_1").style.marginTop = Math.random()*300;
    document.getElementById("erase_save_1").style.marginLeft = Math.random()*300+100;
    
    
    if (wipe_times > 10) {
        true_wipe();
    }
}
function true_wipe() {
    // hide the warnings
    dialog_box = document.getElementById("warning");
    dialog_box.style.display = "none";
    alert("wiping save (close page to prevent from taking place, or restore an exported save.");
    // resetting all variables (probably optimize in future using JSON)
    trees = 1;
    tree = 1;
    price = 1;
    ex_tree = tree;
    ex_price = price;
    trees_chopped = 0;
    wipe_times = 0;
    change_background = 0;
    tree_levels = 0;
    document.getElementById("wipe_check_num").value = wipe_times;
    // display the main interface.
    document.getElementById("underlay_back").style.display = "block";
    open_tab('tab_1');
}
function no_wipe() {
    dialog_box = document.getElementById("warning");
    dialog_box.style.display = "none";
    wipe_times = 0;
    document.getElementById("underlay_back").style.display = "block";
    document.getElementById("wipe_check_num").value = wipe_times;
}



function fromBinary(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
  }