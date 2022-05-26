import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import CancelModal from "./CancelModal";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [deleteOrder,setDeleteOrder]=useState(null)
  const [user] = useAuthState(auth);
    const { data: myorder, isLoading,refetch } = useQuery("myorder", () =>
      fetch(`https://grandauto.herokuapp.com/order?email=${user.email}`,{
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then((res) =>
       {
          if(res.status===403 || res.status===401){
           
            signOut(auth)
            localStorage.removeItem('accessToken')
            toast.error(res.status)
            return 
          }
         return res.json()
        }
      )
     
  
  )

 


  
  if (isLoading) {
    return <div className="h-screen flex justify-center items-center"><Loading /></div>
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl text-primary">
        My All Order List:{myorder?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Tools Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
            {myorder?.map((item, i) => (
             <OrderRow setDeleteOrder={setDeleteOrder} key={item._id} item={item} i={i} />
            ))}
          </tbody>
        </table>
       {deleteOrder && <CancelModal deleteOrder={deleteOrder} refetch={refetch} setDeleteOrder={setDeleteOrder}  />}
      </div>
    </div>
  );
};

export default MyOrder;
