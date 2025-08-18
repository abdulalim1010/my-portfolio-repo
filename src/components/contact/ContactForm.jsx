import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://my-portfolio-server-theta-ivory.vercel.app/contacts", data);
      if (res.data.insertedId) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Player
  autoplay
  loop
  src="https://assets9.lottiefiles.com/packages/lf20_Cc8Bpg.json
" 
  style={{ height: "250px", width: "250px" }}
/>
      <Toaster />
      <div className="w-full max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📬 Contact With Me</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full input input-bordered"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full input input-bordered"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+8801XXXXXXXXX"
              className="w-full input input-bordered"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              className="w-full textarea textarea-bordered"
              rows="4"
              placeholder="Your message"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Send Message <FaPaperPlane className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
