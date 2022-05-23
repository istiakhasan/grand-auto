import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import CancelModal from "./CancelModal";
import OrderRow from "./OrderRow";

const MyOrder = () => {
  const [deleteOrder,setDeleteOrder]=useState(null)
  console.log(deleteOrder)
  const [user] = useAuthState(auth);
  const { data: myorder, isLoading,refetch } = useQuery("myorder", () =>
    fetch(`http://localhost:4000/order?email=${user.email}`).then((res) =>
      res.json()
    )
  );
  console.log(myorder, "lol");
  if (isLoading) {
    return;
  }
  return (
    <div>
      <h2 className="font-semibold text-2xl text-primary">
        My All Order List:{myorder.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
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
            {myorder.map((item, i) => (
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
