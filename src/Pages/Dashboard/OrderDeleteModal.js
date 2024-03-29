import React from 'react';

const OrderDeleteModal = ({ deleteOrder, refetch, setDeleteOrder }) => {
    const handleDeleteOrder=()=>{
        fetch(`https://grand-auto-server.onrender.com/order/${deleteOrder._id}`,{
          method:"DELETE",
          headers:{
              'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          }
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
        <div>
        <input type="checkbox" id="orderdeletemodal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-2xl">Are you sure?</h3>
            <p className="py-4">
              Are you sure you want to delete this order? You CAN NOT view this
              product in your list if your delete !!
            </p>
            <div className="modal-action">
              <button onClick={handleDeleteOrder}  className="btn bg-red-600 hover:bg-red-700 border-0 btn-sm text-white">
                Delete
              </button>
              <label
                htmlFor="orderdeletemodal"
                className="btn btn-sm bg-green-600 text-white border-0 hover:bg-green-700"
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OrderDeleteModal;