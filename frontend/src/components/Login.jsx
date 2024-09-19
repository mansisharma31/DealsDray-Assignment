// 

import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let login=()=>{
        let payload = {email, password}
        axios.post('http://localhost:4001/login', payload)
        .then((e)=>{
            if(e.data.status == "success"){
                navigate(`/dashbord/${e.data.id}`)
            }
            else if(e.data.status == "fail"){
                alert("wrong password")
            }
            else if(e.data.status == "noUser"){
                alert("Invalid Email")
            }
        })
    }

    return (
        <div className=' w-full bg-white flex justify-center'>
            <div className='max-w-md h-2/3 mt-20 m-4 w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md' style={{'border' : '1px solid #f0f0f0'}}>
                <h1 className='text-black text-center font-bold text-2xl my-3'>Login Form</h1>
                <div className='max-w-md mx-auto my-5 p-10'>
                    <input 
                        className='w-full p-2 text-black bg-white border-2 border-white rounded-lg 'style={{'border' : '1px solid #f0f0f0'}} 
                        placeholder='Email' 
                        type="text" 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}} 
                    />
                    <br />
                    <input 
                        className='w-full p-2 text-black bg-white border-2 border-white rounded-lg my-3' style={{'border' : '2px solid #f0f0f0'}}
                        placeholder='Password' 
                        type="password" 
                        value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}} 
                    />
                    <button 
                        className='bg-white hover:bg-gray-700 hover:text-white text-black py-2 px-4 rounded-lg' style={{'border' : '1px solid #f0f0f0'}}
                        onClick={login}
                    >LOGIN</button>
                    <br />
                    <p className='text-black text-center my-3'>Don't have an Account? <Button variant="outlined"><Link to='/register'> Sign Up</Link></Button> </p>
                </div>
            </div>
        </div>
    )
}

export default Login;