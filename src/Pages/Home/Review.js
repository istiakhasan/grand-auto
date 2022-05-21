import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import dividerimg from '../../assest/quote.svg'

const Review = ({review}) => {
    const {rating}=review
    console.log(rating,review)
  return (
    <div class="card overflow-visible h-auto   bg-base-100 shadow-xl  mt-32">
      <div class="avatar mx-auto mt-[-50px]">
        <div class="w-24 rounded-full ">
          <img src={review.image} />
        </div>
      </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{review.name}</h2>
        <p>{review.company}</p>
        <div class="divider h-auto text-green">
            <img className=" h-20 " src={dividerimg} alt="" />
        </div>
        <p>{review.comment}</p>
        <div class="card-actions ">
            <div className="flex">
                {
                    [...Array(rating).keys()].map(number=><StarIcon className="w-6 text-yellow-600" />)
                }
               

          
        
            </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
