import React,{useState} from 'react';

import Cookies from 'js-cookie';
import Input from "@material-ui/core/Input";

const Loginpage = () => {
    
    const [values,setValues]= useState({email:"",password:""});

    const handleChange=event=>{
    const {name,value}=event.target;
     
  

    setValues({
            ...values,
            [name]:value
    });
    };
    
    const handleSubmit =event =>{
        event.preventDefault();
         submit();
    };

    function submit (){
        console.log('submitted succesfully')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                <label>Email</label>
                <div>
                <input type="email" name="email"  value={values.email} onChange={handleChange}/>
                </div>
                </div>

                <div>
                <label>Password</label>
                <div>
                <input name="password" type="password" value={values.password} onChange={handleChange}/>
                </div>
                </div>

                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default Loginpage;