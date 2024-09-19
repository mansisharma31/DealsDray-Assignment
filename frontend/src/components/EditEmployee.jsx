// 

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  let [name, setName] = useState("")
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState()
  let [designation, setDesignation] = useState()
  let [gender, setGender] = useState()
  let [courses, setCourses] = useState([])
  let [image, setImage] = useState()

  let idObj = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:4001/employee-list/${idObj.ID}`)
      .then((e) => {
        setName(e.data.name);
        setEmail(e.data.email);
        setPhone(e.data.phone)
        setDesignation(e.data.designation)
        setGender(e.data.gender)
        setCourses(e.data.course)
      })
      .catch(() => { console.log("erro"); })
  }, [])

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCourses([...courses, value]);
    } else {
      setCourses(courses.filter(course => course !== value));
    }
  };

  let formHandle = (e) => {
    e.preventDefault()
    let payload = {
      name: name,
      email: email,
      phone: phone,
      image: image,
      designation: designation,
      gender: gender,
      course: courses
    }
    axios.put(`http://localhost:4001/employee-list/${idObj.ID}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((e) => { alert(e.data); })
      .catch(() => { console.log("err "); })

    navigate("/employee-list")

  }

  return (
    <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-12'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Update Employee Data</h1>
      <div className='max-w-md mx-auto p-8 bg-white shadow-md rounded'>
        <form onSubmit={formHandle}>
          <input 
            className='block w-full p-2 pl-10 text-sm text-gray-700' 
            placeholder='Enter Full Name' 
            type="text" 
            value={name} 
            onChange={(e) => { setName(e.target.value) }} 
          />
          <input 
            className='block w-full p-2 pl-10 text-sm text-gray-700' 
            placeholder='Enter Email' 
            type="text" 
            value={email} 
            onChange={(e) => { setEmail(e.target.value) }} 
          />
          <input 
            className='block w-full p-2 pl-10 text-sm text-gray-700' 
            placeholder='Enter Phone Number' 
            type="text" 
            value={phone} 
            onChange={(e) => { setPhone(e.target.value) }} 
          />

          {/* designation dropdown */}
          <label htmlFor="">Designation</label>
          <select 
            onChange={(e) => { setDesignation(e.target.value); }} 
            name='designation' 
            required 
            className='block w-full p-2 pl-10 text-sm text-gray-700'
          >
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>

          {/* Gender radio button */}
          <label htmlFor="">Geneder : </label><br />
          <input 
            type="radio" 
            id="male" 
            name="gender" 
            value={gender} 
            onChange={(e) => { setGender("Male") }} 
          />
          <label for="male"> Male </label>
          <input 
            type="radio" 
            id="female" 
            name="gender" 
            value={gender} 
            onChange={(e) => { setGender("Female") }} 
          />
          <label for="female"> Female </label><br></br>

          {/* Courses check boxes */}
          <label>Course :</label><br />
          <input 
            type="checkbox" 
            id="MCA" 
            name="course" 
            value="MCA" 
            checked={courses.includes('MCA')} 
            onChange={handleCheckboxChange} 
          />
          <label for="MCA"> MCA </label>
          <input 
            type="checkbox" 
            id="BCA" 
            name="course" 
            value="BCA" 
            checked={courses.includes('BCA')} 
            onChange={handleCheckboxChange} 
          />
          <label for="BCA"> BCA </label>
          <input 
            type="checkbox" 
            id="BSC" 
            name="course" 
            value="BSC" 
            checked={courses.includes('BSC')} 
            onChange={handleCheckboxChange} 
          />
          <label for="BSC"> BSC </label><br />

          {/* file upload */}
          <label htmlFor="">Upload your photo</label><br />
          <input 
            accept="image/jpeg, image/png" 
            type="file" 
            name='image' 
            onChange={(e) => { setImage(e.target.files[0]) }} 
          /><br />

          <button 
            className='bg-black text-white p-2 pl-5 pr-5 rounded' 
            onClick={formHandle}
          >Update Changes</button>
        </form>
      </div>
    </div>
  )
}

export default EditEmployee;