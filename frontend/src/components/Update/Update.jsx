import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Header/Navbar';

export const Update = () => {

    const navigate = useNavigate();
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[place,setPlace] = useState("");
    const[designation,setDesignation] = useState("");
    const[salary,setSalary] = useState("");
    const[ID,setID] = useState("null");

    const sendDataToApi = () =>{
        const employeeData = {
            "name":name,
            "email":email,
            "place":place,
            "designation":designation,
            "salary":salary
        }
        axios.put(``,employeeData)
        .then((response)=>{
            if (response.data.success===true) {
                alert("Updated successfully");
                navigate('/home');
            }
            else{
                alert("Update Failed");
            }
        })
    }

    useEffect(()=>{
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPlace(localStorage.getItem("Place"));
        setDesignation(localStorage.getItem("designation"));
        setSalary(localStorage.getItem("salary"));
        setID(localStorage.getItem('ID'));
    },[]);

  return (
    <div>
        <Navbar/>
        <div className="container border border-info border-3 mt-5 p-3 bg-warning-subtle">
            <div className="row g-4">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                   <p style={{textAlign:'center'}}>Update Employee</p>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6  mt-5">
                    <input type="text" className="form-control text-center border border-primary " placeholder='Name' onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-5">
                <input type="text" className="form-control text-center border border-primary" placeholder='Email ID' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <input type="text" className="form-control text-center border border-primary" placeholder='Place' onChange={(e)=>setPlace(e.target.value)} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <input type="password" className="form-control text-center border border-primary" placeholder='Designation' onChange={(e)=>setDesignation(e.target.value)}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                <input type="password" className="form-control text-center border border-primary" placeholder='Salary' onChange={(e)=>setSalary(e.target.value)}/>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto style=width:200px;  mb-4">
                    <button className="btn btn-outline-primary" type='button' onClick={sendDataToApi}>Update</button>
                </div>
            </div>
        </div>

    </div>
  )
}
