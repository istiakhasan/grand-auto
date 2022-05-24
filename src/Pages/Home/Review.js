import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import dividerimg from '../../assest/quote.svg'

const Review = ({review}) => {
    const {rating}=review
    
  return (
    <div className="card overflow-visible h-auto   bg-base-100 shadow-xl  mt-32">
      <div className="avatar mx-auto mt-[-50px]">
        <div className="w-24 rounded-full ">
          <img src={review.image} />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{review.name}</h2>
        <p>{review.company}</p>
        <div className="divider h-auto text-green">
            <img className=" h-20 " src={dividerimg} alt="" />
        </div>
        <p>{review.comment}</p>
        <div className="card-actions ">
            <div className="flex">
                {
                    [...Array(rating).keys()].map((number,i)=><StarIcon key={i}  className="w-6 text-yellow-600" />)
                }
               

          
        
            </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
