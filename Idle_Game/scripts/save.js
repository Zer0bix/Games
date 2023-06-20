function export_save() {
    const data = [trees, tree, price, ex_tree, ex_price, trees_chopped];

    // Convert numbers to strings before encoding
    const pardata = data.map((item) => item.toString());

    const encoded = btoa(JSON.stringify(pardata));

    document.getElementById("export_box").value = encoded;
}

function import_save() {
    const new_data = document.getElementById("import_box").value;
    
    const decoded = atob(new_data);
    
    const pardata = JSON.parse(decoded);
    
    trees = parseInt(pardata[0]);
    tree = parseInt(pardata[1]);
    price = parseInt(pardata[2]);
    ex_tree = parseInt(pardata[3]);
    ex_price = parseInt(pardata[4]);
    trees_chopped = parseInt(pardata[5]);
    alert([trees, tree, price, ex_tree, ex_price, trees_chopped])
}