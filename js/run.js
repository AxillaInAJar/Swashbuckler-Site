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
  // Github doesn't show logos besides the YouTube one for some reason. Ignore it.
}

window.onload = function() {
  socialMedia();
}
