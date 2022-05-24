import React from 'react';

const AdminRow = ({item,i,refetch}) => {
    const handleMakeAdmin=()=>{
        fetch(`http://localhost:4000/makeadmin/${item.email}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            refetch()
        })
    }
    return (
        <tr>
        <th>{i + 1}</th>
        <td>{item.email}</td>
         <td>{item.role !=='admin'?<button onClick={handleMakeAdmin} className='btn btn-primary btn-sm'>Make Admin</button>
         
        :
        <span className='text-green-500 font-bold t'>Admin</span>
        }</td>
        <td><button className='btn btn-primary btn-sm bg-red-500 border-0'>Remove User</button></td>
    
     
      </tr>
    );
};

export default AdminRow;