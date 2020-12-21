import React from 'react';
import fire from './config/fire-config';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from './components/Table';
import InputFeild from './components/InputFeild';
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
            // IsTable : false,
            table : <div></div>,
            Id : '0',
            name :'sbg',
            phone : '1234',
            email :'sbg@mail'
        };
        this.handleClick = this.handleClick.bind(this);
        this.InsHandleClick = this.InsHandleClick.bind(this);
        // const table ='';
        // const user ='';
      //  const user ='';
    }
    InsHandleClick(){
        
        this.setState({...this.state,
        //ㄱㅣ존배열에서 추가하렴 어떻게 해야하죠 ? ..
        user: {id : 'xxx',
                Name : this.state.name,
                phone : this.state.phone,
                ID : this.state.id,                    
                email : this.state.email
        }
        }) 
        console.log('User : ')
        console.log(this.state.user)

    }
    handleClick(){
        //this.setState({IsTable:true});
        
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
        
        if(cons) {
            this.setState({...this.state,user : cons});           
            this.setState({...this.state,table :<Table user ={this.state.user} /> 
                
            });  
            

        }        
        })
    }
    render(){  
            
        return(
            <div>
                <Button variant="contained" onClick={this.handleClick}>Show Table</Button>
                <br/>
                <InputFeild value ={this.state}
                            onClick={()=>this.InsHandleClick()}
                />
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