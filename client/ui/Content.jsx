/** @jsx React.DOM */

var React = require('react');

var Tasks = require('./Tasks.jsx');
var RandomTask = require('./RandomTask.jsx');
var CreateTask = require('./CreateTask.jsx');

var Content = React.createClass({

  _onTaskCreated: function() {
    this.refs.tasks._loadData();
  },

  render: function() {
    return (
      <div className="content">
        <RandomTask />
        <CreateTask onTaskCreated={this._onTaskCreated} />
      </div>
    );
  }
});

module.exports = Content;

// <Tasks ref="tasks" />