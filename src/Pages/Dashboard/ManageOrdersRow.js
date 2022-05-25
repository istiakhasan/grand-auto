import React from 'react';

const ManageOrdersRow = ({i,orderItem,refetch,setDeleteOrder,setShiftOrder}) => {
  
 
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
          {orderItem.status ? <span className={`${orderItem.status==='shift'?"text-green-600 bg-green-200 p-2":"text-orange-600 bg-orange-100 p-2"} font-bold text-xs rounded-lg`}>{orderItem.status}</span>
        :
        <span className='text-red-600 font-bold text-xs bg-red-300 p-1 rounded-lg'>unpaid</span>  
        }
        </td>
        <td>
            {orderItem.pay? <label onClick={()=>setShiftOrder(orderItem)} disabled={orderItem.status==="shift"} className='btn-primary btn btn-xs' htmlFor="shiftmodal">Shift Now</label>:
             <label onClick={()=>setDeleteOrder(orderItem)} className='btn bg-red-500 hover:bg-red-700 border-0 text-white font-bold btn-xs' htmlFor="orderdeletemodal">Delete</label>
          
            
            
            }
       
        </td>
      </tr>
    );
};

export default ManageOrdersRow;