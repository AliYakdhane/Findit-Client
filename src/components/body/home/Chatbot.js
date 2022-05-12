import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


class Chatbot extends Component {
  state = {
    opened: false
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened }); 
  }

  render() {
    const { opened } = this.state;
    const steps = [
      {
        id: 'hello-world',
        message: 'Hello World!',
        end: true,
      },
    ];

    return (
      <ChatBot  
      style={{Color:'#008080'}}
        steps={steps}
        floating={true}
        opened={opened}
        toggleFloating={this.toggleFloating}
      />
    )
  }
}
export default  Chatbot;