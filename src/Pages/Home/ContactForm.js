import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const handleSendMessage=(e)=>{
           e.preventDefault()
           const name=e.target.name.value
           const email=e.target.email.value
           const subject=e.target.subject.value
           const message=e.target.message.value

           const data={
               name,email,subject,message
           }
           fetch('https://grandauto.herokuapp.com/sendmessage',{
             method:"POST",
             headers:{
               'content-type':'application/json'
             },
             body:JSON.stringify(data)
           })
           .then(res=>res.json())
           .then(data=>{
             console.log(data)
             toast.success("Message send successfully")
             e.target.reset()
           })
  }
  return (
    <div className=" mx-10 lg:mx-0">
      <h2 className="font-bold text-2xl text-primary mb-5 mt-10">GET IN TOUCH</h2>
      <form onSubmit={handleSendMessage}>
          <div className="lg:grid grid-cols-2 gap-10">

        <div className="form-control w-full mb-10 lg:mb-0">
          <input
            type="text"
            placeholder="Name"
            required
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
            <textarea name="message" rows="6" required className="textarea textarea-bordered text-lg" placeholder="Write Message"></textarea>
        </div>
      <button className="btn btn-primary mt-5 px-12 mb-10">SEND A MESSAGE</button>
      </form>
    </div>
  );
};

export default ContactForm;
