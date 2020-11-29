import logo from './logo.svg';
import './App.css';
import React from "react";
import Cookies from 'js-cookie'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"

import AuthApi from "./AuthApi";
function App() {


  const [auth,setAuth]=React.useState(false);
  const readCookie = () =>{
    const user = Cookies.get("user");
    if(user){
      auth.setAuth(true);
    }
  }
  React.useEffect(()=>{
    readCookie();
  },[])
  
  return (
    <div className="App">        
        {/* <Login/>
        <Dashboard/> */}
        <AuthApi.Provider value={{auth,setAuth}}>
        <Router>
            <Routes/>
        </Router>
        </AuthApi.Provider>
    </div>
  );
}

const Login = () => {
  
  const Auth = React.useContext(AuthApi)
  const handleOnClick =() =>{
    Auth.setAuth(true);
    Cookies.set("user","loginTrue");
  }
  return(
    <div>
      <h1> Welcome to daily webcoding</h1>
      <button onClick={handleOnClick}>Login</button>
    </div>
  )
}

const Dashboard = () => {
  return(
    <div>
      <h1> Dashboard</h1>
      <button>Logout</button>
    </div>
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
      render ={()=> !auth? (
        <Component/>
      ):
      (
        <Redirect to="/dashboard"/>
      )
    
    }
    />

    

  )
}



export default App;
