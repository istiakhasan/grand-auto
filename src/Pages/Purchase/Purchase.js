import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PurchaseModal from "./PurchaseModal";

const Purchase = () => {
   
     const [inputValue,setInputValue]=useState(0)
     const [inputError,setInputError]=useState('')
     const [isActive,setIsActive]=useState(false)
     const inpurRef=useRef()
   
     
     const {toolsId}=useParams();
     const [isOpen,setIsOpen]=useState(false)
     const url=`http://localhost:4000/tools/${toolsId}`
     const {data:tool,isLoading,refetch}=useQuery(`tool${toolsId}`,()=>fetch(url).then(res=>res.json()))
     
     const [newOrderQuantity,setNewOrderQuantity]=useState(tool?.minimum_quantity)
     
     
     if(isLoading){
       
       return ;
      }
  
    const handleChange=(e)=>{
      const value=parseInt(e.target.value)
      setIsActive(false)
    
      if(value<tool.minimum_quantity){
        
        setIsActive(false)
        setInputError(`Quantity is less then minimum  quantity`)
        return
      }
      
      if(value>tool.available_quantity){
         
        setIsActive(false)
          setInputError(`quantity is more than available quantity`)
          return
      }
    
      setInputValue(value)
     
      setIsActive(true)
      setInputError('')
     
      
      
    }
    

     

    const handleSubmit = async(e) => {
           setNewOrderQuantity(inputValue)
           inpurRef.current.value=" "
           setIsActive(false)
          
    }
  return (
    <div>
      
      <div className="hero min-h-screen bg-base-200">
     
        <div className=" grid lg:grid-cols-2 ">
          <img
            src={tool.image}
            className="flex-1 max-w-md rounded-lg shadow-2xl mx-auto"
            alt=""
          />
          <div className="px-5">
         
            <h1 className="text-5xl font-bold">{tool.name}</h1>
            <p className="text-2xl">Id:{tool._id}</p>
            <p className="py-4 text-lg">
            {tool.description}
            </p>
            
            <p className="font-semibold">Available  Quantity:<span className="text-green-800 font-bold">{tool.available_quantity}</span></p>
        
            <p className="text-2xl font-bold text-green-800">${tool.price} <span className="text-sm text-black font-semibold">/per</span></p>
         
            <div className="form-control w-full max-w-xs">
                <div className="flex">

                <input ref={inpurRef}  onChange={handleChange} placeholder={tool.minimum_quantity} type="text" className="input mr-3 input-bordered input-primary w-full max-w-xs" />
                <button disabled={!isActive || isNaN(inputValue)}  onClick={handleSubmit} className="btn btn-success">Add Quantity</button>
                </div>
                <label className="label">
                <p className="font-semibold">Order Quantity:<span className="text-green-800 font-bold">{newOrderQuantity || tool.minimum_quantity}</span></p>
                
                </label>
                <p className="text-red-700 font-semibold mt-2">{inputError}</p>
               
              </div>
              <div className="mt-2">

              
              </div>
            <label onClick={()=>setIsOpen(true)} htmlFor="purchaseModal" className="btn btn-primary mt-5">Order Now</label>
          
            
          </div>
        </div>
      </div>
     {isOpen && <PurchaseModal refetch={refetch} setIsOpen={setIsOpen} newOrderQuantity={newOrderQuantity} tool={tool} />}
    </div>
  );
};

export default Purchase;
