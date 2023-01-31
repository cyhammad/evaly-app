import Head from "next/head";
import React from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";

const OtpPage = () => {
  const [otpValue, setOtpValue] = useState("");
  return (
    <>
      <Head>
        <title>evaly - Login</title>
      </Head>
      <div className="flex flex-col items-start sm:items-center px-3 py-10 bg-white h-screen">
        <div className="flex flex-col gap-5 ">
          <p className="text-3xl font-bold text-black">
            Help us verify your account
          </p>
          <p className="text-sm">
            An OTP has been sent to <b>johndoe@gmail.com</b> <br />
            Please enter that below
          </p>
          <OtpInput
            value={otpValue}
            onChange={setOtpValue}
            numInputs={6}
            separator={<span> </span>}
            inputStyle={{
              width: "3rem",
              height: "3rem",
              borderRadius: "0.3rem 0.3rem 0 0",
              fontSize: "1.5rem",
              margin: "0 0.5rem",
              textAlign: "center",
              outline: "none",
              backgroundColor: "#f5f5f5",
            }}
            focusStyle={{
                borderBottom: "2px solid black"
            }}
          />
        </div>
      </div>
    </>
  );
};

export default OtpPage;
