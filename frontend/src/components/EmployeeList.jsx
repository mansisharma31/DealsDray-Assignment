
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button';


// //  getting data from the DB to React

// const EmployeeList = () => {
//     let [infoFromDB, setinfoFromDB] = useState([])
//     let [reload, setReload] = useState(0)
//     useEffect(()=>{
//         axios.get("http://localhost:4001/employee-list")
//         .then((e)=>{
//                 setinfoFromDB(e.data)
//             })
//          .catch((e)=>{
//                 console.log("error from EmployeeList useEffect");
//             })
//             setReload(1)
        
//     },[reload])
//     let deleteUser = (e)=>{
//       axios.delete(`http://localhost:4001/employee-list/${e}`)
//       setReload(2)
//     }

//   return (
//     <div className='w-screen'>
//       <p>Total Count : {infoFromDB.length}</p>
//        <table>
//        <thead className='border border-black w-screen'>
//           <tr>
//             <th className='px-7 py-2'>Unique Id</th>
//             {/* <th className='px-7 py-2'>Image</th> */}
//             <th className='px-7 py-2'>Name</th>
//             <th className='px-7 py-2'>Email</th>
//             <th className='px-7 py-2'>Phone</th>
//             <th className='px-7 py-2'>Designation</th>
//             <th className='px-7 py-2'>Gender</th>
//             <th className='px-7 py-2'>Course</th>
//             <th className='px-12 py-2'>Action</th>
//           </tr>
//         </thead>
//         <tbody className='text-center text-[15px]'>
//           {infoFromDB.map((item,i) => (
//             <tr key={item.id}>
//               <td className='border-2 border-green-700'>{i+1}</td>
//               {/* <td className='border-2 border-green-700'><img src={`backend/Images/${item.image}`}/></td> */}
//               <td className='border-2 border-green-700'>{item.name}</td>
//               <td className='border-2 border-green-700'>{item.email}</td>
//               <td className='border-2 border-green-700'>{item.phone}</td>
//               <td className='border-2 border-green-700'>{item.designation}</td>
//               <td className='border-2 border-green-700'>{item.gender}</td>
//               <td className='border-2 border-green-700'>{item.course[0]},{item.course[1]}</td>
//               <td className='border-2 border-green-700'>
//                 <Link  to={`/edit-employee/${item._id}`}>Edit - </Link>
//                 <Button variant="outlined" color="error"  onClick={()=>{deleteUser(item._id)}}> Delete </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
        
//        </table>
//     </div>
//   )
// }

// export default EmployeeList

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const EmployeeList = () => {
  let [infoFromDB, setinfoFromDB] = useState([]);
  let [reload, setReload] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:4001/employee-list")
      .then((e) => {
        setinfoFromDB(e.data);
      })
      .catch((e) => {
        console.log("error from EmployeeList useEffect");
      });
    setReload(1);
  }, [reload]);

  let deleteUser = (e) => {
    axios.delete(`http://localhost:4001/employee-list/${e}`);
    setReload(2);
  };

  return (
    <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-12'>
      <p className='text-lg font-bold mb-4'>Total Count : {infoFromDB.length}</p>
      <table className='w-full border-collapse rounded-md' >
        <thead className='bg-black text-white'>
          <tr>
            <th className='px-4 py-2 border-b border-white'>Unique Id</th>
            {/* <th className='px-4 py-2 border-b border-white'>Image</th> */}
            <th className='px-4 py-2 border-b border-white'>Name</th>
            <th className='px-4 py-2 border-b border-white'>Email</th>
            <th className='px-4 py-2 border-b border-white'>Phone</th>
            <th className='px-4 py-2 border-b border-white'>Designation</th>
            <th className='px-4 py-2 border-b border-white'>Gender</th>
            <th className='px-4 py-2 border-b border-white'>Course</th>
            <th className='px-4 py-2 border-b border-white'>Action</th>
          </tr>
        </thead>
        <tbody>
          {infoFromDB.map((item, i) => (
            <tr key={item.id} className='bg-white hover:bg-gray-100'>
              <td className='px-4 py-2 border-b border-gray-200'>{i + 1}</td>
              {/* <td className='px-4 py-2 border-b border-gray-200'><img src={`backend/Images/${item.image}`} /></td> */}
              <td className='px-4 py-2 border-b border-gray-200'>{item.name}</td>
              <td className='px-4 py-2 border-b border-gray-200'>{item.email}</td>
              <td className='px-4 py-2 border-b border-gray-200'>{item.phone}</td>
              <td className='px-4 py-2 border-b border-gray-200'>{item.designation}</td>
              <td className='px-4 py-2 border-b border-gray-200'>{item.gender}</td>
              <td className='px-4 py-2 border-b border-gray-200'>{item.course[0]}, {item.course[1]}</td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <Link className='rounded-md pl-2 pr-2 pt-1 pb-1.5 mr-1 ' style={{'color':'#D32F2F','border':'1px solid #D32F2F'}} to={`/edit-employee/${item._id}`}>EDIT </Link>
                <Button variant="outlined" color="error" onClick={() => deleteUser(item._id)}> Delete </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;