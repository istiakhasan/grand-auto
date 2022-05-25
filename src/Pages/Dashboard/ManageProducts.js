import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';
import ProductDeleteModal from './ProductDeleteModal';

const ManageProducts = () => {
    const [deleteProduct,setDeleteProduct]=useState(null)
    const {data:products,isLoading,refetch}=useQuery('allproducts',()=>fetch('http://localhost:4000/tools').then(res=>res.json()))
    console.log(products)
    if(isLoading){
        return <div className='h-screen flex justify-center items-center'>
        <Loading />
        </div>
    }

    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-primary mb-10 '>Manage Products</h2>
            <div className="overflow-x-auto ">
        <table className="table table-zebra w-full px-10">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
           
             {products?.map((product, i) => (
             <Product setDeleteProduct={setDeleteProduct}  key={product._id} product={product} i={i} />
            ))} 
          </tbody>
        </table>
        {deleteProduct && <ProductDeleteModal deleteProduct={deleteProduct} refetch={refetch} setDeleteProduct={setDeleteProduct}  />} 
      </div>
            
        </div>
    );
};

export default ManageProducts;