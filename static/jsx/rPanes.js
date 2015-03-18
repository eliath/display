// https://github.com/eliath/display
// 2015 Elias Martinez Cohen

(function() {
var document = this.document,
    window = this;

/////////////////
// HELPERS
function on(el, type, handler, capture) {
  el.addEventListener(type, handler, capture || false);
}

function off(el, type, handler, capture) {
  el.removeEventListener(type, handler, capture || false);
}

/////////////////
// PANE MANAGEMENT
var _panes = {};


/////////////////
// PANE CLASS & COMPONENTS


// The bar on the top of the pane that you can drag
PaneBar = React.createClass({
	propTypes: {
        title:      React.PropTypes.string,
        handleDrag:   React.PropTypes.func,
        closePane:   React.PropTypes.func
    }

	handleDrag: function(event) {
		if (typeof this.props.handleDrag === 'function')
			return this.props.handleDrag(event);
	},

	closePane: function() {
		if (typeof this.props.closePane === 'function') 
			return this.props.closePane();
	},

	render: function() {
		//do what u gotta do
		return (
			<div className="pane-bar" onDrag={this.handleDrag} onDoubleClick={this.maximize}>
				<ul className='controls'>
					<li onClick={this.closePane}>X</li>
					<li>—</li>
				</ul>
				<p className="title">{this.props.title}</p>
			</div>
		);
	}
});


var Pane = React.createClass({
	getInitialState: function () {
	    return {
	        focused: true,
	        maximized: false,
	    };
	},

	getDefaultProps: function () {
	    return {
	        x: 0,
	        y: 0,
	        width: 500,
	        height: 500
	    };
	},

	render: function() {

	}

});


/////////////////
// SUB-PANE CLASSES
var ImagePane = React.createClass({  });	
var PlotPane = React.createClass({  });



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
		var cmd = JSON.parse(event.data);
		var command = _commands[cmd.command];
		if (command) command(cmd);
	});

	return eventSource;
}

function load() {
	var eventSource = connect();
	//TODO: render status element and make sure on click
	// it disconnects from eventSource.

	off(document, 'DOMContentLoaded', load);
}

on(document, 'DOMContentLoaded', load);

}).call(window);