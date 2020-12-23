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
  

const user = {
    id :'x',
    ID : '1',
    Name : 'Name',
    Phone : 'Phone',
    email : 'email'

}

class FirBtn extends React.Component{
    constructor(props){
        super(props);
        this.state ={            
            // IsTable : false,
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
        
        // let floors = [...this.state.floors];

        // // Add item to it
        // floors.push({ value: floorName });

        // // Set state
        // this.setState({ floors });

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
        this.setState({...this.state,table :<Table user ={this.state.user} /> });  
        

    }
    NameHandleChange=(e)=>{        
        this.setState({...this.state,name : e.target.value})
    
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
            this.setState({...this.state,table :<Table user ={this.state.user} /> });  
            

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
                            onChange={(e)=>this.NameHandleChange(e)}
                            
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