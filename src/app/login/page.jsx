"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { loginUser } from "../../../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginUser({ email, password });
      console.log("Login success", data);
    } catch (err) {
      console.error(err);
      setError("Failed to login. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen mb-24">
      <div className="flex-1 flex flex-col items-center min-h-screen bg-white">
        <form
          className="w-full sm:w-4/5 md:w-3/5 lg:w-2/3 bg-[#FFF6EA] p-8 rounded-lg my-20"
          onSubmit={handleSubmit}
        >

          <div className="text-center mt-10 mb-10">
            <p className="inline-block border-y border-[#ff9900] text-2xl tracking-widest text-black px-1">LOGIN</p>
            <p className="text-gray-800 mt-4 text-2xl font-extralight">Let's Start Your Dinner With Us</p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-10 mb-10">

            <input
              type="email"
              placeholder="Email"
              className="block w-full md:w-2/3 h-16 md:h-20 p-6 md:p-10 rounded-xl text-lg md:text-2xl text-black font-extrabold border-2 mb-6 border-gray-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="block w-full md:w-2/3 h-16 md:h-20 p-6 md:p-10 rounded-xl text-lg md:text-2xl text-black font-extrabold border-2 mb-6 border-gray-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <p className="text-red-600 text-base md:text-lg font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-amber-500 text-center text-xl md:text-2xl text-black font-bold w-full md:w-2/3 h-16 md:h-20 rounded-xl cursor-pointer disabled:opacity-70"
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>

            <p className="text-xl md:text-2xl text-black">OR</p>

            <button
              type="button"
              className="border-3 border-amber-600 flex items-center justify-center text-xl md:text-3xl text-gray-800 font-extrabold w-full md:w-2/3 h-16 md:h-20 rounded-xl cursor-pointer"
            >
              <FcGoogle className="text-3xl md:text-4xl mr-3" />
              Login With Google Account
            </button>

            <p className="text-black text-xl md:text-2xl font-medium">
              Don't have an account?{" "}
              <Link href="/signup" className="font-bold text-amber-600 underline">Sign Up</Link>
            </p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
