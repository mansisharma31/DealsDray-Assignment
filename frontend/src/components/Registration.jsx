import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Registration = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cnfPassword, setCnfPassword] = useState('')
    let navigate = useNavigate()

    let submitForm =()=>{
        let payload = {
            name,email,cnfPassword
        }
        if(!name || !email || !cnfPassword){
            alert("To register Fill all the fields..!")
        }
        else{
            if(password === cnfPassword ){
                axios.post('http://localhost:4001/register', payload)
            .then((e)=>{
                alert(e.data);
                navigate("/")
            })
            .catch((e)=>{
                alert("problem in sending data to the Backend.!");
            })
            }
            else{
                alert("both password should be matched..")
            }
            
        }
    }

    return (
        <div className='w-full bg-white flex justify-center'>
            <div className='max-w-md h-2/3 mt-20 m-4 w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md'>
                <h1 className='text-black text-center font-bold text-2xl my-3'>Admin Registration Form</h1>
                <div className='max-w-md mx-auto my-5 p-10'>
                    <input 
                        className='w-full p-2 text-black bg-white border-2 border-white rounded-lg 'style={{'border' : '1px solid #f0f0f0'}}
                        placeholder='Enter Full Name' 
                        type="text" 
                        value={name} 
                        onChange={(e)=>{setName(e.target.value)}} 
                        required 
                    />
                    <input 
                        required 
                        className='w-full mt-4 p-2 text-black bg-white border-2 border-white rounded-lg 'style={{'border' : '1px solid #f0f0f0'}}
                        placeholder='Enter Email' 
                        type="text" 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}} 
                    />
                    <input 
                        required 
                        className='w-full mt-4 p-2 text-black bg-white border-2 border-white rounded-lg 'style={{'border' : '1px solid #f0f0f0'}} 
                        placeholder='Enter Password' 
                        type="password" 
                        value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}} 
                    />
                    <input 
                        className='w-full mt-4 p-2 text-black bg-white border-2 border-white rounded-lg 'style={{'border' : '1px solid #f0f0f0'}}
                        placeholder='Enter Password again' 
                        type="password" 
                        value={cnfPassword} 
                        onChange={(e)=>{setCnfPassword(e.target.value)}} 
                    />
                    <button 
                        className='bg-white mt-10 hover:bg-gray-700 hover:text-white text-black py-2 px-4 rounded-lg' style={{'border' : '1px solid #f0f0f0'}}
                        onClick={submitForm}
                    >Register Me</button>
                    <p className='text-black text-center my-3'>Already have Account? <Button variant="outlined"><Link to='/'> Sign In</Link></Button> </p>
                </div>
            </div>
        </div>
    )
}

export default Registration;