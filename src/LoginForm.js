import React from 'react'; 
import {Formik,Field} from "formik";
import { Button } from '@material-ui/core';
import {TextField} from 'formik-material-ui';
import * as Yup from 'yup';
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'green',
    height: 48,
    padding: '0 30px',
  },
});
 const LoginForm = (props) =>{

  const classes = useStyles();
  const SignUpSchema = Yup.object().shape({
    name:Yup.string()
    .min(2,'2 karakterden fazla olmalı')
    .max(20,'20 karakterden az olmalı')
    .required('Required'),
    password:Yup.string()
    .min(2,'2 karakterden fazla olmalı')
    .max(20,'20 karakterden az olmalı')
    .required('Required')
  });

  

  const Auth=React.useContext(AuthApi);

 return (
   <div>
     <Formik
       validationSchema={SignUpSchema}
       initialValues={{ 
         name:"",
         password:"" }}
         onSubmit={async (values, {setErrors},actions ) => {
          await new Promise (resolve => setTimeout(resolve,500));
          axios.defaults.baseURL='http://localhost:3000';
          axios.defaults.headers.post['Content-Type']='application/json;charset=utf-8';
          axios.defaults.headers.post['Access-Control-Allow-Origin']='*';
          
          axios.post('http://192.168.1.9:7722/api/Login/RequestToken', {
          "username": values.name,
          "password": values.password,
          headers:{"Access-Control-Allow-Headers":"X-Requested-With",
                   'Access-Control-Allow-Origin' : '*',
                   'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                   'Access-Control-Allow-Credentials': true,
                   'Content-Type': 'application/json;charset=utf-8', },
          proxy:{
            host:'192.168.1.9',
            port:3000
          }
                   
         },
       
        

        )
        .then(response => {
          console.log(response.data);
          Auth.setAuth(true);
          Cookies.set("user","success"); 
        })
        .catch(() => {
          setErrors({form:  <h1 classes={classes.root}>"Kullanıcı bilgilerini kontrol ediniz"</h1>}); 
        });
      
          
      

      }
    }
    
     >
       {props =>  (
         
         <form onSubmit={props.handleSubmit}>
             <Field name="name" type="text" component={TextField} placeholder="Name"/>&nbsp; &nbsp;
             <Field name="password" type="password" component={TextField} placeholder="Password" /> <br/>
             <Button color="primary" type="submit">Submit</Button>
             {props.errors.form && <div id="fedback">{props.errors.form}</div>}

         </form>
       )
       }
     </Formik>
   
   </div>
 )};

 export default LoginForm

 /*      await  axios('http://192.168.1.9:7722/api/Login/RequestToken',{
          method:"POST",
          mode:'no-cors',
          headers:{'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',},
          withCredentials:true,
          credentials:'same-origin',
        }).then(response => {
          console.log(response);
          Auth.setAuth(true);
          Cookies.set("user","success");
        })
        .catch(error=> {
          setErrors({form:  <h1 classes={classes.root}>"Kullanıcı bilgilerini kontrol ediniz"</h1>}); 
        }); 
        
        
    ------------------------------------------------------------------
        */




        /*

*/
