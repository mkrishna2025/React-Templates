import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  onLogin(){
    alert('onLogin');
  }
  onSignUp(){
    alert('onSignUp');
  }
  render(){
    var formInfo = {
      title: 'Welcome to Login',
      config: [ 
        { name: 'username', display: 'User Name', type: 'string'},
        { name: 'password', display: 'Password', type: 'string'},
        { name: 'city', display: 'City', type: 'string'}
      ],
      buttons: [
        { name: 'login', display: 'Login', action: 'onSignUp'}
      ]
    };

    return (
      <div> 
        {formInfo.title }
        <br/>
        <br/>
        {formInfo.config.map(field => {
          if(field.type == 'string'){
            return <div> {field.display} <input type='text' name={field.name} id={field.name}/></div>
          }
        })}
        {
          formInfo.buttons.map(button => {
            return <input type='button' value={button.display} onClick={this[button.action]}/>
          })
        }
      </div>

    );
  }
}

class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

export default App;
