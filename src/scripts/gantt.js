gantt = 0;

function swap_gantt() {
    let big_gantt = document.getElementById("big_gantt")
    let good_gantt = document.getElementById("good_gantt")
    if (gantt == 1) {
        gantt = 0;
        big_gantt.style.display = "none";
        good_gantt.style.display = "block";
    }
    else if (gantt == 0) {
        gantt = 1;
        good_gantt.style.display = "none";
        big_gantt.style.display = "block";
    }
}