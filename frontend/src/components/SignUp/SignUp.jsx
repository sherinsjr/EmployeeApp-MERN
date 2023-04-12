import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {

    const navigate = useNavigate();
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const sendDataToApi = () =>{
        const userData = {
            "userName":"userName",
            "email":"email",
            "password":password
        }
        axios.post(`http://localhost:3003/api/v1//user/register`,userData)
        .then((response)=>{
            if(response.data.success===true){
                alert("SignUp Successfull Please login");
                navigate("/")
            }
        })
    }

  return (
    <div>
         <div className="container border border-info border-3 mt-5 p-3 bg-warning-subtle">
            <div className="row g-4">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6  mt-5">
                    <input type="text" className="form-control text-center border border-primary " placeholder=' UserName' onChange={(e)=>setUserName(e.target.value)} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-5">
                <input type="text" className="form-control text-center border border-primary" placeholder=' Email ID' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <input type="password" className="form-control text-center border border-primary" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto style=width:200px;  mb-4">
                    <button className="btn btn-outline-primary" type='button' onClick={sendDataToApi}>SignUp</button>
                    <p style={{textAlign:'center'}}>Already have an account? <a href="/" style={{textDecoration:"none"}}>click here</a></p>
                </div>
            </div>
        </div>

    </div>
  )
}
