import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const MyProfile = () => {
  const [user] = useAuthState(auth);

  const {
    data: myInfo,
    isLoading,
    refetch,
  } = useQuery("profile-info", () =>
    fetch(`http://localhost:4000/profile-details/?email=${user.email}`).then(
      (res) => res.json()
    )
  );
  console.log(myInfo);
  if (isLoading) {
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
    fetch(`http://localhost:4000/profile-details/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          toast.error(
            "Information matched,your should update your all information "
          );
          return;
        }
        if (data.upsertedCount || data.modifiedCount) {
          toast.success("Update profile  successfully");
          e.target.reset();
          refetch();
        } else {
          toast.error("Failed to update");
        }
        console.log(data);
      });
  };
  return (
    <div>
      <h2 className="font-semibold text-center text-2xl text-primary">
        My Profile Details
      </h2>
      <div className="grid grid-cols-3 mt-12">
        <div className="text-center">
          <div class="avatar">
            <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                alt=""
                src={
                  user?.phoneNumber ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
              />
            </div>
          </div>

          <p className="mt-5 font-semibold text-xl">{user.displayName}</p>
        </div>
        <div className="col-span-2">
          <div className="w-[90%]">
          <p className="text-2xl font-semibold">Information </p>
          <div className="divider"></div>
          <div className="grid grid-cols-2">
            <div>
              <p>Email</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p>Phone</p>
              <p>{myInfo.phone}</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-2xl font-semibold">Education</p>
            <div className="divider"></div>
            <div>
              <div>
                <p>Collage</p>
                <p>{myInfo.education}</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-2xl font-semibold">Address/City</p>
            <div className="divider"></div>
            <div>
              <div>
                <p>City</p>
                <p>{myInfo.city}</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-2xl font-semibold">Social Link</p>
            <div className="divider"></div>
            <div className="grid grid-cols-2">
              <div>
                <p>Facebook</p>
                <a
                  className="text-blue-600 hover:text-blue-800 underline"
                  href={myInfo.facebook}
                >
                  Redirect to my facebook profile
                </a>
              </div>
              <div>
                <p>LinkedIn</p>

                <a
                  className="text-blue-600 hover:text-blue-800 underline"
                  href={myInfo.linkedin}
                >
                  Redirect to my linkedIn profile
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="my-28">
        <h2 className="text-primary text-xl font-semibold">
          Add/Update Information
        </h2>
        <div className="w-10/12">
          <form className="" onSubmit={handleSubmit} action="">
            <div className="flex shadow-2xl rounded-md py-8 px-6">
              <div className="mr-10 w-6/12">
                <div class="form-control w-full ">
                  <label class="label">
                    <span class="label-text">Education</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="education"
                    placeholder="Enter your education"
                    class="input input-bordered input-primary w-full "
                  />
                </div>
                <div class="form-control w-full ">
                  <label class="label">
                    <span class="label-text">City</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    class="input input-bordered input-primary w-full "
                  />
                </div>
                <div class="form-control w-full ">
                  <label class="label">
                    <span class="label-text">Phone Number</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    class="input input-bordered input-primary w-full "
                  />
                </div>
              </div>
              <div className="w-6/12">
                <div class="form-control w-full ">
                  <label class="label">
                    <span class="label-text">LinkedIn Link</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="linkedin"
                    placeholder="Enter your linkedIn profile link"
                    class="input input-bordered input-primary w-full "
                  />
                </div>
                <div class="form-control w-full ">
                  <label class="label">
                    <span class="label-text">Facebook Link</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="facebook"
                    placeholder="Enter your facebook profile link"
                    class="input input-bordered input-primary w-full "
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary ml-auto block mt-5 "
            >
              Add Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
