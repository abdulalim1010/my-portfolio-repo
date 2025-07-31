import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router";
import { AuthContext } from "./AuthContext";


const SignUp = () => {
  const { register: registerUser } = useContext(AuthContext);  // get register function from context

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
  try {
    const userCredential = await registerUser(data.email, data.password); // login returns userCredential
    const user = userCredential.user;

    // Save to MongoDB (your backend)
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.displayName || "No Name",
        email: user.email,
        role: "user",
      }),
    });

    toast.success("sign up successful!");
    reset();
  } catch (error) {
    toast.error(error.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-indigo-200 p-4">
      <Toaster />
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Sign Up 🚀
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full flex justify-center gap-2"
          >
            <span>Register</span> ✅
          </button>
        </form>
          <NavLink
          to="/signin"
          className="underline font-semibold hover:text-indigo-300"
        >
      <p className="mt-4 text-center text-black">
        Already have an account?{" "}
      
          Login here
        
          </p>
          </NavLink>
      </div>

    </div>
  );
};

export default SignUp;
