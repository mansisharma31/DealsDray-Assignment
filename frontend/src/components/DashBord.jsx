import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const DashBord = () => {
  let [name, setname] = useState("")
  let ID = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:4001/user/${ID.ID}`)
    .then((e)=>{
      setname(e.data)
    
    })
    .catch(()=>{console.log("unable to fetch data in Edit comp");})
},[])

  return (
    <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-12 rounded-md'>
      <div id='navbar' className='bg-black text-white p-5 flex justify-between rounded-md'>
        <ul className='flex gap-24 px-10'>
          <li><Link to='/' className='mt-10 pb-4' style={{'color': '#1976D2'}}>HOME</Link></li>
          <li><Button variant="text" className='text-white '><Link to='/create-employee'> Create Employee</Link></Button> </li>
          <li><Button variant="text" className='text-white'><Link to="/employee-list">  Employee list </Link></Button> </li>
          <li className='p-2 border border-dashed border-white' style={{'color': '#1976D2'}}>{name}</li>
          <li><Link to='/logout' className='text-white' style={{'color': '#1976D2'}}>Logout</Link></li>
        </ul>
      </div>
      <h1 className='bg-white text-black p-4 text-3xl font-bold rounded-md mb-4'>Dashboard</h1>
      <p className='text-black'>Welcome to admin panel</p>
    </div>
  )
}

export default DashBord;