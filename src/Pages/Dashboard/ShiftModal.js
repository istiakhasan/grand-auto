import React from "react";
import { toast } from "react-toastify";

const ShiftModa = ({shiftOrder,refetch,setShiftOrder}) => {
  const handleShiftOrder=()=>{
    const url=`https://grand-auto-server.onrender.com/updatestatus/${shiftOrder._id}`
    fetch(url,{
        method:"PATCH",
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setShiftOrder(null)
        toast.success("Shift successfully")
        refetch()
    })
}

  return (
    <div>
      <input type="checkbox" id="shiftmodal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">Are you sure?</h3>
          <p className="py-4">
            Are you sure you want to delete this order? You CAN NOT view this
            product in your list if your delete !!
          </p>
          <div className="modal-action">
            <button onClick={handleShiftOrder}
              className="btn bg-green-600 hover:bg-green-700 border-0 btn-sm text-white">
              Confirm
            </button>
            <label htmlFor="shiftmodal" className="btn btn-sm bg-red-600 text-white border-0 hover:bg-red-700">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftModa;
