// Also called: challenge.js
// In honour of Josh Goldfish

function openLink(url) {
  window.open(url, "_self", "");
}

function socialMedia() {
  facebook = '<a href="https://www.facebook.com/SwashbucklerRecords"><img src="images/FB-logo.png" id="fb"/></a>';
  youtube = '<a href="https://www.youtube.com/user/SwashbucklerRecords"><img src="images/YT-logo.png" id="yt" /></a>';
  twitter = '<a href="https://twitter.com/swashrecords"><img src="images/TW-logo.png" id="tw" /></a>';
  document.getElementById('social').innerHTML = facebook + "<br/><br/> " + youtube + "<br/><br/> " + twitter;
  // Github doesn't show logos besides the YouTube one for some reason. Ignore it.
}

window.onload = function() {
  socialMedia();
}
