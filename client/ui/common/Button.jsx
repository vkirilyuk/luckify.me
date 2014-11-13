/** @jsx React.DOM */

var React = require('react');

var Button = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <button onClick={this.props.onClick} className={'button radius tiny ' + (this.props.className || '')}>
        {this.props.label}
      </button>
    );
  }
});

module.exports = Button;