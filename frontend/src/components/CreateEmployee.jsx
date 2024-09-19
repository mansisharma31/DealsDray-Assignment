import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CreateEmployee = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("")
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState()
  let [designation, setDesignation] = useState()
  let [gender, setGender] = useState("")
  let [course, setCourse] = useState([])
  let [image, setImage] = useState()

  let formHandle = (e) => {
    e.preventDefault()
    let payload = {
      name: name,
      email: email,
      phone: phone,
      image: image,
      designation: designation,
      gender: gender,
      course: course
    }
    console.log(payload);

    if (!name || !email || !phone || !designation || !gender || !course || !image) {
      alert("To Create Employee Fill all the fields..!")
    }
    else {
      axios.post("http://localhost:4001/employees", payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((e) => { alert(e.data) })
        .catch(() => { console.log("can not register"); })

      navigate("/employee-list")
    }
  }

  let handleCourseChange = (e) => {
    const course1 = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setCourse(course.concat(course1));
    }
    else {
      setCourse(course.filter(item => item !== course1));
    }
  };

  return (
    <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-12'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Create Employee</h1>
      <div className='max-w-md mx-auto p-8 bg-white shadow-md rounded'>
        <form onSubmit={formHandle}>
          <input 
            className='w-full p-2 text-black bg-white border-2 border-white rounded-lg my-3' style={{'border' : '2px solid #f0f0f0'}}
            placeholder='Enter Full Name' 
            type="text" 
            value={name} 
            onChange={(e) => { setName(e.target.value) }} 
          />
          <input 
            className='w-full p-2 text-black bg-white border-2 border-white rounded-lg my-3' style={{'border' : '2px solid #f0f0f0'}}
            placeholder='Enter Email' 
            type="text" 
            value={email} 
            onChange={(e) => { setEmail(e.target.value) }} 
          />
          <input 
            className='w-full p-2 text-black bg-white border-2 border-white rounded-lg my-3' style={{'border' : '2px solid #f0f0f0'}}
            placeholder='Enter Phone Number' 
            type="text" 
            value={phone} 
            onChange={(e) => { setPhone(e.target.value) }} 
          />

          {/* designation dropdown */}
          <label htmlFor="">Designation:</label>
          <select 
            onChange={(e) => { setDesignation(e.target.value); }} 
            name='designation' 
            required 
            className='w-full p-2 text-black bg-white border-2 border-white rounded-lg my-3' style={{'border' : '2px solid #f0f0f0'}}
          >
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>

          {/* Gender radio button */}
          <label htmlFor="">Gender : </label><br />
          <input 
            type="radio" 
            id="male" 
            name="gender" 
            value={gender} 
            className='p-4 m-2 mr-2' 
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
            className='p-4 m-2 mr-2' 
            id="MCA" 
            name="course" 
            value="MCA" 
            checked={course.includes('MCA')} 
            onChange={handleCourseChange} 
          />
          <label for="MCA"> MCA </label>
          <input 
            type="checkbox" 
            id="BCA" 
            name="course" 
            value="BCA" 
            checked={course.includes('BCA')} 
            onChange={handleCourseChange} 
          />
          <label for="BCA"> BCA </label>
          <input 
            type="checkbox" 
            id="BSC" 
            name="course" 
            value="BSC" 
            checked={course.includes('BSC')} 
            onChange={handleCourseChange} 
          />
          <label for="BSC"> BSC </label><br />

          {/* file upload */}
          <label htmlFor="">Upload your photo:</label><br />
          <input 
            accept="image/jpeg, image/png" 
            type="file" 
            name='image' 
            className='pt-2 pb-2' 
            onChange={(e) => { setImage(e.target.files[0]) }} 
          /><br /> 

          <button 
            className='bg-black text-white p-2 pl-5 pr-5 rounded' 
            onClick={formHandle}
          >Register Me</button>
        </form>
      </div>
    </div>
  )
}

export default CreateEmployee;