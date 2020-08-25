import React from 'react';
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';
const Dashboard =()=>{
    const Auth=React.useContext(AuthApi)
    const handleOnClick=()=>{
      Auth.setAuth(false);
      Cookies.remove("user","success");
    }
    return(
      <div>
        <form>
        <h1>Dashboard</h1>
        <button onClick={handleOnClick}>logout</button>
        </form>
      </div>
    )
  }
export default Dashboard;