/** @jsx React.DOM */

var React = require('react');

var Button = require('./common/Button.jsx');
var Task = require('./Task.jsx');

var RandomTask = React.createClass({
  getInitialState: function() {
    return {};
  },

  _randomTask: function() {
    $.get('/task', function(result) {
      var i = Math.floor(Math.random() * result.length);
      this.setState({task: result[i]});
    }.bind(this))
  },

  render: function() {
    var task = this.state.task && <Task task={this.state.task} />;

    return (
      <fieldset>
        <legend>I am procrastinating...</legend>
        <Button label="What to do" onClick={this._randomTask} />
        {task}
      </fieldset>
    );
  }
});

module.exports = RandomTask;
