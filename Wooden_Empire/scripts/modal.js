window.onload = function() {

  // Get the alert elements
  alert_div = document.getElementById("alert_div");
  alert_content = document.getElementById("alert_content");
  alert_content_text = document.getElementById("alert_content_text");
}

//When the function is called, check if the alert is already displayed. If not, display it with the required content.
function alert_box(content) {
  if (alert_visible == 0  && setting_save.alerts_enabled == 1) {
    console.log(alert_visible);
    alert_visible = 1;
    alert_content_text.innerHTML = "|" + content + "|";
    alert_content.style.animationName = "animatetop";
    alert_div.style.display = "block";
    hidd = setTimeout(hide_alert_1, 2000);
  }
}

// Begin the animation for hiding the alert two seconds after it first appears
function hide_alert_1() {
  alert_content.style.animationName = "animatebottom";
  hide_alert = setTimeout(hide_alert_2, 500);
  console.log(alert_content);
}

//Hide the alert fully and set the variable to not visible
function hide_alert_2() {
  alert_div.style.display = "none";
  alert_visible = 0;
}