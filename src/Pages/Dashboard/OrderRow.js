import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({i,item,setDeleteOrder}) => {
    return (
        <>
        <tr>
        <th>{i + 1}</th>
        <td>{item.customerName}</td>
        <td>{item.email}</td>
        <td>{item.toolsName}</td>
        <td>{item.orderQuantity}</td>
        <td>{item.totalPrice}</td>
        <td>
          <label onClick={()=>setDeleteOrder(item)} for="cancelModal" class="btn bg-red-600 border-0 hover:bg-red-800 text-white font-semibold btn-xs mr-2 ">Cancel</label>
          <Link to={`/dashboard/payment/${item._id}`} class="btn btn-active btn-primary font-semibold text-white btn-xs">Pay</Link>
        </td>
      </tr><div>
            
        </div>
        </>
    );
};

export default OrderRow;