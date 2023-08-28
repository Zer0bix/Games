function buy_research(element) {
    let ele = element.target;
    let parent_ele = ele.parentElement;
    let key = parent_ele.getAttribute("data-display-path");
    let game_save_key = "r_" + key;

    //Check if the thing can be purchased
    if (1==1) {}

    refresh_research();
}


function refresh_research() {
    content_list = document.getElementsByClassName("r_content");
    for (i=0; i<content_list.length; i++) {
        let content = content_list[i];
        thingy = content;
        let key = content.getAttribute("data-display-path");
        let game_save_key = "r_" + key;
        let cost_ele_key = game_save_key + "_cost";
        thingy.children[cost_ele_key].innerHTML = game_save.research_data[game_save_key].cost;
    }
}