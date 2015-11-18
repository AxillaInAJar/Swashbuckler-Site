// Also called: challenge.js
// In honour of Josh Goldfish

function openLink(url) {
  window.open(url, "_self", "");
}

terminal = new Object();
terminal = {
  hide: function() {
    document.getElementById("termin").style.display = "none";
  },

  show: function() {
    document.getElementById("termin").style.display = "block";
  },

  getin: function() {
    var command = document.getElementById("termin").value;
    c = ['soup'];

    switch(command) {
      case c[0]: alert("Duuuuuuuude.");  break;
      default: alert("Command is non-existent. List: " + c + "."); break;
    }

  }
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
  terminal.hide();
}
