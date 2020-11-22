import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function UserGreeting(props){
  return <h1>Welcome back!</h1>;
}

function GusetGreeting(props){
  return <h1>Please sign up</h1>;
}

function LoginButton(props){
  return(
    <button onClick={props.onClick}>
    Login
    </button>
  );
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
    Logout
    </button>
  );
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GusetGreeting />;
}
class LoginControl extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state= {isLoggedIn:false};
  }

  handleLoginClick(){
    this.setState ({isLoggedIn:true});
  }
  
  handleLogoutClick(){
    this.setState ({isLoggedIn:false});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(!isLoggedIn){
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }
    else{
      
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    }

    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <LoginControl />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
