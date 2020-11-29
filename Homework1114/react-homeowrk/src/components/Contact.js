import React ,{Component} from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
import JsonData from './userinfo';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

//const bodyParser = require("body-parser");  
//app.use(bodyParser.json()); 

export default class Contact extends Component {    
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        const { cookies } = props;
        super(props);
            this.state = {
                selectedKey : - 1,
                keyword : '',                
                contactData: JsonData.user,
                name:''
            };

 
            this.handleChange = this.handleChange.bind(this); 
    }

    handleNameChange(name) {
        const { cookies } = this.props;
    
        cookies.set('name', name, { path: '/' });
        this.setState({ name });
    }

    handleChange(e){
        this.setState({
            keyword: e.target.value 
        });
    }

    handleClick(key){
        this.setState(
            {
                selectedKey : key
            }
        );
        console.log(key,'key valeu ');
    }

    render(){
        const { name } = this.state;

        const mapToComponents = (data) =>{ 
            data.sort();
            data = data.filter(
                (contact)=>{
                return contact.name.toLowerCase()
                .indexOf(this.state.keyword)> -1;
                }
            );
            return data.map((contact,i) => {
                return (<ContactInfo 
                            contact={contact} 
                            key={i}
                            onClick={()=>this.handleClick(i)}
                            />);
            });
        };
        return (
            <div>
                <h1>Login</h1>
                {/* //<label> ID : </label> */}
                <input 
                    name ="Id"
                    placeholder ="ID"
                    value = {this.state.value}
                    onChange = {this.handleChange}
                />
                <br/>
                
                {/* //<label> PW : </label> */}
                <input 
                    name ="Pwd"
                    type = "password"
                    placeholder ="Password"
                    value = {this.state.value}
                    //onChange = {this.handleChange}
                />
                <br/>
                <button name="LoginOK" value ="OK" > OK</button>
                <button name="SignUp" > SignUp</button>

                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetail 
                        isSelected={this.state.selectedKey !=-1}
                        contact={this.state.contactData[this.state.selectedKey]}
                        /> 
                <h1>Cookie</h1>                        
                    <div>
                        <div name={name} onChange={this.handleNameChange.bind(this)} />
                            {this.state.name && <h1>Hello {this.state.name}!</h1>}
                    </div>
                
            </div>
        );
    }
    
}