import React, {Component} from 'react';

import LogContainer from './ui-items/Container'
import Navigation from './Navigation'
import SignUp from './ui-items/SignUpBtn'
import UserInfo from './ui-items/UserInfoBtn';

class Main extends Component{
    constructor(props) {
        super(props);
            this.state ={
            IsCookie : false,
            SignUp : false,
            };
        this.handleLCookiClick =this.handleLCookiClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
    }

    handleSignUpClick() {
        this.setState({SignUp: true});
        
        console.log('cookie : ',this.state.IsCookie);
        console.log('SingUp : ',this.state.SignUp);
    } 

    handleLCookiClick() {
        this.setState({IsCookie: true});
        console.log('cookie : ',this.state.IsCookie);
        console.log('SingUp : ',this.state.SignUp);
    }

        
    render(){
        const isCookie = this.state.IsCookie;
        const isSignUp = this.state.SignUp;
        
        console.log('cookie : ',isCookie);
        console.log('SingUp : ',isSignUp);

        let compoUI = <LogContainer />;
        
        // if (isSignUp) {
        //     compoUI = <SignUp onClick={this.handleSignUpClick}    />;
        // }
        // else if(isCookie){
        //     compoUI = <UserInfo onClick={this.handleLCookiClick}   />;
        // }
        // else{
        //     compoUI = <LogContainer />;
        
        // }

        return(
            <div>
                {/* 네비게이션 */}
                <Navigation/>               
                {compoUI}                                      
                {/* Footer */}
                
                {/* <UserInfo onClick={this.handleLCookiClick}   />
                <SignUp onClick={this.handleSignUpClick} /> */}
            </div>
        );
    }
}
export default Main;

