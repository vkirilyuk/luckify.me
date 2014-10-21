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
      <fieldset>
        <legend>Create new task</legend>
        <div class="row">
          <div class="small-12 columns">
            <label>Pick a name
              <TextInput ref="name"/>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="large-12 columns">
            <label>Why do you want to do it?
              <TextArea ref="desc" />
            </label>
          </div>
        </div>

          <Button label="Create new" onClick={this._onClick} />
      </fieldset>
    );
  }
});

module.exports = CreateTask;
