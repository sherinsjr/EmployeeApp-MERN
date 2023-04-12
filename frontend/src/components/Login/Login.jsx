import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginValidate = ()=>{
    const userData = {
      "email":email,
      "password":password
    }
    axios.post(`http://localhost:3003/api/v1/user/login`,userData)
    .then((getData)=>{
      console.log(getData.data)
      if (getData.data.status==="success") {
        sessionStorage.setItem("email",getData.data.data[0].email)
        sessionStorage.setItem("role",getData.data.data[0].role)
        sessionStorage.setItem("UserToken",getData.data.token)

        alert("login Success")
        navigate('/home')
      }
    })
  }
  return (
    <div>
       <div>
        <div className="container">
          <form >
        <div className="d-grid gap-2 col-6 mx-auto style=width:200px; border border-primary border-3 rounded-3 mt-5 bg-body-secondary">
          <div className="mt-5 d-grid gap-2 col-6 mx-auto style=width:200px; col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <input
              type="text"
              className="formcontrol text-center border border-dark rounded-2"
              placeholder="Email" onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className=" d-grid gap-2 col-6 mx-auto style=width:200px; col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <input
              type="password"
              className="formconrtol text-center border border-dark rounded-2"
              placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto style=width:200px; mb-5">
            <button className="btn btn-outline-primary" onClick={loginValidate} type='button' >Login</button>
            <p>Don't have an account? <a href="/signup" style={{textDecoration:"none"}}>click here</a></p>
          </div>
        </div>
        </form>
     </div> 
    </div>
    </div>
  )
}

export default Login