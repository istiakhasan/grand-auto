import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
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
        res.json()
      ).catch(error=>{
        console.log(error,"kam hocche na")
      })
     
  
  )
 


  
  if (isLoading) {
    return;
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl text-primary">
        My All Order List:{myorder.length}
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
