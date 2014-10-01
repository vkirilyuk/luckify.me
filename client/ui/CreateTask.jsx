/** @jsx React.DOM */

var React = require('React');
var Button = require('./common/Button.jsx');

var Card = require('./common/Card.jsx');

var TextInput = require('./common/TextInput.jsx');
var TextArea = require('./common/TextArea.jsx');

var CreateTask = React.createClass({
  propTypes: {
    onTaskCreated: React.PropTypes.func
  },

  _onClick: function() {
    console.log('yay');

    console.log(this.refs.name.getValue());
    console.log(this.refs.desc.getValue());

    $.post('/task/create', {
      name: this.refs.name.getValue(),
      description: this.refs.desc.getValue()
    }, function() {
      this.props.onTaskCreated && this.props.onTaskCreated();
      this.refs.name.clear();
      this.refs.desc.clear();
    }.bind(this));
  },

  render: function() {
    return (
      <Card label='Create new task'>
        <Card.Section>
          <div>
            Title: <TextInput ref="name" />
          </div>
          <div className="pvm">
            Description: <TextArea ref="desc" />
          </div>
          <Button label="Create new" onClick={this._onClick} />
        </Card.Section>
      </Card>
    );
  }
});

module.exports = CreateTask;
