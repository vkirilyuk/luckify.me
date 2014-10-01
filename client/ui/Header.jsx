/** @jsx React.DOM */

var React = require('React');

var Header = React.createClass({

  render: function() {
    return (
      <div className="header">
        <h1>Welcome</h1>
      </div>
    );
  }
});

module.exports = Header;