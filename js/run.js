// Also called: challenge.js
// In honour of Josh Goldfish

function openLink(url) {
  window.open(url, "_self", "");
}

// number of drops created.
var nbDrop = 858;

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function rain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,1600);
	var dropTop = randRange(-1000,1400);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}

function toml() {

  $('.rain').append('<img src="images/cat.gif" style="position:absolute;">');

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
    c = ['soup', 'tom'];

    switch(command) {
      case c[0]: rain();  break;
      case c[1]: toml(); break;
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
