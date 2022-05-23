import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const { data: myorder, isLoading } = useQuery("myorder", () =>
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
              <tr>
                <th>{i + 1}</th>
                <td>{item.customerName}</td>
                <td>{item.email}</td>
                <td>{item.toolsName}</td>
                <td>{item.orderQuantity}</td>
                <td>{item.totalPrice}</td>
                <td>
                  <button class="btn bg-red-600 border-0 hover:bg-red-800 text-white font-semibold btn-xs mr-2 ">Cancel</button>
                  <button class="btn btn-active btn-primary font-semibold text-white btn-xs">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
