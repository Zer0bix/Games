window.onload = function() {

  // Get the alert elements
  alert_div = document.getElementById("alert_div");
  alert_content = document.getElementById("alert_content");
  alert_content_text = document.getElementById("alert_content_text");
}

// When the user clicks on the button, open the alert
function alert_box(content) {
  if (alert_visible == 0) {
    console.log(alert_visible);
    alert_visible = 1;
    alert_content_text.innerHTML = "|" + content + "|";
    alert_content.style.animationName = "animatetop";
    alert_div.style.display = "block";
    hidd = setTimeout(hide_alert_1, 2000);
  }
}

// When the user clicks on <span> (x), close the alert
function hide_alert_1() {
  alert_content.style.animationName = "animatebottom";
  hide_alert = setTimeout(hide_alert_2, 500);
}

function hide_alert_2() {
  alert_div.style.display = "none";
  alert_visible = 0;
}