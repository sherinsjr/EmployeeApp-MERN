import React, { useEffect, useState } from 'react'
import { Navbar } from '../Header/Navbar'
import {Footer} from '../Footer/Footer'
import {Link} from 'react-router-dom'

import axios from 'axios';
import { Button } from 'semantic-ui-react';
export const Home = () => {

    const [apiData, setApiData] = useState([]);
    const [visible, setVisible] = useState([]);
    useEffect(()=>{
      let role = sessionStorage.getItem("role")
      if (role=== "user") {
        setVisible(false)
      }
      else{
        setVisible(true)
      }
      axios.get(`http://localhost:3003/api/v1/employees`).then((getData)=>{
        setApiData(getData.data)
      })
    },[]);
    const getData = ()=>{
      axios.get(`http://localhost:3003/api/v1/employees`).then((getData)=>{
        setApiData(getData.data);
        console.log(getData.data);
      });
    };

    // delete
    const onDelete = (id) =>{
      axios.delete(``)
      .then((response)=>{
        if (response.data.success===true) {
          alert("Employee deleted Successfuly");
          getData();
        }
        else{
          alert("Somthing went wrong");
        }
      })
    }

    const setData = (id,name,email,place,designation,salary)=>{
      localStorage.setItem("ID",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("place",place);
      localStorage.setItem("designation",designation);
      localStorage.setItem("salary",salary);
    }

  return (
    <div>
        <Navbar/>
        <div className="container">
        <div className="row-g-3 mt-5">
        <table className="table p-3 text-primary-emphasis bg-info-subtle border border-primary-subtle rounded-3 ">
  <thead>
    <tr>
     
      <th scope="col " className=''>NAME</th>
      <th scope="col" className=''>EMAIL</th>
      <th scope="col" className=''>PLACE</th>
      <th scope="col" className=''>DESIGNATION</th>
      <th scope="col" className=''>SALARY</th>
      {visible && <th scope='col' className=''>Update</th>}
      {visible && <th scope='col' className=''>Update</th>}
    </tr>
  </thead>
  <tbody>
    {Array.isArray(apiData)
    ?apiData.map((data)=>{
      return(
        <tr>
      
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.place}</td>
      <td>{data.designation}</td>
      <td>{data.salary}</td>
      {
        visible &&
        <td>
          <Link to='updateEmp'>
            <Button color='green' onClick={()=>setData(data._id,data.name,data.email,data.place,data.designation,data.salary)}>Update</Button>
          </Link>
        </td>
      }
      {
        visible && 
        <td>
        <Button color='red' onClick={()=>onDelete(data.id)}>Delete</Button>
        </td>
      }
     
    </tr>
      )
    }):null}   
  </tbody>
</table>
    <Link to={"/addEmp"}>
      {visible &&<Button className='btn btn-secondary btn-lg'>Add Employee</Button>}
    </Link>
        </div>
      </div>
        <Footer/>
    </div>
  )
}
