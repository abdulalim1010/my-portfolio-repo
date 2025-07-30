import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router";  // react-router থেকে NavLink
import { AuthContext } from "./AuthContext";


const SignIn = () => {
  const { login } = useContext(AuthContext); // context থেকে login function নেওয়া
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
       console.log("Form data:", data);
    try {
      await login(data.email, data.password); // context থেকে login call
      toast.success("Login successful!");
      reset();
      // redirect চাইলে এখানে করতে পারো, যেমন:
      // navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <Toaster />
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Sign In 🔐</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
         
          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-success w-full flex justify-center gap-2">
            <span>Login</span> 🔓
          </button>
        </form>
      </div>
      <h1 className="mt-4 text-center">Don't have an account? <NavLink to="/sign-up" className="text-indigo-600 underline">Sign Up</NavLink></h1>
    </div>
  );
};

export default SignIn;
