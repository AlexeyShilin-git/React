import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../components/Message'

console.log('Hello React!!!')

class HelloMessage extends React.Component {
  constructor () {
    super();

    this.state = {
      count: 0,
      messages: [], 
    };

    this.onClick=this.onClick.bind(this)
    this.addMessage=this.addMessage.bind(this)

  }

  onClick() {
    const{count} = this.state;
    this.setState({count: count + 1 });
  }

  addMessage() {
    const{messages, count} = this.state;
    this.setState ({messages: [...messages, `новое сообщение ${count}`]})
  }

  render() {
    const{count, messages} = this.state;

    return (
      <div> 
        <h2>Привет, {this.props.name}</h2>
        <p>{count}</p>
        <button onClick={this.onClick}>увеличение</button>
        <button onClick={this.addMessage }>Добавить сообщение</button>
          <ul>
          {messages.map((item, index) => (
            <Message key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage name="Алекс"/>,
  document.getElementById('root'));