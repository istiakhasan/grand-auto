import React from 'react';

const Product = ({product,i,setDeleteProduct}) => {
    return (
     
        <tr>
        <th>{i + 1}</th>
        <td>
        <div class="avatar">
  <div class="w-14 rounded">
    <img src={product.image} />
  </div>
</div>
        </td>
        <td>{product.name}</td>
        
        <td>${product.price}</td>
        <td>{product.available_quantity}</td>
        <td>
        <label onClick={()=>setDeleteProduct(product)} className='btn  btn-xs bg-red-600 hover:bg-red-800 font-bold border-0' for="productDeleteModal">Delete</label>
            
        </td>
      </tr>
    );
};

export default Product;