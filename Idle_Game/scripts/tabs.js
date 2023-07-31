function open_tab(tab) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tabheads = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tabheads[i].classList.remove("tablinks2");
        tabcontent[i].style.display = "none";
    }
    tabheads[tab].classList.add("tablinks2");
    tabcontent[tab].style.display = "block";
}
function sOpen_tab(tab) {
    let stabcontent = document.getElementsByClassName("sTabcontent_4");
    let stabheads = document.getElementsByClassName("stablinks");
    for (i = 0; i < stabcontent.length; i++) {
        stabheads[i].classList.remove("stablinks2");
        stabcontent[i].style.display = "none";
    }
    stabheads[tab].classList.add("stablinks2");
    stabcontent[tab].style.display = "block";

}