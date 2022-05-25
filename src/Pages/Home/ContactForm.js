import React from "react";

const ContactForm = () => {
  return (
    <div className=" mx-10 lg:mx-0">
      <h2 className="font-bold text-2xl text-primary mb-5 mt-10">GET IN TOUCH</h2>
      <form action="">
          <div className="lg:grid grid-cols-2 gap-10">

        <div className="form-control w-full mb-10 lg:mb-0">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered w-full text-lg "
            />
        </div>
        <div className="form-control w-full ">
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            className="input input-bordered w-full text-lg"
            />
        </div>
            </div>
            <div className="form-control w-full my-10">
          <input
            type="text"
            placeholder="Subject"
            required
            name="subject"
            className="input input-bordered w-full text-lg"
            />
        </div>
            <div className="form-control w-full ">
            <textarea name="message" rows="6" className="textarea textarea-bordered text-lg" placeholder="Write Message"></textarea>
        </div>
      </form>
      <button className="btn btn-primary mt-5 px-12 mb-10">SEND A MESSAGE</button>
    </div>
  );
};

export default ContactForm;
