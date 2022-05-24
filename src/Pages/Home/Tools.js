import React from 'react';
import { useQuery } from 'react-query';
import Tool from './Tool';

const Tools = () => {
    // const tools=[
    //     {
        
    //     name:"kashem",
    //     image:"https://media.istockphoto.com/photos/motorcycle-clutch-with-gears-picture-id521976870?k=20&m=521976870&s=612x612&w=0&h=rG_U3vtqIKq0yMBLnghZtvoUV_3pUWLVezbon_17S0s=",
    //     description:"This is description one",
    //     quantity:300,
    //     minimum_order:100,
    //     price:500
    //  },
    //     {
        
    //     name:"kashem",
    //     image:"https://media.istockphoto.com/photos/motorcycle-clutch-with-gears-picture-id521976870?k=20&m=521976870&s=612x612&w=0&h=rG_U3vtqIKq0yMBLnghZtvoUV_3pUWLVezbon_17S0s=",
    //     description:"This is description one",
    //     quantity:300,
    //     minimum_order:100,
    //     price:500
    //  },
    //     {
        
    //     name:"kashem",
    //     image:"https://media.istockphoto.com/photos/motorcycle-clutch-with-gears-picture-id521976870?k=20&m=521976870&s=612x612&w=0&h=rG_U3vtqIKq0yMBLnghZtvoUV_3pUWLVezbon_17S0s=",
    //     description:"This is description one",
    //     quantity:300,
    //     minimum_order:100,
    //     price:500
    //  },
    //     {
        
    //     name:"kashem",
    //     image:"https://media.istockphoto.com/photos/motorcycle-clutch-with-gears-picture-id521976870?k=20&m=521976870&s=612x612&w=0&h=rG_U3vtqIKq0yMBLnghZtvoUV_3pUWLVezbon_17S0s=",
    //     description:"This is description one",
    //     quantity:300,
    //     minimum_order:100,
    //     price:500
    //  },
    //     {
        
    //     name:"kashem",
    //     image:"https://media.istockphoto.com/photos/motorcycle-clutch-with-gears-picture-id521976870?k=20&m=521976870&s=612x612&w=0&h=rG_U3vtqIKq0yMBLnghZtvoUV_3pUWLVezbon_17S0s=",
    //     description:"This is description one",
    //     quantity:300,
    //     minimum_order:100,
    //     price:500
    //  },
    //     {
        
    //     name:"kashem",
    //     image:"https://media.istockphoto.com/photos/motorcycle-clutch-with-gears-picture-id521976870?k=20&m=521976870&s=612x612&w=0&h=rG_U3vtqIKq0yMBLnghZtvoUV_3pUWLVezbon_17S0s=",
    //     description:"This is description one",
    //     quantity:300,
    //     minimum_order:100,
    //     price:500
    //  },
    // ]
    const{data:tools,isLoading}=useQuery('tools',()=>fetch('http://localhost:4000/availabletools').then(res=>res.json()))

    if(isLoading){
        return ;
    }
   
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-4xl text-primary font-bold my-20'>Our Tools</h2>

            <div className='grid  lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool=><Tool key={tool._id} tool={tool} />)
                }
            </div>
            
        </div>
    );
};

export default Tools;