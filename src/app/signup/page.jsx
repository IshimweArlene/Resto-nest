"use client";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { registerUser } from "../../../services/api";

const signUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await registerUser({ name, email, password });
      console.log("Signup success", data);
    } catch (err) {
      console.error(err);
      setError("Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex-1 flex flex-col items-center min-h-screen bg-white px-4 sm:px-6 lg:px-0">
        <form
          className="w-full max-w-3xl bg-[#FFF6EA] px-4 sm:px-8 py-8 sm:py-10 rounded-lg my-10 sm:my-16 lg:my-20"
          onSubmit={handleSubmit}
        >
          <div className="text-center mt-4 sm:mt-6 mb-8 sm:mb-10">
            <p className="inline-block border-y border-[#ff9900] text-lg sm:text-xl tracking-widest text-black px-1">SIGN UP</p>
            <p className="text-gray-800 mt-4 text-base sm:text-lg lg:text-xl font-extralight">Let's Start Your Dinner With Us</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6 w-full mb-8 sm:mb-10">
            <input
              type="text"
              placeholder="Name"
              className="h-12 sm:h-14 lg:h-16 px-4 sm:px-5 rounded-xl text-black font-semibold text-base sm:text-lg border-2 border-gray-400 focus:outline-none w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="h-12 sm:h-14 lg:h-16 px-4 sm:px-5 rounded-xl text-black font-semibold text-base sm:text-lg border-2 border-gray-400 focus:outline-none w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="h-12 sm:h-14 lg:h-16 px-4 sm:px-5 rounded-xl text-black font-semibold text-base sm:text-lg border-2 border-gray-400 focus:outline-none w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="h-12 sm:h-14 lg:h-16 px-4 sm:px-5 rounded-xl text-black font-semibold text-base sm:text-lg border-2 border-gray-400 focus:outline-none w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="h-16 sm:h-20 px-4 sm:px-5 rounded-xl text-black font-semibold text-base sm:text-lg border-2 border-gray-400 focus:outline-none w-full col-span-1 sm:col-span-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="ZIP CODE"
              className="h-12 sm:h-14 lg:h-16 px-4 sm:px-5 rounded-xl text-black font-semibold text-base sm:text-lg border-2 border-gray-400 focus:outline-none w-full"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          {error && (
            <p className="text-red-600 text-base sm:text-lg font-medium text-center mb-4">
              {error}
            </p>
          )}
          <div className="px-0 sm:px-2 flex flex-1 flex-col items-center gap-6 sm:gap-8">
            <button
              type="submit"
              disabled={loading}
              className="bg-amber-500 text-center text-lg sm:text-xl lg:text-2xl text-gray-800 font-extrabold w-full h-12 sm:h-14 lg:h-16 rounded-xl cursor-pointer disabled:opacity-70"
            >
              {loading ? "Signing up..." : "SIGNUP"}
            </button>
            <p className="text-black text-base sm:text-lg font-medium text-center">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-amber-600 underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signUp;