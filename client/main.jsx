/** @jsx React.DOM */

var React = require('React');

var Main = React.createClass({
	render: function() {
		return <h1>Hello, world! %32523% React works!</h1>;
	}
});

React.renderComponent(
  <Main />,
  document.getElementById('main')
);

