import React from "react";

const ContactForm = () => {
  return (
    <div className="my-20 mx-10 lg:mx-0">
      <h2 className="font-bold text-2xl">GET IN TOUCH</h2>
      <form action="">
          <div className="lg:grid grid-cols-2 gap-10">

        <div class="form-control w-full mb-10 lg:mb-0">
          <input
            type="text"
            placeholder="Name"
            name="name"
            class="input input-bordered w-full text-lg "
            />
        </div>
        <div class="form-control w-full ">
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            class="input input-bordered w-full text-lg"
            />
        </div>
            </div>
            <div class="form-control w-full my-10">
          <input
            type="text"
            placeholder="Subject"
            required
            name="subject"
            class="input input-bordered w-full text-lg"
            />
        </div>
            <div class="form-control w-full ">
            <textarea name="message" rows="6" class="textarea textarea-bordered text-lg" placeholder="Write Message"></textarea>
        </div>
      </form>
      <button className="btn btn-primary mt-5 px-12">SEND A MESSAGE</button>
    </div>
  );
};

export default ContactForm;
