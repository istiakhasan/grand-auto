import React from 'react';

const Product = ({product,i,setDeleteProduct}) => {
return (
<tr>
  <th>{i + 1}</th>
  <td>
    <div className="avatar">
      <div className="w-14 rounded">
        <img alt='' src={product.image} />
      </div>
    </div>
  </td>
  <td>{product.name}</td>

  <td>${product.price}</td>
  <td>{product.available_quantity}</td>
  <td>
    <label onClick={()=>setDeleteProduct(product)} className='btn btn-xs bg-red-600 hover:bg-red-800 font-bold border-0'
      htmlFor="productDeleteModal">Delete</label>

  </td>
</tr>
);
};

export default Product;