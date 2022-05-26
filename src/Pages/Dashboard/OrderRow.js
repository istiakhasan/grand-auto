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
            <td className='text-right'>
              {!item.pay && <label onClick={()=>setDeleteOrder(item)} htmlFor="cancelModal" className="btn bg-red-600
                border-0 hover:bg-red-800 text-white font-semibold btn-xs mr-2 ">Cancel</label>}
              {item.pay? <span className='text-green-500 font-bold'>Paid</span> :
              <Link to={`/dashboard/payment/${item._id}`}
                className="btn btn-active btn-primary font-semibold text-white btn-xs">Pay</Link>}
              {item.transectionId && <p className='text-xs text-orange-600 font-bold'>Transaction id <br /> <span
                  className='text-success font-semibold'>{item.transectionId}</span></p>}
            </td>
          </tr>
        </>
    );
};

export default OrderRow;