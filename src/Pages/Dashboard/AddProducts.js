import { CloudUploadIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const [requiredImage, setRequiredImage] = useState("");
    const [inputError, setIputError] = useState("");
    const [quantiyError,setQuantityError]=useState('')
    const imageKey = "f7888621f8cab2adfc76adb7ffde620b";
    const handleSubmit = (e) => {
      e.preventDefault();
      setQuantityError("")
      setIputError("")
      const image = e.target.image.files[0];
      if (!image) {
        console.log("jacche");
        setRequiredImage("* Please Attach a image");
        return;
      }
      setRequiredImage("");
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            const image = result.data.url;
            const   name= e.target.name.value
           const  description= e.target.description.value
           const  available_quantity=e.target.available_quantity.value
           const  minimum_quantity=e.target.minimum_quantity.value
           const  price=e.target.price.value
           if(minimum_quantity>available_quantity){
                   setQuantityError("Available quantity should be bigger then minimum quantity")
                   return;
           }
           if(minimum_quantity<0 || available_quantity<0 || price<0){
             setIputError("Please enter a posetive number")
             return ;
           }
        
            
            const product = {
            name,image,description,available_quantity,minimum_quantity,price
            }
            
            fetch('http://localhost:4000/addproduct', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
                 
              },
              body: JSON.stringify(product)
          })
          .then(res =>res.json())
          .then(data =>{
              if(data.insertedId){
                  toast.success('Add Product SuccessFully')
                  e.target.reset()
              }
              else{
                  toast.error('Failed to Add   Product');
              }
          })
          }
        });
    };
    return (
        <div>
            <h2 className='text-center text-2xl text-primary'>Add A products</h2>
            <form   onSubmit={handleSubmit} action="">
         <div className="flex">
         <div className="mr-10 w-4/12">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Products name</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered input-primary w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product description</span>
              </label>
              <textarea
                required
                name="description"
                rows="5"
                className="textarea textarea-primary"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                required
                type="number"
                name="available_quantity"
                placeholder="Type here"
                className="input input-bordered input-primary w-full "
              />
            </div>
          </div>
          <div className="w-96">
         
          <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Minimum Quantity</span>
              </label>
              <input
                required
                type="number"
                name="minimum_quantity"
                placeholder="Type here"
                className="input input-bordered input-primary w-full "
              />
            </div>
          <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                required
                type="number"
                name="price"
                placeholder="Type here"
                className="input input-bordered input-primary w-full "
              />
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label text-xs">Upload product image</label>
              <label
                htmlFor="imageupload"
                className="label cursor-pointer border bg-purple-200 border-primary rounded flex justify-center"
              >
                <CloudUploadIcon className=" h-8 text-primary" />
              </label>
              <input
                id="imageupload"
                type="file"
                name="image"
                className="input input-bordered input-primary hidden w-full max-w-xs"
              />
              <p className="text-red-500 font-semibold">{requiredImage}</p>
            </div>
         
          </div>
         </div>
         <p className='text-red-500 font-bold '>{quantiyError}</p>
         <p className='text-red-500 font-bold '>{inputError}</p>
            <button className="btn-primary btn mt-5 px-20">submit</button>
          
        </form>
            
        </div>
    );
};

export default AddProducts;