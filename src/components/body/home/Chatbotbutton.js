import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        message: 'Hello !',
        end: true,
      },
    ];

    return (
       <Link to ='/chatbott'>
      <ChatBot  
      style={{Color:'#008080'}}
        steps={steps}
        floating={true}
        opened={opened}
      />
      </Link> 
    )
  }
}
export default  Chatbot;