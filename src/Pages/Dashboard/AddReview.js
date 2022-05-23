import { CloudUploadIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [requiredImage, setRequiredImage] = useState("");
  const imageKey = "f7888621f8cab2adfc76adb7ffde620b";
  const handleSubmit = (e) => {
    e.preventDefault();
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
          const rating=parseInt(e.target.rating.value)
          const review = {
            name: user.displayName,
            company: e.target.company.value,
            rating,
            comment: e.target.comment.value,
            image: image,
          }
          fetch('http://localhost:4000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
               
            },
            body: JSON.stringify(review)
        })
        .then(res =>res.json())
        .then(inserted =>{
            if(inserted.insertedId){
                toast.success('Review successfully')
                e.target.reset()
            }
            else{
                toast.error('Failed to post  review');
            }
        })
        }
      });
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl text-primary text-center">
        Review Our Products
      </h2>

      <div>
        <form   onSubmit={handleSubmit} action="">
         <div className="flex">
         <div className="mr-10 w-4/12">
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Whats your company name?</span>
              </label>
              <input
                required
                type="text"
                name="company"
                placeholder="Type here"
                class="input input-bordered input-primary w-full "
              />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Enter your Comments</span>
              </label>
              <textarea
                required
                name="comment"
                rows="5"
                class="textarea textarea-primary"
                placeholder="Comment"
              ></textarea>
            </div>
          </div>
          <div className="w-96">
            <div class="form-control w-full max-w-xs">
              <label class="label text-xs">Upload your image</label>
              <label
                htmlFor="imageupload"
                class="label cursor-pointer border bg-purple-200 border-primary rounded flex justify-center"
              >
                <CloudUploadIcon className=" h-8 text-primary" />
              </label>
              <input
                id="imageupload"
                type="file"
                name="image"
                class="input input-bordered input-primary hidden w-full max-w-xs"
              />
              <p className="text-red-500 font-semibold">{requiredImage}</p>
            </div>
            <div class="form-control w-full mt-10 ">
              <label class="label">
                <span class="label-text">Enter your rating</span>
              </label>
              <div class="rating">
                <input
                  required
                  type="radio"
                  value="1"
                  name="rating"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  required
                  type="radio"
                  value="2"
                  name="rating"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  required
                  type="radio"
                  value="3"
                  name="rating"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  required
                  type="radio"
                  value="4"
                  name="rating"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  required
                  type="radio"
                  value="5"
                  name="rating"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <button className="btn-primary btn mt-5 w-6/12">submit</button>
          </div>
         </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddReview;
