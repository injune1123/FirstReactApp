var React = require('react'); // import react

// create a react component
var Main = React.createClass({
	// render specifies what the UI looks like for this element
	render: function(){
		return (
			<div className="Main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
						MENU
					</div>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
			)
	} 

});

//render the <Main/> to the DOM

module.exports = Main;
