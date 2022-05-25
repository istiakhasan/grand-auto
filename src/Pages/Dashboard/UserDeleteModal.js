import React from 'react';
import { toast } from 'react-toastify';

const UserDeleteModal = ({setDeleteUserData,deleteUserData,refetch}) => {
    const handleDeleteUser=()=>{
        const url=`http://localhost:4000/user?email=${deleteUserData.email}`
        fetch(url,{
            method:"DELETE",
            headers:{

                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                toast.success("Successfully deleted user ")
                setDeleteUserData(null)
                refetch()
            }
        })
        
    }
    return (
        <>
   

        <input type="checkbox" id="userDeleteModal" className="modal-toggle z-50" />
        <div className="modal z-30 modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-2xl">
              Are you sure?
            </h3>
            <p className="py-4">
             Are you sure you want to make him/her admin? 
            </p>
            <div className="modal-action">
              <button onClick={handleDeleteUser}   className="btn bg-red-600 hover:bg-red-700 border-0 btn-sm text-white">Confirm</button>
              <label  for="userDeleteModal" className="btn btn-sm bg-green-600 text-white border-0 hover:bg-green-700">
                Cancel
              </label>
           
            </div>
          </div>
        </div>
      </>
    );
};

export default UserDeleteModal;