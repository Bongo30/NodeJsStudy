
import React from 'react';
import AuthApi from "../AuthApi";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Cookies from 'js-cookie';
export default class Routes extends React.Component{
    
    render(){
        const Login = () => {
            const Auth = React.useContext(AuthApi)
            const handleOnClick =() =>{
                Auth.setAuth(true);
                Cookies.set("user","loginTrue");
            }
            return(
                <div>
                <h1> Please Study ..Please..!!</h1>
                <button onClick={handleOnClick}>Login</button>
                </div>
            )
        }

        const Dashboard = () => {
            const Auth = React.useContext(AuthApi);
            const handeOnClick= ()=>{
            Auth.setAuth(false);
            Cookies.remove("user");
            }         
            return(
                <div>
                <h1> Dashboard</h1>
                <button onClick={handeOnClick}>Logout</button>
                </div>
            )
        }
        //로그인 안되면 로그인 페이지로 보냄
        const ProtectedRoute = ({auth,component:Component,...rest}) =>{
            return (
                <Route
                {...rest}
                render ={()=> auth? (
                    <Component/>
                ):
                (
                    <Redirect to="/login"/>
                )    
                }
                />
            )
        }
        const ProtectedLogin = ({auth,component:Component,...rest}) =>{
            return (
                <Route
                {...rest}
                render ={()=> !auth? 
                    (
                    <Component/>    
                    ):
                    (
                    <Redirect to="/dashboard"/>
                    )        
                }
                /> 
            )
        }

        const Routes = () =>{
            const Auth = React.useContext(AuthApi)
            return(
                <Switch>
                <ProtectedLogin path="/login" auth={Auth.auth}  component={Login}/>
                <ProtectedRoute path="/Dashboard" auth={Auth.auth} component={Dashboard}/>
                </Switch>
            )
        }
        // const Auth = React.useContext(AuthApi);

        return(
            <Routes/>
        );
    
    }
}

