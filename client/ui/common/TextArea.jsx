/** @jsx React.DOM */

var React = require('React');

var TextArea = React.createClass({

  getValue: function() {
    return this.getDOMNode().value;
  },

  clear: function() {
    this.getDOMNode().value = '';
  },

  render: function() {
    return (
      <textarea className={this.props.className} />
    );
  }
});

module.exports = TextArea;