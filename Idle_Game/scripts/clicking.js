

// Basic Clicking Function
var trees = 1;
var tree = 1;
var price = 1;
var ex_tree = tree;
var ex_price = price;
function gain() {
    click_tree()
}
window.onload = function() {
    document.getElementById("output").innerHTML = trees;
    document.getElementById("upgbut2").innerHTML = price;
    setInterval(gain, 1000)

}
function click_tree() {
    trees += tree
    document.getElementById("output").innerHTML = trees;
}
function upgrade_click() {
    if(trees>price-1) {
        trees -= price
        ex_tree = ex_tree+ex_price
        ex_price = ex_price*1.2
        tree = Math.round(ex_tree)
        price = Math.round(ex_price)

        document.getElementById("output").innerHTML = trees;
        document.getElementById("upgbut2").innerHTML = price;
        document.getElementById("click_power").innerHTML = tree;
    }
}
document.getElementById("upgbut").innerHTML = price;