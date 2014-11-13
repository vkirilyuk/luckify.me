/** @jsx React.DOM */

var React = require('react');

var LeftRight = require('./LeftRight.jsx');

var Button = require('./Button.jsx');

var Card = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    canToggle: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      toggled: true
    };
  },

  _toggle: function() {
    this.setState({
      toggled: !this.state.toggled
    });
  },

  render: function() {
    var toggleButton = null;
    if (this.props.canToggle) {
      toggleButton = <Button onClick={this._toggle} label="Toggle" />;
    }

    return (
      <div className="card">
        <CardHeader label={this.props.label}>
          {toggleButton}
        </CardHeader>
        <div className={this.state.toggled || 'hidden'}>
          {this.props.children}
        </div>
      </div>
    );
  }
});


var CardHeader = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="card-header">
        <LeftRight>
          <div>{this.props.label}</div>
          <div>{this.props.children}</div>
        </LeftRight>
      </div>
    );
  }
});

var CardSection = React.createClass({
  render: function() {
    return (
      <div className="card-section">
        {this.props.children}
      </div>
    );
  }
});

Card.Section = CardSection;

module.exports = Card;