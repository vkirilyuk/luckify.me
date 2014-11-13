/** @jsx React.DOM */

var React = require('react');

var Header = require('./ui/Header.jsx');
var Content = require('./ui/Content.jsx');
var Footer = require('./ui/Footer.jsx');

var Main = React.createClass({
	render: function() {
		return (
			<div className="wrapper">
        <Header />
        <Content />
        <Footer />
			</div>
		);
	}
});

React.renderComponent(
  <Main />,
  document.getElementById('main')
);
