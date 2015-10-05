var React = require('react');

var Component = React.createClass({

	propTypes: {
		name: React.PropTypes.string,
		onClick: React.PropTypes.func
	},

	render: function() {
		return (
			<div>
				<a href="#" onClick={ this.props.onClick}>{ this.props.name }</a>
			</div>
			);

	}

});

module.exports = Component;