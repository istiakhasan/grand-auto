import React from 'react';
import { useQuery } from 'react-query';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const {data:userData,isLoading,refetch}=useQuery('allusersData',()=>fetch('http://localhost:4000/user').then(res=>res.json()))
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
             <AdminRow refetch={refetch}  key={item._id} item={item} i={i} />
            ))}
          </tbody>
        </table>
       {/* {deleteOrder && <CancelModal deleteOrder={deleteOrder} refetch={refetch} setDeleteOrder={setDeleteOrder}  />} */}
      </div>
            
        </div>
    );
};

export default MakeAdmin;