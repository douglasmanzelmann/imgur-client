var React = require('react');
var TopicList = require('./topic-list');
var Header = require('./header');

module.exports = React.createClass({
  render: function() {
    return <div>
      <Header />
      {this.content()}
    </div>
  },
  content: function() {
    if (this.props.children) {
      return this.props.children;
    } else {
      return <TopicList />
    }
  }
});
