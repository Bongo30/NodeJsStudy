import React from 'react';
import axios from 'axios';

class Login extends React.Component {   
    state = {
        msg: 'aa'    
    }    
    


    render(){

        const componentDidMount=()=> {
            axios.get('/api').then((res) => {
                const msg = res.data;
                this.setState({ msg });
            })
        }
        return(
            <div>
            <h1> TEST react-node</h1>
            <input type="text" value="What is My name?"/>
            <button onClick={componentDidMount}>SEND</button>
            <div>   
                { this.state.msg}                
            </div>
            </div>
            
        )
    }
    

}
export default Login

