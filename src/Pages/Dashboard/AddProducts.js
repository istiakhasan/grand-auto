import { CloudUploadIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProducts = () => {
  const [sending, setSending] = useState(false);
  const [requiredImage, setRequiredImage] = useState("");
  const [inputError, setIputError] = useState("");
  const [quantiyError, setQuantityError] = useState("");
  const imageKey = "f7888621f8cab2adfc76adb7ffde620b";
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setQuantityError("");
    setIputError("");
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
          const name = e.target.name.value;
          const description = e.target.description.value;
          const available_quantity = parseInt(
            e.target.available_quantity.value
          );
          const minimum_quantity = parseInt(e.target.minimum_quantity.value);
          const price = e.target.price.value;
          if (minimum_quantity > available_quantity) {
            setSending(false);
            setQuantityError(
              "Available quantity should be bigger then minimum quantity"
            );
            return;
          }
          if (minimum_quantity < 0 || available_quantity < 0 || price < 0) {
            setSending(false);
            setIputError("Please enter a posetive number");
            return;
          }

          const product = {
            name,
            image,
            description,
            available_quantity,
            minimum_quantity,
            price,
          };

          fetch("https://grandauto.herokuapp.com/addproduct", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(product),
            })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setSending(false);
                toast.success("Add Product SuccessFully");
                e.target.reset();
              } else {
                toast.error("Failed to Add   Product");
              }
            });
        }
      });
  };

  let sendingElement;
  if (sending) {
    sendingElement = (
      <div>
        <p className="text-green-600 text-xs font-bold">Sending...</p>
        <progress class="progress w-36"></progress>
      </div>
    );
  }
  return (
    <div className="mx-5  mb-20">
      <h2 className="text-center text-3xl font-bold text-primary mb-5">
        Add A products
      </h2>
      <form onSubmit={handleSubmit} action="">
        <div className="lg:flex ">
          <div className="lg:mr-10 lg:w-4/12">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Products name</span>
              </label>
              <input required type="text" name="name" placeholder="Type here"
                className="input input-bordered input-primary w-full " />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Product description</span>
              </label>
              <textarea required name="description" rows="5" className="textarea textarea-primary"
                placeholder="Description"></textarea>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input required type="number" name="available_quantity" placeholder="Type here"
                className="input input-bordered input-primary w-full " />
            </div>
          </div>
          <div className="lg:w-96">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Minimum Quantity</span>
              </label>
              <input required type="number" name="minimum_quantity" placeholder="Type here"
                className="input input-bordered input-primary w-full " />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input required type="number" name="price" placeholder="Type here"
                className="input input-bordered input-primary w-full " />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label text-xs">Upload product image</label>
              <label htmlFor="imageupload"
                className="label cursor-pointer border bg-purple-200 border-primary rounded flex justify-center">
                <CloudUploadIcon className=" h-8 text-primary" />
              </label>
              <input id="imageupload" type="file" name="image"
                className="input input-bordered input-primary hidden w-full max-w-xs" />
              <p className="text-red-500 font-semibold">{requiredImage}</p>
            </div>
          </div>
        </div>
        <p className="text-red-500 font-bold ">{quantiyError}</p>
        <p className="text-red-500 font-bold ">{inputError}</p>
        <button className="btn-primary btn mt-5 px-20">submit</button>
        {sendingElement}
      </form>
    </div>
  );
};

export default AddProducts;
