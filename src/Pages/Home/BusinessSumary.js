import { DesktopComputerIcon, FlagIcon, UserGroupIcon } from "@heroicons/react/solid";
import React from "react";
import SummaryCard from "./SummaryCard";


const BusinessSumary = () => {
   
  return (
    <div className="max-w-7xl mx-auto">
        <h2 className='text-center text-4xl text-primary font-bold my-20'>Our Business Summary</h2>
       
      <div className="grid lg:grid-cols-3 gap-8">

            <SummaryCard title="Our Clients" count="230" bgColor="bg-green-600"> <UserGroupIcon className="w-30 h-32 mx-auto text-primary"/> </SummaryCard>        
            <SummaryCard title="Countries" count="50" bgColor="bg-purple-400"> <FlagIcon className="w-30 h-32 mx-auto text-primary"/> </SummaryCard>        
            <SummaryCard title="Total Projects" count="230" bgColor="bg-[#6a91f9]"> <DesktopComputerIcon className="w-30 h-32 mx-auto text-primary"/> </SummaryCard>        
               
           
        </div>
  
      </div>
  
  );
};

export default BusinessSumary;
