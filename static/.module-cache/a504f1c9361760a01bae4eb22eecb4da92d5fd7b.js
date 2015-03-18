// https://github.com/eliath/display
// 2015 Elias Martinez Cohen

(function() {

/////////////////
// HELPERS
function on(el, type, handler, capture) {
  el.addEventListener(type, handler, capture || false);
}

function off(el, type, handler, capture) {
  el.removeEventListener(type, handler, capture || false);
}

/////////////////
// PANE CLASS
var Pane = React.createClass({displayName: "Pane", });

// this should be the top portion of the pane
// it contains controls etc.
Pane.Bar = React.createClass({displayName: "Bar",  });
// Pane.Bar.


/////////////////
// SUB-PANE CLASSES
var ImagePane = React.createClass({displayName: "ImagePane",  });	
var PlotPane = React.createClass({displayName: "PlotPane",  });



///////////////////
// DISPLAY "SERVER"
var _commands = {
	image: function(cmd) {
		//TODO: when the server sends an image command...
		//make a pane! or grab the one u already got.
	},

	plot: function(cmd) {
		//TODO: same as image
	}
};

function connect() {
	var eventSource = new EventSource('events');

	on(eventSource, 'open', function(event) {
		//TODO: update status element
	});

	on(eventSource, 'error', function(event) {
		if (eventSource.readyState == eventSource.CLOSED) {
			//TODO: update status element
    	}
	});

	on(eventSource, 'message', function(event) {
		
	});
}


}).call(window);