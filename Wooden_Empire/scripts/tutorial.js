function tutorial() {
    document.getElementById("tutorial").style.display = "block";
    document.getElementById("loading_screen").style.display = "none";
}

function tutorial_1() {
    document.getElementById("tutorial_content").style.display = "none";
    setTimeout(end_tutorial, 1000);
}

function end_tutorial() {
    document.getElementById("loading_screen").style.display = "none";
    document.getElementById("page_content").style.display = "block";
    document.getElementById("tutorial").style.display = "none";
    tutorial_needed = 0;
}