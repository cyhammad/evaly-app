import Link from "next/link";
import React from "react";
import { EvalyLogo } from "../../components/icons/logo";
import { useFormik, Form, FormikProvider } from "formik";
import FormTextField from "../../components/forms/FormTextField";
import * as yup from "yup";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Icon } from "@iconify/react";
import googleIcon from "@iconify/icons-logos/google-icon";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Head from "next/head";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("Enter your email"),
    password: yup.string().required("Enter your password"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("Form Values", values);
    },
  });

  return (
    <>
      <Head>
        <title>evaly - Login</title>
      </Head>
      <div className="flex flex-col gap-11 items-center justify-center py-20 bg-white">
        <EvalyLogo height={50} />
        {/* <p className='text-3xl font-bold text-black'>Sign In to your account</p> */}
        <div className="flex flex-col gap-4 w-[90%] max-w-lg">
          <TextField
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            placeholder="Email"
            variant="outlined"
            color="secondary"
            size="medium"
            className="textField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineOutlinedIcon color="inherit" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            placeholder="Password"
            variant="outlined"
            color="secondary"
            className="textField"
            size="medium"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon color="inherit" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Forget Password */}
          <div className="flex justify-end pb-2">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Forget Password?
            </Link>
          </div>
          {/* Sign In Button */}
          <button
            className="bg-[#000000] text-white rounded-lg p-3 w-ull"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Sign In
          </button>
          <p className="text-center">Or</p>
          {/* Sign In with Google */}
          <button className="border-2 border-black text-[#000000] font-semibold rounded-lg p-3 w-full flex">
            <Icon icon={googleIcon} width={24} height={24} />
            <p className="flex-1 text-center">Sign In with Google</p>
          </button>
        </div>
        <p className="text-center text-md font-normal">
          Don't have account?{" "}
          <Link
            href="/auth/signup"
            className="text-red-700 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
