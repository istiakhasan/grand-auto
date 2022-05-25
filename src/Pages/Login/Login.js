import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";
import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  //resester user with eamil and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  //updating user
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  //sign In with eamil and password
  const [signInWithEmailAndPassword, signInuser, signInloading, signInerror] =
    useSignInWithEmailAndPassword(auth);
  //genarate token
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [token] = useToken(user || googleUser || signInuser);

  //sign in with google
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  if (token) {
    console.log(user || signInuser || googleUser);
    navigate(from, { replace: true });
  }
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    if (!newUser) {
      signInWithEmailAndPassword(email, password);
      reset();
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });

      reset();
    }
  };
  if (loading || googleLoading || updating || signInloading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  let errorElement;
  if (error || googleError || signInerror || updateError) {
    errorElement = (
      <p className="text-center font-semibold text-red-500 text-sm">
        Error:{error?.message}
        {googleError?.message}
        {signInerror?.message}
        {updateError?.message}
      </p>
    );
  }

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Login/signup</title>
      </Helmet>
      <div className="hero min-h-screen bg-black ">
        <div className="hero-content flex-col-reverse   lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {newUser && (
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: "Providede a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be 6 charachter",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                <label className="label">
                  <span className="label-text-alt link link-hover">
                    Forgot password?
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  {newUser ? "Sign Up" : "Login"}
                </button>
              </div>
              <p className="text-center font-semibold">
                <small>
                  {!newUser
                    ? "Don't have a account?"
                    : "Already have a account?"}{" "}
                </small>
                <span
                  onClick={() => setNewUser(!newUser)}
                  className="text-primary font-semibold cursor-pointer"
                >
                  {!newUser ? "Register" : "Login"}
                </span>
              </p>
            </form>
            {errorElement}
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-primary mx-8 mb-10"
            >
              Google Sign In
            </button>
          </div>
          <div className="text-center lg:w-6/12 lg:text-left text-white">
            <h1 className="text-5xl font-bold">
              {!newUser ? "Login now!" : "Sign Up"}
            </h1>
            <p className="py-6">
              Welcome to Grand Auto service.Sign up and descover a great amount
              of new opportunities and services !
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
