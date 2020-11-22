import React, {Component} from 'react';
import TextFeild from './TextFeild'
import BasicButton from './Button'


function UserInfoBtn(props) {
  console.log('aaa');
    return (
  <div>
        <BasicButton 
        value ="Login"
        onClick={props.onClick}> 
        </BasicButton>  
  </div>
    );
  }

export default UserInfoBtn ;

