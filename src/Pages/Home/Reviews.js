import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Review from "./Review";

const Reviews = () => {
    const  reviewData=[
        {
            id:1,
            rating:5,
            name:"Konnor Hahn",
            comment:"So surprised when Emmy reached out to me regarding my review of order number 56666637. It was a very small inconvenience, but I understand that for people who aren't internet savvy, it's important to give them easy instructions! Your customer service ROCKS! ",
            image:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            company:"Expo Crop"
        },
        {
            id:2,
            rating:4,
            name:"Jolie Dixon",
            comment:"I kept receiving different emails with tracking changes. The items were in stock but apparently that was not true. The parts were suppose to be here and I waited and even paid for the shipping.",
            image:"https://media.istockphoto.com/photos/enjoying-the-coffee-aroma-picture-id593315336?k=20&m=593315336&s=170667a&w=0&h=HcyJciQMxEaQitJ7Rc9G71DBd7t3V4ZU2nLguSaSzT8=",company:"Expo Crop"
        },
        {
            id:3,
            rating:5,
            name:"Ty Martin",
            comment:"Bought a non oe grill from carparts.com for my 300c to mod and was unaware that it did not include installation hardware along with having a slightly different mounting setup from my previous grill. ",
            image:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",company:"Expo Crop"
        },
        {
            id:4,
            rating:3,
            name:"Gavin Cline",
            comment:"I recently placed my first order with CarParts, which was for a Honda fog lamp. It arrived 3 days later than promised and the bulb was missing. I was disappointed and gave them a 2 rating. ",
            image:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",company:"Expo Crop"
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
