import React from 'react';
import ReactDOM from 'react-dom';

console.log('Hello React!!!')

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Привет, {this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Алёщга" />,
    document.getElementById('hello-example')
  );