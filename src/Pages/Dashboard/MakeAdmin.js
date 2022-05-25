import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AdminRow from './AdminRow';
import MakeAdminModal from './MakeAdminModal';
import UserDeleteModal from './UserDeleteModal';

const MakeAdmin = () => {
  const [makeadminData,setMakeAdminData]=useState(null)
  const [deleteUserData,setDeleteUserData]=useState(null)
    const {data:userData,isLoading,refetch}=useQuery('allusersData',()=>fetch('https://grandauto.herokuapp.com/user',{
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>res.json()))
    if(isLoading){
        return ;
    }
    return (
        <div>
            <h2 className='text-primary text-3xl text-center'>Make admin</h2>
            <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
             
              <th>Make Admin</th>
             
              <th>Action</th>
          
            </tr>
          </thead>
          <tbody>
           
            {userData?.map((item, i) => (
             <AdminRow setDeleteUserData={setDeleteUserData} setMakeAdminData={setMakeAdminData} refetch={refetch}  key={item._id} item={item} i={i} />
            ))}
          </tbody>
        </table>
       {makeadminData && <MakeAdminModal makeadminData={makeadminData} refetch={refetch} setMakeAdminData={setMakeAdminData}  />} 
       {deleteUserData && <UserDeleteModal deleteUserData={deleteUserData} refetch={refetch} setDeleteUserData={setDeleteUserData}  />} 
      </div>
            
        </div>
    );
};

export default MakeAdmin;