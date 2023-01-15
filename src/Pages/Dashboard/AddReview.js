import { CloudUploadIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import auth from "../../firebase.init";


const AddReview = () => {
  const [user] = useAuthState(auth);
  const [requiredImage, setRequiredImage] = useState("");
  const [sending, setSending] = useState(false)
  const imageKey = "f7888621f8cab2adfc76adb7ffde620b";
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true)
    const image = e.target.image.files[0];
    if (!image) {
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
          const rating = parseInt(e.target.rating.value)
          const review = {
            name: user.displayName,
            company: e.target.company.value,
            rating,
            comment: e.target.comment.value,
            image: image,
          }
          fetch('https://grand-auto-server.onrender.com/review', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`

              },
              body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                toast.success('Review successfully')
                setSending(false)
                e.target.reset()
              } else {
                toast.error('Failed to post  review');
              }
            })
        }
      });
  };
  let sendingElement;
  if(sending){
    sendingElement= <div>
      <p className="text-green-600 text-xs font-bold">Sending...</p>
      <progress class="progress w-36"></progress>
    </div>
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl text-primary text-center">
        Review Our Products
      </h2>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="lg:flex">
            <div className="lg:mr-10 lg:w-4/12">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Whats your company name?</span>
                </label>
                <input required type="text" name="company" placeholder="Type here"
                  className="input input-bordered input-primary w-full " />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Enter your Comments</span>
                </label>
                <textarea required name="comment" rows="5" className="textarea textarea-primary"
                  placeholder="Comment"></textarea>
              </div>
            </div>
            <div className="lg:w-96">
              <div className="form-control w-full max-w-xs">
                <label className="label text-xs">Upload your image</label>
                <label htmlFor="imageupload"
                  className="label cursor-pointer border bg-purple-200 border-primary rounded flex justify-center">
                  <CloudUploadIcon className=" h-8 text-primary" />
                </label>
                <input id="imageupload" type="file" name="image"
                  className="input input-bordered input-primary hidden w-full max-w-xs" />
                <p className="text-red-500 font-semibold">{requiredImage}</p>
              </div>
              <div className="form-control w-full mt-10 ">
                <label className="label">
                  <span className="label-text">Enter your rating</span>
                </label>
                <div className="rating">
                  <input required type="radio" value="1" name="rating" className="mask mask-star-2 bg-orange-400" />
                  <input required type="radio" value="2" name="rating" className="mask mask-star-2 bg-orange-400" />
                  <input required type="radio" value="3" name="rating" className="mask mask-star-2 bg-orange-400" />
                  <input required type="radio" value="4" name="rating" className="mask mask-star-2 bg-orange-400" />
                  <input required type="radio" value="5" name="rating" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
              <button className="btn-primary btn mt-5 w-6/12">submit</button>
              {sendingElement}
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddReview;
