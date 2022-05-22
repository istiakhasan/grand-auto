import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Review from "./Review";

const Reviews = () => {
    const  reviewData=[
        {
            id:1,
            rating:5,
            name:"Musarof",
            comment:"I want to say that their service is very nice and user friendly",
            image:"https://api.lorem.space/image/face?hash=92310",company:"Expo Crop"
        },
        {
            id:2,
            rating:4,
            name:"Musarof",
            comment:"I want to say that their service is very nice and user friendly",
            image:"https://api.lorem.space/image/face?hash=92310",company:"Expo Crop"
        },
        {
            id:3,
            rating:5,
            name:"Musarof",
            comment:"I want to say that their service is very nice and user friendly",
            image:"https://api.lorem.space/image/face?hash=92310",company:"Expo Crop"
        },
        {
            id:4,
            rating:3,
            name:"Musarof",
            comment:"I want to say that their service is very nice and user friendly",
            image:"https://api.lorem.space/image/face?hash=92310",company:"Expo Crop"
        },
    ]
 
  return (
    <div>
      <h2 className="text-center text-4xl text-primary font-bold my-20 ">
        Customer Reviews
      </h2>

      <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {
              reviewData.map(review=><Review review={review} />)
          }
     
      </div>
    </div>
  );
};

export default Reviews;
