import React from 'react';
const AdminRow = ({item,i,setMakeAdminData,setDeleteUserData}) => {
return (
<tr>
  <th>{i + 1}</th>
  <td>{item.email}</td>
  <td>
    {
    item.role !=='admin'?<label onClick={()=>setMakeAdminData(item)} className='btn btn-primary btn-sm' htmlFor="makeadminmodal">Make Admin</label>
    :
    <span className='text-green-500 font-bold t'>Admin</span>
    }
    
  </td>
   <td>
      <label onClick={()=>setDeleteUserData(item)} htmlFor="userDeleteModal" className='btn btn-primary btn-sm bg-red-500 border-0'>Remove User</label>
  </td>


</tr>
);
};

export default AdminRow;