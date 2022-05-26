import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ManageOrdersRow from './ManageOrdersRow';
import OrderDeleteModal from './OrderDeleteModal';
import ShiftModal from './ShiftModal';

const ManageOrders = () => {
  const [deleteOrder,setDeleteOrder]=useState(null)
  const [shiftOrder,setShiftOrder]=useState(null)
    const {data:ordersProduct,isLoading,refetch}=useQuery('allorders',()=>fetch('https://grandauto.herokuapp.com/allorders',{
        method:"GET",
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>{
      if(res.status===401 || res.status===403){
        signOut(auth)
        localStorage.removeItem('accessToken')
        toast.error('Forbidden access')
        return
      }
      return res.json()
    }))
    
    if(isLoading){
        return <div className="flex justify-center items-center h-20">
                     <Loading />
              </div>
      }
   
    return (
        <div>
          <h2 className='text-center text-3xl text-primary  font-semibold'>Manage Orders</h2>
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>email</th>
                <th>Product Name</th>
                <th>Total Price</th>
                <th>Quantity</th>
                <th>Payment Status</th>
                <th> Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {ordersProduct?.map((orderItem, i) => (
              <ManageOrdersRow setShiftOrder={setShiftOrder} setDeleteOrder={setDeleteOrder} refetch={refetch}
                key={orderItem._id} orderItem={orderItem} i={i} />
              ))}
            </tbody>
          </table>

          {shiftOrder &&
          <ShiftModal shiftOrder={shiftOrder} refetch={refetch} setShiftOrder={setShiftOrder} />}
          {deleteOrder &&
          <OrderDeleteModal deleteOrder={deleteOrder} refetch={refetch} setDeleteOrder={setDeleteOrder} />}

        </div>
    );
};

export default ManageOrders;