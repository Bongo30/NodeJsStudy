import React from 'react';
import fire from './config/fire-config';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from './components/Table'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

var table='';

class FirBtn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            IsTable : false,
        };
        this.handleClick = this.handleClick.bind(this);
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
        // console.log(cons[0]);
        if(cons) {
            var user = cons[0];
            // console.log(user);
            table =<Table user ={user}/>
        }        
        })
    }
    render(){  
        
        return(
            <div>
                <Button variant="contained" onClick={this.handleClick}>Default</Button>
                <br/>
                {table}
            </div>
        );
    }
    
    
}
export default FirBtn;