import React from 'react'

// This component should take the message it receives from props
// and display them in a list. Props is an object.
class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('Message LIST ', this.props.messages)
    return (
      <div></div>
    )
  }
}

export default MessageList
