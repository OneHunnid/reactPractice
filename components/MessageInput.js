import React from 'react'
import moment from 'moment'

// This component is where the user can enter their messages
// in the textarea and submit it. This message will be
// passed back up to the parent component (i.e. ChatContainer)
// in an object with the message and timestamp.
class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
   this.setState({value: event.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let message = this.state.value
    let time = moment().valueOf()
    let dataObj = {
      message: message,
      timestamp: time
    }

    this.props.onSubmit(dataObj)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea type="text" value={this.state.value} onChange={this.handleChange} placeholder="What's on your mind?" />
        <button onClick={this.handleClick}>Send</button>
      </form>
    )
  }
}

export default MessageInput
