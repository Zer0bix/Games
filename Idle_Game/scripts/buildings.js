function buy_1(element) {
    let ele_1 = element.target
    let parent_ele = ele_1.parentElement;
    let tree_cost = parent_ele.children.click_build_cost.children[2].id;
    let stone_cost = parent_ele.children.click_build_cost.children[3].id;

    console.log("BABABY", parent_ele);
    console.log("tree cost:", tree_cost);
    console.log("stone cost:", stone_cost)
    
    
}