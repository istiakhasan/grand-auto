import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminModal = ({makeadminData,setMakeAdminData,refetch}) => {
    const handleMakeAdmin=()=>{
        fetch(`https://grandauto.herokuapp.com/makeadmin/${makeadminData.email}`,{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
             toast.success("Make admin successfully..!!")
             setMakeAdminData(null)
             refetch()
        })
    }
    return (
        <>
          <input type="checkbox" id="makeadminmodal" className="modal-toggle z-50" />
          <div className="modal z-30 modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-2xl">
                Are you sure?
              </h3>
              <p className="py-4">
                Are you sure you want to make him/her admin?
              </p>
              <div className="modal-action">
                <button onClick={handleMakeAdmin}
                  className="btn bg-green-600 hover:bg-green-700 border-0 btn-sm text-white">Confirm</button>
                <label htmlFor="makeadminmodal" className="btn btn-sm bg-red-600 text-white border-0 hover:bg-red-700">
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </>
    );
};

export default MakeAdminModal;