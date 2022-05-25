import React from 'react';

const ManageOrdersRow = ({i,orderItem,refetch,setDeleteOrder}) => {
  
    const handleShiftOrder=()=>{
        const url=`http://localhost:4000/updatestatus/${orderItem._id}`
        fetch(url,{
            method:"PATCH",
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            alert("Update successfully")
            refetch()
        })
    }
    return (
        <tr>
        <th>{i + 1}</th>
        <td>{orderItem.customerName}</td>
        <td>{orderItem.email}</td>
        <td>{orderItem.toolsName}</td>
        <td>{orderItem.totalPrice}</td>
        <td>{orderItem.orderQuantity}</td>
        <td>
            {orderItem.pay?<span className='text-green-500 text-xs font-bold'>Paid</span>:<span className='text-warning font-bold text-xs'>Unpaid</span>  }
        </td>
        <td>
          <span className={`${orderItem.status==='shift'?"text-green-600 bg-green-200 p-2":"text-orange-500 bg-orange-200 p-2"} font-bold text-xs rounded-lg`}>{orderItem.status || "unpaid"}</span>
        </td>
        <td>
            {orderItem.pay?<button disabled={orderItem.status==="shift"} onClick={handleShiftOrder} className='btn-primary btn btn-xs'>Shift Now</button>:
            <label onClick={()=>setDeleteOrder(orderItem)} className='btn bg-red-500 hover:bg-red-700 border-0 text-white font-bold btn-xs' for="shiftmodal">Delete</label>
            
            }
       
        </td>
      </tr>
    );
};

export default ManageOrdersRow;