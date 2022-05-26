import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({deleteProduct,refetch,setDeleteProduct}) => {
    const handleDeleteProduct=()=>{
          const url=`https://grandauto.herokuapp.com/tools/${deleteProduct._id}`
          fetch(url,{
              method:"Delete",
              headers:{
                  'authorization':`Bearer ${localStorage.getItem('accessToken')}`
              }
          })
          .then(res=>res.json())
          .then(data=>{
              if(data.deletedCount){
                 
                  refetch()
                  setDeleteProduct(null)
                  toast.success("Deleted successfully")
              }
              console.log(data)
          })
    }
    return (
        <>
   

        <input type="checkbox" id="productDeleteModal" className="modal-toggle z-50" />
        <div className="modal z-30 modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-2xl">
              Are you sure?
            </h3>
            <p className="py-4">
             Are you sure you want to cancel this product? You CAN NOT view this product in your list if your Cancel !!
            </p>
            <div className="modal-action">
              <button onClick={handleDeleteProduct} className="btn bg-red-600 hover:bg-red-700 border-0 btn-sm text-white">Confirm</button>
              <label  htmlFor="productDeleteModal" className="btn btn-sm bg-green-600 text-white border-0 hover:bg-green-700">
                Cancel
              </label>
           
            </div>
          </div>
        </div>
      </>
    );
};

export default ProductDeleteModal;