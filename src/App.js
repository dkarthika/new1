import React, { Component } from 'react';
import './App.css';
import animate from './css/animate.css';
import style from './css/style.css';


class App extends Component {
  // constructor() {
  //   // In a constructor, call `super` first if the class extends another class
  //   super();
  //
  //   // Initialize state in the constructor; this is the only place you
  //   // can set the state directly without using this.setState
  //   this.state = { text: '' };
  //   this.updateText=this.updateText.bind(this);
  //
  // }
  // updateText(ev)
  // {
  //   const value=ev.currentTarget.value;
  // //  console.log("hey, updated",value);
  //   this.setState({text:value});
  // }
  //
  // handleChange(ev)
  // {
  //   this.setState({
  //     value:ev.target.value,
  //   });
  // }


  render() {
    return (

      <div className="container">
  		<div className="top">
  			<h1 id="title" className><span id="logo">ADMIN <span>UI</span></span></h1>
  		</div>
  		<div className="login-box animated fadeInUp">

  			<div className="box-header">

          <ul >
              <li >Login</li>
              <li>Signup</li>
          </ul>
  			</div>

  			<label forName="username">Username</label>
  			<br/>
  			<input type="text" id="username"/>
  			<br/>
  			<label forName="password">Password</label>
  			<br/>
  			<input type="password" id="password"/>
  			<br/>
  			<button type="submit">Sign In</button>
  			<br/>
  			<a href="#"><p className="small">Forgot your password?</p></a>
  		</div>
  	</div>

    );
  }
}

export default App;
/*<h2>Log In</h2>*/
