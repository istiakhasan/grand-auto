import React from 'react';
import { useQuery } from 'react-query';
import Tool from './Tool';

const Tools = () => {

    const{data:tools,isLoading}=useQuery('tools',()=>fetch('http://localhost:4000/availabletools').then(res=>res.json()))

    if(isLoading){
        return ;
    }
   
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-4xl text-primary font-bold my-20'>Our Tools</h2>

            <div className='grid  lg:grid-cols-3 mx-5 lg:mx-0 gap-5'>
                {
                    tools.map(tool=><Tool key={tool._id} tool={tool} />)
                }
            </div>
            
        </div>
    );
};

export default Tools;