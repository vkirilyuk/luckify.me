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
      <Card label={task.name} canToggle={true}>
        <Card.Section>
          <div className="task-description">
            {task.description}
          </div>
          <div className="task-actions">
            <Button className="header-button" onClick={this._delete} label="Delete" />
            <Button onClick={this._complete} label="Complete" />
          </div>
        </Card.Section>
      </Card>
    );
  }
});

module.exports = Task;