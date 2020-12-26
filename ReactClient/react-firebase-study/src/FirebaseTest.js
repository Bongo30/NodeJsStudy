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
  

// const user = {
//     id :'x',
//     ID : '1',
//     Name : 'Name',
//     Phone : 'Phone',
//     email : 'email'

// }

class FirBtn extends React.Component{
    constructor(props){
        super(props);
        this.state ={            
            // IsTable : false,
            users:[],
            table : <div></div>,
            Id : '',
            name :'',
            phone : '',
            email :''
        };
        this.handleClick = this.handleClick.bind(this);
        this.InsHandleClick = this.InsHandleClick.bind(this);
        //this.NameHandleChange = this.NameHandleChange.bind(this);
        // const table ='';
        // const user ='';
      //  const user ='';
    }
    InsHandleClick(){
        
        let user = [...this.state.users];

        user ={
            id : this.state.id,
            Name : this.state.name,
            Phone : this.state.phone,
            ID : this.state.ID+1,                    
            email : this.state.email    
                };
                
        // Set state
        this.setState({
            users: this.state.users.push(user),
        });  
        console.log('Insert :')
        console.log(this.state.users)
        this.setState({...this.state,table :<Table user ={this.state.users} /> });  
        

    }
    // onChangeHandler(type){
        
    //     switch(type) {
    //         case 'name':
    //             return NameHandleChange=(e)=>{        
    //             this.setState({...this.state,name : e.target.value})    
    //         };
    //         case 'phone':
    //             return PhoneHandleChange=(e)=>{        
    //             this.setState({...this.state,phone : e.target.value})    
    //         };
    //         case 'email':
    //             return EmailHandleChange=(e)=>{        
    //             this.setState({...this.state,email : e.target.value})    
    //         };            
    //         default:
    //             return '';
    //     }        
    // }
    HandleChange=(e)=>{        
        console.log(e.target.id )
        let type = e.target.id 
        switch(type){
            case 'name':
                return this.setState({...this.state,name : e.target.value})
            case 'phone' :
                return this.setState({...this.state,phone : e.target.value})
            case 'email' :
                return this.setState({...this.state,email : e.target.value})
            default :
                return '';
        }

    };

    handleClick(){
        //this.setState({IsTable:true});
        let user = [...this.state.users];

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
            user = cons;
            console.log('cons : ')
            console.log(user)
            // this.setState({
            //     users: this.state.users.push({ user}),
            // });  
            
            this.setState({...this.state,users : cons});           
            this.setState({...this.state,table :<Table user ={this.state.users} /> });  
            

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
                            onChange={(e)=>this.HandleChange(e)                            
                            }
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