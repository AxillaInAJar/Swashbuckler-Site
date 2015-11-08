// Also called: challenge.js
// In honour of Josh Goldfish

function openLink(url) {
  window.open(url, "_self", "");
}

function socialMedia() {
  facebook = '<img src="images/FB-logo.png" style="width:100%;" id="fb"/>';
  youtube = '<img src="images/YT-logo.png" style="width:100%;" id="yt" />';
  twitter = '<img src="images/TW-logo.png" style="width:100%;" id="tw" />';
  document.getElementById('social').innerHTML = facebook + "<br/><br/> " + youtube + "<br/><br/> " + twitter;
  document.getElementById('fb').style.display = "block"; document.getElementById('fb').style.visibility = "visible";
  document.getElementById('yt').style.display = "block"; document.getElementById('yt').style.visibility = "visible";
  document.getElementById('tw').style.display = "block"; document.getElementById('tw').style.visibility = "visible";
}

window.onload = function() {
  socialMedia();
}
