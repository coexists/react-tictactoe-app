import React from 'react';
import './App.css';
import Game from "./components/TicTacToe/index.js"

class Login extends React.Component {
  clickHandler() {
    console.log("UsEr Is LoGgInG iN!");
    console.log(this);
    for(const user of this.props.users) {
    if(this.refs.username.value === user.username && 
      this.refs.password.value === user.password)
      this.props.logInUser();
  } 
}

  render() {
    return <div>
    <input ref="username" type = "text" />
    <input ref="password" type="text" />
    <input type = "button" value = "Login!" onClick={() => this.clickHandler()} />
    </div>;
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {loggedIn:false,
    users:[{username:"test",password:"test"}]
    }
  }
  logInUser(loggedInStatus) {
    this.setState({loggedIn:loggedInStatus});
  }
  render() {
    return (
      (this.state.register) ?
      <Register />
      :
        (!this.state.loggedIn) ?
        <Login users={this.state.users}
        logInUser={() => this.logInUser(true)} 
        />
        :
        <Game logInUser={() => this.logInUser(false)} />
    )    
  }
}

export default App;

