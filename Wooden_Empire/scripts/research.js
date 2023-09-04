function buy_research(element) {
    let ele = element.target;
    let parent_ele = ele.parentElement;
    let key = parent_ele.getAttribute("data-display-path");
    let game_save_key = "r_" + key;
    console.log(game_save_key);
    //Check if the thing can be purchased
    console.log(game_save.research);
    if (game_save.research >= game_save.research_data[game_save_key].cost) {
        //Set the necessary values, and take away the research points
        game_save.research_data[game_save_key].owned = 1;
        game_save.research -= game_save.research_data[game_save_key].cost;
        game_save.research_data[game_save_key].display = 0;
        console.log(game_save.research_data[game_save_key].display);
        console.log("Research Purchased!")
    }

    refresh_research();
}


function refresh_research() {
    content_list = document.getElementsByClassName("r_content");
    for (i=0; i<content_list.length; i++) {
        let content = content_list[i];
        let key = content.getAttribute("data-display-path");
        let game_save_key = "r_" + key;
        let cost_ele_key = game_save_key + "_cost";
        content.children[cost_ele_key].innerHTML = game_save.research_data[game_save_key].cost;
        let display = game_save.research_data[game_save_key].display;
        if (display == 0) {
            content_list[i].parentElement.style.display = "none";
        }
        if (display == 1) {
            content_list[i].parentElement.style.display == "block";
        }
        
    }
}