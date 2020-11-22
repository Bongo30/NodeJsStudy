import React, {Component} from 'react';
import TextFeild from './TextFeild'
import BasicButton from './Button'


function SignUpBtn(props){
      console.log('signup');
      return(
      
            <BasicButton 
            value ="Sign Up"
            onClick={props.onClick} > 
            Create Account</BasicButton>
      
      );

}

export default SignUpBtn;

