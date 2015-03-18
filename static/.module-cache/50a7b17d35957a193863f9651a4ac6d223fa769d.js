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

};


}).call(window);