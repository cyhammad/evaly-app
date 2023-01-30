import Link from "next/link";
import React from "react";
import { EvalyLogo } from "../../components/icons/logo";

const Login = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-white h-screen">
      <EvalyLogo height={50} />
      <div className="flex flex-col w-[90%] max-w-xl mt-10">
        <input
          type="email"
          name="email"
          id="email"
          className="bg-[#f5f5f5] rounded-lg p-3 mb-5"
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          id="password"
          className="bg-[#f5f5f5] rounded-lg p-3 mb-2"
          placeholder="Password"
        />
        {/* Forget Password */}
        <div className="flex justify-end">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            Forget Password?
          </Link>
        </div>
      </div>
      {/* Sign In Button */}
      <button className="bg-[#000000] text-white rounded-lg p-3 w-[90%] max-w-xl mt-10 mb-5">
        Sign In
      </button>
      <p>Or</p>
      {/* Sign In with Google */}
      <button className="border-2 border-black text-[#000000] font-bold rounded-lg p-3 w-[90%] max-w-xl mt-5">
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
