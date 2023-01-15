import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';
import MakeAdminModal from './MakeAdminModal';
import UserDeleteModal from './UserDeleteModal';

const MakeAdmin = () => {
  const [makeadminData,setMakeAdminData]=useState(null)
  const [deleteUserData,setDeleteUserData]=useState(null)
    const {data:userData,isLoading,refetch}=useQuery('allusersData',()=>fetch('https://grand-auto-server.onrender.com/user',{
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>{
      
      if(res.status===403 ||res.status===401){
        signOut(auth)
        localStorage.removeItem('accessToken')
        toast.error("Forbidden")
        return
      }
      return res.json()
    
    }))
    if(isLoading){
        return <div className='h-screen flex justify-center items-center'><Loading /></div>;
    }
    return (
        <div>
          <h2 className='text-primary text-3xl text-center mb-5'>Make admin</h2>
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
                <AdminRow setDeleteUserData={setDeleteUserData} setMakeAdminData={setMakeAdminData} refetch={refetch}
                  key={item._id} item={item} i={i} />
                ))}
              </tbody>
            </table>
            {makeadminData &&
            <MakeAdminModal makeadminData={makeadminData} refetch={refetch} setMakeAdminData={setMakeAdminData} />}
            {deleteUserData &&
            <UserDeleteModal deleteUserData={deleteUserData} refetch={refetch} setDeleteUserData={setDeleteUserData} />}
          </div>

        </div>
    );
};

export default MakeAdmin;