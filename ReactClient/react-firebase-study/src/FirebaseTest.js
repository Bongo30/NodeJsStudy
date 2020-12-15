import React from 'react';
import fire from './config/fire-config';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from './components/Table'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Redirect,
    // Link
  } from "react-router-dom";




class FirBtn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            user : [],
            IsTable : false,
            table : <div></div>
        };
        this.handleClick = this.handleClick.bind(this);
        // const table ='';
        // const user ='';
      //  const user ='';
    }
    
    handleClick(){
        this.setState({IsTable:true});
        fire.firestore()
        .collection('Users')
        .onSnapshot(snap=>{
            const cons = snap.docs.map
            (
                doc=>(
                {
                    id : doc.id,
                    ...doc.data() 
                }
                )
            )
         console.log('state : '+this.state.IsTable);
        if(cons) {
          //  console.log(cons[0]);
            
            //this.setState({user : this.state.user.push(cons[0])});            
            this.setState({table :<Table user ={cons[0]} />    
            });  
     
        }        
        })
    }
    render(){  
            
        return(
            <div>
                <Button variant="contained" onClick={this.handleClick}>Default</Button>
                <br/>
                {this.state.table} 
                {/* <Router>
                    <Switch>
                        <Table path="/components/Table" Component="Table"/>                
                    </Switch>
                </Router> */}
            </div>
        );
    }
    
    
}
export default FirBtn;