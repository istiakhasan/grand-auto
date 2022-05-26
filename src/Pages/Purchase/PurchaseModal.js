import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseModal = ({tool,newOrderQuantity,setIsOpen,refetch}) => {
  const [user] = useAuthState(auth);
  const {_id,name,price}=tool;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = async(data) => {
      const {address,phone}=data
      const totalPrice=price*(newOrderQuantity || tool.minimum_quantity)
      const order={
          toolsId:_id,
          toolsName:name,
          customerName:user.displayName,
          email:user.email,
          orderQuantity:newOrderQuantity || tool.minimum_quantity,
          address:address,
          phone:phone,
          totalPrice:totalPrice
      }
    fetch('https://grandauto.herokuapp.com/order',{
      method:"POST",
      headers:{
        'content-type':'application/json',
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      },
      body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      
      toast("Order parts successfully")
      refetch()
      reset()
      setIsOpen(false)
    })
}
  return (
    <div>
      <input type="checkbox" id="purchaseModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="purchaseModal" className="btn  btn-sm btn-circle absolute right-5 top-5">
            ✕
          </label>
          <h3 className="font-semibold text-xl text-primary text-center">
            Order {tool.name}
          </h3>
          <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input type="email" disabled value={user.email}
                className="input input-bordered input-primary w-full max-w-xs " />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Your Name:</span>
              </label>
              <input type="text" disabled value={user.displayName}
                className="input input-bordered input-primary w-full max-w-xs  " />
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Order quantity:</span>
              </label>

              <input type="text" disabled value={newOrderQuantity || tool.minimum_quantity} placeholder="Enter quantity"
                className="input input-bordered input-primary w-full max-w-xs" {...register("quantity")} />
              <label className="label">
                {errors.quantity?.type==='required'&& <span
                  className="label-text-alt text-red-700 font-bold">{errors.quantity.message}</span>}
                {errors.quantity?.type==='min'&& <span
                  className="label-text-alt text-red-700 font-bold">{errors.quantity.message}</span>}
                {errors.quantity?.type==='max'&& <span
                  className="label-text-alt text-red-700 font-bold">{errors.quantity.message}</span>}


              </label>
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Address:</span>
              </label>

              <input type="text" placeholder="Your address"
                className="input input-bordered input-primary w-full max-w-xs" {...register("address", { required:{
                value:true, message:'address is Required' } })} />
              <label className="label">
                {errors.address?.type==='required'&& <span
                  className="label-text-alt text-red-700 font-bold">{errors.address.message}</span>}



              </label>
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Phone Number:</span>
              </label>

              <input type="text" placeholder="Enter your number"
                className="input input-bordered input-primary w-full max-w-xs" {...register("phone")} />

            </div>
            <div className="form-control w-full max-w-xs my-10 mx-auto">
              <button className="btn btn-primary">Order</button>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
