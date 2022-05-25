import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const ManageProducts = () => {
    const {data:products,isLoading}=useQuery('allproducts',()=>fetch('http://localhost:4000/tools').then(res=>res.json()))
    console.log(products)
    if(isLoading){
        return <div className='h-screen flex justify-center items-center'>
        <Loading />
        </div>
    }

    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-primary mb-10 '>Manage Products</h2>
            <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
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
             <Product  key={product._id} product={product} i={i} />
            ))} 
          </tbody>
        </table>
       {/* {deleteOrder && <CancelModal deleteOrder={deleteOrder} refetch={refetch} setDeleteOrder={setDeleteOrder}  />} */}
      </div>
            
        </div>
    );
};

export default ManageProducts;