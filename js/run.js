// Also called: challenge.js
// In honour of Josh Goldfish

function openLink(url) {
  window.open(url, "_self", "");
}

function socialMedia() {
  facebook = '<img src="images/FB-logo.png" style="width:100%; display:block;"/>';
  youtube = '<img src="images/YT-logo.png" style="width:100%; display:block;"/>';
  twitter = '<img src="images/TW-logo.png" style="width:100%; display:block;"/>';
  document.getElementById('social').innerHTML = facebook + "<br/><br/> " + youtube + "<br/><br/> " + twitter;
}

window.onload = function() {
  socialMedia();
}
