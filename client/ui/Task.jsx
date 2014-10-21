/** @jsx React.DOM */

var React = require('React');

var Button = require('./common/Button.jsx');

var Card = require('./common/Card.jsx');

var Task = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired,
    onUpdate: React.PropTypes.func
  },

  _delete: function() {
    $.post('/task/destroy/' + this.props.task.id, {}, function(result) {
      this.props.onUpdate && this.props.onUpdate(result.id);
      console.log('on Update', this.props.onUpdate);
    }.bind(this));
  },

  _complete: function() {
    console.log('Attempt to mark task', this.props.task.id, 'as completed');
  },

  render: function() {
    var task = this.props.task;
    return (
      <fieldset>
        <legend>{task.name}</legend>
        <div className="task-description">
          {task.description}
        </div>
        <div className="task-actions">
          <Button onClick={this._delete} label="Delete" />
          <Button onClick={this._complete} label="Complete" />
        </div>
      </fieldset>
    );
  }
});

module.exports = Task;