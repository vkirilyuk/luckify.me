/** @jsx React.DOM */

var React = require('React');

var TextInput = React.createClass({

  getValue: function() {
    return this.getDOMNode().value;
  },

  clear: function() {
    this.getDOMNode().value = '';
  },

  render: function() {
    return (
      <input type="text" className={this.props.className} />
    );
  }
});

module.exports = TextInput;