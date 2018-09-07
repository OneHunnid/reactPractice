import React from 'react'
import MessageList from '../components/MessageList.js'
import MessageInput from '../components/MessageInput.js'

class ChatContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: {}
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(data) {
    // data is ab object that contains message and timestamp
    // of user submitted message in MessageInput. Here is where the
    // state should be updated by adding new messages to state and not
    // erare previous state/messages. Could I use the ... spread operator?
    this.setState({
      messages: { data }
    })
  }
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <MessageInput onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default ChatContainer
