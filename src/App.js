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
    let returnComponent;
    const login = <Login users = {this.state.users}
    logInUser={() => this.logInUser(true)} />;
    const game = <Game logOutUser={() => this.logInUser(false)} />;
    if(!this.state.loggedIn) {
      returnComponent = login;
    } else {
      returnComponent = game;
    }
   return returnComponent;
  }
}

export default App;
