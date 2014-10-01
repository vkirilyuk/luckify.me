/** @jsx React.DOM */

var React = require('React');

var Tasks = require('./Tasks.jsx');
var CreateTask = require('./CreateTask.jsx');

var Content = React.createClass({

  _onTaskCreated: function() {
    this.refs.tasks._loadData();
  },

  render: function() {
    return (
      <div className="content">
        <Tasks ref="tasks" />
        <CreateTask onTaskCreated={this._onTaskCreated} />
      </div>
    );
  }
});

module.exports = Content;