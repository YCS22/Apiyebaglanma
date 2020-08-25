import React from 'react';
/*import React,{useState,useContext} from 'react';
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';
import {useForm} from "react-hook-form";
import {CreditCard} from 'react-kawaii';
*/

import LoginForm from  "./LoginForm"

    const Login=()=>{
   
   
   /*   const [userName,setUserName]=useState("");
    const [Password,setPassword]=useState("");
    const {register,handleSubmit,errors} = useForm();
    const Auth=useContext(AuthApi)

    */
   
    return(
      <div><h1>LOGIN PAGE</h1>
      <LoginForm />
     
      </div>  
    )
  }
export default Login;

/*    <form onSubmit={handleSubmit(OnSubmit)} noValidate >
      <input type="text" placeholder="username" name="username" onChange={e=>{setUserName(e.target.value)}}
         ref ={register ({required:true})}/><br/>
      {errors.username && <span>Kullanıcı adı boş geçilemez</span>}<br/>
      <input type="text" placeholder="password" name="password" onChange={e=>{setPassword(e.target.value)}} 
        ref ={register ({required:true})}/><br/>
      {errors.password && <span>Şifre boş geçilemez</span>} <br/>
      <input type="submit"   /> 
      </form>
      */