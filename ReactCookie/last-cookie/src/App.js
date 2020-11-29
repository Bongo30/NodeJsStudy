
import './App.css';
import React from "react"
import Cookies from 'js-cookie';
import AuthApi from "./AuthApi";
import Routes from "./components/Route";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
function App() {
  const [auth,setAuth]=React.useState(false);

  const readCookie = () =>{
    const user = Cookies.get("user")
    if(user){
      setAuth(true);
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
        <Router auth={{auth,setAuth}}>
            <Routes/>
        </Router>
        </AuthApi.Provider>
    </div>
  );
}

export default App;
