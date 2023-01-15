import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Review from "./Review";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const {data:reviewData,isLoading}=useQuery('allreview',()=>fetch('https://grand-auto-server.onrender.com/review').then(res=>res.json()))
  
 if(isLoading){
   return <div className="flex justify-center items-center h-20">
     <Loading />
   </div>
 }
  return (
    <div>
      <h2 className="text-center text-4xl text-primary font-bold my-20 ">
        Customer Reviews
      </h2>
      <div className="grid mx-5 lg:mx-auto lg:grid-cols-3 gap-10 max-w-7xl ">
        {
        reviewData.map(review=>
        <Review key={review._id} review={review} />)
        }

      </div>
    </div>
  );
};

export default Reviews;
