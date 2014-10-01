/** @jsx React.DOM */

var React = require('React');

var Task = require('./Task.jsx');

var Footer = React.createClass({

  getInitialState: function() {
    return {
    };
  },

  componentWillMount: function() {
    this._loadData();
  },

  _loadData: function() {
    console.log('Loading data...');

    $.get('/task', function(result) {
      this.setState({tasks: result});
    }.bind(this))
  },

  render: function() {
    var list = this.state.tasks && this.state.tasks.map(function(task) {
      return <Task task={task} key={task.id} onUpdate={this._loadData} />;
    }.bind(this));

    return (
      <div className="tasks">
        {list}
      </div>
    );
  }
});

module.exports = Footer;