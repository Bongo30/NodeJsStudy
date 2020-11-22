import React , {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextFeild from './TextFeild'
import BasicButton from './Button'
import SignUpBtn from './SignUpBtn'
import UserInfoBtn from './UserInfoBtn';
import DefaultLogin from './DefaultLogin';

// const express = require("express");  
// const bodyParser = require("body-parser");  
 const fs = require("fs");
 const cookieParser = require('cookie-parser');
// const app = express(); 

var LoginId ='';
var LoginPwd ='';

class FixedContainer extends Component{
  constructor(props) {
    super(props);
        this.state ={
        IsCookie : false,
        SignUp : false,
        };
    this.handleLCookiClick =this.handleLCookiClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
}

handleSignUpClick() {
    this.setState({SignUp: true});
    
    console.log('cookie : ',this.state.IsCookie);
    console.log('SingUp : ',this.state.SignUp);
} 

handleLCookiClick() {
    this.setState({IsCookie: true});
    console.log('cookie : ',this.state.IsCookie);
    console.log('SingUp : ',this.state.SignUp);
    console.log('ID : ',LoginId);
    console.log('Password : ',LoginPwd);
}
  render(){
    const isCookie = this.state.IsCookie;
    const isSignUp = this.state.SignUp;
    
    console.log('cookie : ',isCookie);
    console.log('SingUp : ',isSignUp);

    let compoUI = <DefaultLogin/>;
    
    if (isSignUp) {
        compoUI = <SignUpBtn onClick={this.handleSignUpClick}    />;
    }
    else if(isCookie){
        compoUI = <UserInfoBtn onClick={this.handleLCookiClick}   />;
    }
    else{
        compoUI = <div>
                    {/* <input type = "test" label ="id"/> <br/>
                    <input type = "password" label ="password"/><br/> */}
                    <input type = "test" label ="id" />{LoginId} <br/>
                    <input type = "password" label ="password" value={LoginPwd}/><br/>
                    <SignUpBtn onClick={this.handleSignUpClick}    />
                    <UserInfoBtn onClick={this.handleLCookiClick}   /></div>;
    
    }
    return (

          <div>
          {compoUI}        
    
          </div>  
      
      
      
    );

  }
}
export default FixedContainer;
