function open_tab(tab) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}
function sOpen_tab(tab) {
    let stabcontent = document.getElementsByClassName("sTabcontent_4");
    for (i = 0; i < stabcontent.length; i++) {
        stabcontent[i].style.display = "none";
    }
    stabcontent[tab].style.display = "block";
    console.log("succcccessssss");
}