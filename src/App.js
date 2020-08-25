import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route,Redirect} from "react-router-dom";
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';
import Login from './Login';
import Dashboard from "./Dashboard";

function App() {

  const [auth,setAuth]=React.useState(false);
  const readCookie=()=>{
    const user= Cookies.get("user");
    if(user){
      setAuth(true);
    }
  }


  React.useEffect(()=>{
    readCookie();
    document.title = `yigitcan`;
  },[])
  return (
    <div className="App">
      <AuthApi.Provider value={{auth,setAuth}}>
      <Router>
        <Routes/>
      </Router>
      </AuthApi.Provider>
    </div>
  );
}

  const Routes=()=>{
  const Auth=React.useContext(AuthApi)
  return(
    <Switch>
      <ProtectedLogin path="/Login" component={Login} auth={Auth.auth}/>
      <ProtectedRoute path="/Dashboard" auth={Auth.auth}  component={Dashboard}/>
    </Switch>
  )
  }

const ProtectedRoute=({auth,component:Component,...rest})=>{
  return(
  <Route
  {...rest}
  render={()=>auth?(
    <Component/>
  ):
    (
      <Redirect to ="/Login"/>

    )
}
  />
  )
}


const ProtectedLogin=({auth,component:Component,...rest})=>{
  return(
  <Route
  {...rest}
  render={()=>!auth?(
    <Component/>
  ):
    (
      <Redirect to ="/Dashboard"/>

    )
}
  />
  )
}




export default App;
