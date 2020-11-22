import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function BasicButton(props,children){
    console.log('signup');
    var text = props.value;
    return(
    
            <button onClick={props.onClick}> 
            {text}        
            </button>
    
    );

}

export default BasicButton;


