/** @jsx React.DOM */

var React = require('React');

var LeftRight = React.createClass({

  render: function() {
    return (
      <div className="left-right clearfix">
        <div className="lfloat">
          {this.props.children[0]}
        </div>
        <div className="rfloat">
          {this.props.children[1]}
        </div>
      </div>
    );
  }
});

module.exports = LeftRight;