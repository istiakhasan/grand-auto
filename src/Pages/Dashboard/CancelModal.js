import React from "react";

const CancelModal = ({setDeleteOrder,deleteOrder,refetch}) => {
  const handleCancel=()=>{
    fetch(`http://localhost:4000/order/${deleteOrder._id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount){
       setDeleteOrder(null)
       refetch()
      }
      
    })
   
  }
 
  return (
    <>
   

      <input type="checkbox" id="cancelModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-2xl">
            Are you sure?
          </h3>
          <p class="py-4">
           Are you sure you want to cancel this product? You CAN NOT view this product in your list if your Cancel !!
          </p>
          <div class="modal-action">
            <button onClick={handleCancel} className="btn bg-red-600 hover:bg-red-700 border-0 btn-sm text-white">Confirm</button>
            <label for="cancelModal" class="btn btn-sm bg-green-600 text-white border-0 hover:bg-green-700">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelModal;
