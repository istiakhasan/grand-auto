import React, { useState }  from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [sending,setSending]=useState(false)

  const {
    data: myInfo,
    isLoading,
     error,
    refetch,
  } = useQuery(`profile-information${user.email}`, () =>
    fetch(`https://grand-auto-server.onrender.com/profile-details/?email=${user.email}`,{
      headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(
      res => res.json()
    )
  );
  
if(error){
    console.log(error)
}
 
  if (isLoading) {
    
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true)
    const education = e.target.education.value;
    const city = e.target.city.value;
    const phone = e.target.phone.value;
    const linkedin = e.target.linkedin.value;
    const facebook = e.target.facebook.value;
    const info = {
      education,
      city,
      phone,
      linkedin,
      facebook,
      name: user.displayName,
      email: user.email,
    };
    fetch(`https://grand-auto-server.onrender.com/profile-details/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data){
          toast.success("Update successfully")
          setSending(false)
          e.target.reset()
          refetch()
        }
     
      
      });
  };
  let sendingElement;
  if(sending){
    sendingElement= <div className="flex flex-col  justify-center items-center mt-2">
      <p className="text-green-600 text-xs font-bold">Sending...</p>
      <progress class="progress w-36"></progress>
    </div>
  }
  return (
    <div>
      <h2 className="font-semibold text-center text-2xl text-primary">
        My Profile Details
      </h2>
      <div className="lg:grid lg:grid-cols-3  mt-12">
        <div className="text-center  ">
          <div className="avatar">
            <div className="lg:w-40 w-20    rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt=""  src={ user?.photoURL|| "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" } />
            </div>
          </div>

          <p className="mt-5 font-semibold text-xl">{user.displayName}</p>
        </div>
        <div className="col-span-2 mt-10 lg:mt-0">
          <div className="w-[90%]">
            <p className="text-2xl font-semibold">Information </p>
            <div className="divider"></div>
            <div className="grid lg:grid-cols-2">
              <div>
                <p>Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p>Phone</p>
                <p>{myInfo?.phone || "empty"}</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-2xl font-semibold">Education</p>
              <div className="divider"></div>
              <div>
                <div>
                  <p>Collage</p>
                  <p>{myInfo?.education || "empty"}</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-2xl font-semibold">Address/City</p>
              <div className="divider"></div>
              <div>
                <div>
                  <p>City</p>
                  <p>{myInfo?.city || "empty"}</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-2xl font-semibold">Social Link</p>
              <div className="divider"></div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div>
                  <p>Facebook</p>
                  <a className="text-blue-600 hover:text-blue-800 underline" href={myInfo?.facebook}>
                    {!myInfo ? "empty":" Redirect to my facebook profile"}
                  </a>
                </div>
                <div>
                  <p>LinkedIn</p>

                  <a className="text-blue-600 hover:text-blue-800 underline" href={myInfo?.linkedin}>
                    {!myInfo ?"empty":" Redirect to my linkedIn profile"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-28">
        <h2 className="text-primary text-xl lg:text-center font-semibold">
          Add/Update Information
        </h2>
        <div className="lg:w-10/12 mx-auto">
          <form className="shadow-2xl py-20 rounded-3xl" onSubmit={handleSubmit}>
            <div className="lg:flex p-5 lg:p-0  rounded-md py-8 lg:px-6">
              <div className="lg:mr-10 lg:w-6/12 ">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Education</span>
                  </label>
                  <input required type="text" name="education" placeholder="Enter your education"
                    className="input input-bordered input-primary w-full " />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input required type="text" name="city" placeholder="Enter your city"
                    className="input input-bordered input-primary w-full " />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input required type="text" name="phone" placeholder="Enter your phone number"
                    className="input input-bordered input-primary w-full " />
                </div>
              </div>
              <div className="lg:w-6/12  ">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">LinkedIn Link</span>
                  </label>
                  <input required type="text" name="linkedin" placeholder="Enter your linkedIn profile link"
                    className="input input-bordered input-primary w-full " />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Facebook Link</span>
                  </label>
                  <input required type="text" name="facebook" placeholder="Enter your facebook profile link"
                    className="input input-bordered input-primary w-full " />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary lg:ml-auto mx-auto block mt-5 ">
              Update Information
            </button>
            {sendingElement}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
