//Get the position of the mouse
window.addEventListener('mousemove', (event) => {
    mouse_pos = { x: event.clientX, y: event.clientY};
});

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

function objectToObject(a, b) {
    for (const values in a) {
        if (a.hasOwnProperty(values) && b.hasOwnProperty(values)) {
            b[values] = a[values];
        }
    }
    return b
}

function clone_object(a) {
    b = Object()
    for (const values in a) {
        b[values] = a[values];
    }
    return b
}



//Tooltip functions
function tooltip_end(element) {
    clearTimeout(tooltip_timer);
    document.getElementById("global_tooltip_content").style.animationName = "animatefadeout";
    document.getElementById("global_tooltip_content_down").style.animationName = "animatefadeout";
    hide_tooltip = setTimeout(tooltip_hide, 500, element);
    window.removeEventListener('mousemove', tooltip_end);
}

function tooltip_hide(element) {

    ele = element.target;

    document.getElementById("global_tooltip").style.display = "none";
    document.getElementById("global_tooltip_down").style.display = "none";
}
function tooltip_start(element) {
    tooltip_timer = setTimeout(tooltip, 0, element);
}
function tooltip(element) {
    console.log(document.getElementById("global_tooltip"));
    try {clearTimeout(hide_tooltip);}
    catch(firstinstance) {}
    let ele = element.target;
    if (setting_save.tooltips_enabled == 1 ) {
        if (ele.getAttribute("data_tooltip_display") !== "" && ele.getAttribute("data_tooltip_display") !== undefined ) {

            //Position the tooltip correctly.
            if (ele.getAttribute("tooltip_direct") == "down") {
                let t_wrap = document.getElementById("global_tooltip_down");
                let t_content = document.getElementById("global_tooltip_content_down");
                t_content.innerHTML = ele.getAttribute("data_tooltip_display");
                t_wrap.style.display = "block";
                t_wrap.style.top = (mouse_pos.y + 35) + "px";
                t_wrap.style.left = (mouse_pos.x - 15) + "px";
            }
            //If no direction specified, position the tooltip above
            else {
                let t_wrap = document.getElementById("global_tooltip");
                let t_content = document.getElementById("global_tooltip_content");
                t_content.innerHTML = ele.getAttribute("data_tooltip_display");
                t_wrap.style.display = "block";
                t_wrap.style.left = (mouse_pos.x - 15) + "px";
                t_wrap.style.top = (mouse_pos.y - 40) + "px";
            }
        }
    }
    document.getElementById("global_tooltip_content").style.animationName = "animatefadein";
    document.getElementById("global_tooltip_content_down").style.animationName = "animatefadeout";

    setTimeout(tooltip_track_move, 500);
    
}
function tooltip_track_move() {
    window.addEventListener('mousemove', tooltip_end, false);
}